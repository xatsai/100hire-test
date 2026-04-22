#!/usr/bin/env python3
import json
import sys
from pathlib import Path


def extract_title(content: str, rel_path: str) -> str:
    for raw_line in content.splitlines():
        line = raw_line.strip()
        if not line:
            continue
        if line.startswith("#"):
            heading = line.lstrip("#").strip()
            if heading:
                return heading
        if line.lower().startswith("title:"):
            maybe_title = line.split(":", 1)[1].strip()
            if maybe_title:
                return maybe_title
        return line
    return Path(rel_path).stem.replace("-", " ").replace("_", " ").strip() or Path(rel_path).name


def platform_label(file_type: str) -> str:
    mapping = {
        "youtube": "YouTube",
        "linkedin": "LinkedIn",
        "blog": "Blog",
    }
    return mapping.get(str(file_type).lower(), str(file_type))


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python load_influencer.py <influencer-file.json>", file=sys.stderr)
        return 1

    influencer_filename = sys.argv[1]
    repo_root = Path(__file__).resolve().parents[2]
    influencer_dir = repo_root / "analysis" / "influencer-files"
    influencer_json_path = influencer_dir / influencer_filename

    if not influencer_json_path.exists():
        print(f"Influencer file not found: {influencer_json_path}", file=sys.stderr)
        return 1

    try:
        payload = json.loads(influencer_json_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"Invalid JSON in {influencer_json_path}: {exc}", file=sys.stderr)
        return 1

    author = payload.get("author", Path(influencer_filename).stem)
    files = payload.get("files", [])
    if not isinstance(files, list):
        print(f"Invalid format: 'files' must be a list in {influencer_json_path}", file=sys.stderr)
        return 1

    combined_dir = repo_root / "analysis" / "combined-content"
    combined_dir.mkdir(parents=True, exist_ok=True)
    output_path = combined_dir / f"{author}.md"

    chunks = [f"Influencer: {author}\n\n---"]
    for entry in files:
        if not isinstance(entry, dict):
            continue

        rel_path = entry.get("path")
        if not isinstance(rel_path, str) or not rel_path:
            continue

        target_path = repo_root / rel_path
        if not target_path.exists():
            content = f"[Missing file: {rel_path}]"
        else:
            content = target_path.read_text(encoding="utf-8")

        title = extract_title(content, rel_path)
        platform = platform_label(entry.get("type", "unknown"))
        block = (
            f"Title: {title}\n"
            f"Platform: {platform}\n"
            f"Source File: {rel_path}\n\n"
            f"Content:\n{content}\n\n"
            "----"
        )
        chunks.append(block)

    output_text = "\n\n".join(chunks) + "\n"
    output_path.write_text(output_text, encoding="utf-8")
    print(f"Saved combined content to: {output_path.relative_to(repo_root)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
