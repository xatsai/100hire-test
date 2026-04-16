Level 2

#Research

- My topic is "AI-powered SEO content production"
- I researched about top creators, influencers, teachers and practioniers of AI SEO.
- I choose on the basis of their engagement, their social score and practical experience.
- I found their active channels and found the relevant content around the AI SEO
- I listed all the related resource in the research/sources.md

#Folder Creation

- On the basis of instructions, I created the research folder and other related folders
- My plan is to make each creators in folder in the sub linkedin-post, others, and youtube-transcript folders
- In each of creators folder there will be seprate files consisting of the transcription of the youtube video, linkedin post or other related items
- In research/sources.md, I have mentioned all the resources used
- I also created a scripts folder where I will using the scripts to fetch the transcription of youtube videos and linkedin post scraper.

#Youtube Transcription

- I saved my sources in the sources.md
- I used codex to automate the folder creation and trancript file creation part. Folder name is by the creators name and file follows video_title.md nomenclature
- I installed some dependencies for youtube transcription. As I need to transcript many videos I used youtube transcript script instead of using supadata.
- I created script using codex such that if I add more youtube videos and run the script it will automatically creates the file and trancription in the research/youtube-transcripts.

#Linkedin Scraping

- Initially I thought to manually scrap the linkedin post but imo it is not scalable. So I tried to find some resources to scrap the linkedin posts of the creators. I came across Apify which gives $5 free credits. I used it to scrap LinkedIn posts
- The major problem I faced is to scrap the images and videos. I am still working how to convert image or video into text or something for the analysis
- From APify api I scraped the linkedin post as the Linkedin profiles are saved in the research/soruces.md. To make the posts relevant I introduced some filters like posts that have more 5 likes and 5 comments and relevant to keywords like ai, seo, chatgpt, llm etc. should be fetched. On the basis of the keyowrd relevance I asked codex to provide the score to the post.
- I automated the folders creation and file creation throught the scripts/linkedin-scraper.js
- I saved the API key in the .env folder so that it remains secure.
- Lastly, I filtered out some of the non-relevants posts.

#Blogs Scraping

- I already listed the blog resources in the research/soruces.md
- I asked codex to create a script for the blog scrapping from the urls
- It installed the dependencies and created a script and then run the script. This process was easy and smooth
- Then it run the script and fetched the blogs related information and created the relevant folders and files in it
- Atlast, I asked codex to clean the data as meta data etc. also got fetched so it updated the scraper and clean the data

--------------------------------------------------------------------------

Level 1

#Hi I am Arpit Jain, Please find the required infromation below  

##Tools Installed

- Cursor
- Claude Code 
- Openai Codex

##Steps Completed

- Installed Cursor
- Added Claude Code through installation command
- Tried login to the Claude. Failed as it requires subscription to Claude pro
- Added Openai Codex through installation command
- Logged into the Codex using command "codex" into the terminal
- Created a public repo on the github by the name of "100hire-test"
- Opened the repoitory in the local using cursor agent
- Created [readme.md](http://readme.md) file
- Commited and pushed to the Github

##Issues Faced and solution

- Problem:

1. Enabling the codex and claude code through extension was giving me hard time as I was enable to find them in the marketplace of Cursor
2. While commiting the code, it was giving the authentication error.
3. I was not able to login into Claude Code as it requires Claude pro or max.

- Solution:

1. I installed the Codex and Claude code through the installation command.
2. To fix this, I generated a classic token on the github and used it to authenticate and commit the changes

