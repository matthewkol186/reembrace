# reembrace 
[![Known Vulnerabilities](https://snyk.io/test/github/matthewkol186/reembrace/badge.svg)](https://snyk.io/test/github/matthewkol186/reembrace)
[![Waffle.io](https://badge.waffle.io/matthewkol186/reembrace.svg?columns=done)](https://waffle.io/matthewkol186/reembrace)
[![Maintainability](https://api.codeclimate.com/v1/badges/22cb96ecaa1206eddbfa/maintainability)](https://codeclimate.com/github/matthewkol186/reembrace/maintainability)


<img src="https://i.imgur.com/53rdMWW.png" data-canonical-src="https://i.imgur.com/53rdMWW.png" alt="reembrace logo" height="75" width="auto" />  

_Using technology for a more compassionate approach to wrap-around services for returning citizens._

**Team members**: Matthew Sun, Marissa Gerchick, Sam Feineh, Ethan Oro, Emily Lemmerman   

This is the open-source repository for our team's submission to the 2019 SIG/SIEPR Policy Hackathon. "reembrace" is the codename for our policy proposal, which is a play on words on the term "reentry" and the term "wraparound services." Wrap-around services have actaully been shown to be _harmful_ in that they can lead to increased recidivism rates ([Doleac 2019](http://jenniferdoleac.com/wp-content/uploads/2019/01/JPAM_Point_Doleac_preprint.pdf)). One hypothesis for why wraparound services impact people released from prison in a negative manner is that they overwhelm and frustrate subjects with constant check-ins and mandatory appointments, creating obligations and furthering resentment toward the system.

We envision a better version of wraparound services that we term an "reembrace" into society. Rather than forcing people who are reentering society into a suite of programs they may not want or need, we create an accessible text service that centers around the released person and provides them with choices to pursue whatever resources they desire, at the tips of their fingertips. Different locales can have their own independent versions of the service, and work with local nonprofits / agencies to update the tool accordingly. Possible uses: connecting returning citizens with health/housing/food benefits, texting reminders for parole appointments, and even administering a text-based cognitive behavioral therapy program.

View our (fictitious) policy memo [here](https://docs.google.com/document/d/1PRD_LJgXnb8eb0_0KahzL19q8lhh4aMS8_H3ra9a0LQ/edit?usp=sharing) and our slides [here](https://drive.google.com/open?id=1ZunFIBapL15QROHFX0T5AEGIxlU0lNQRenkhj-2rtA0)!

## Demo
You can view full-length videos of our demos of various aspects of our app at the following links. We've also provided shorter GIF versions below.

### Texting service demo
---
[Full video link](https://drive.google.com/open?id=1elOSXvyYF6eW1tkyHIsMqr8El5zjdFGm)  
<img src="https://i.imgur.com/I2waMiy.gif" data-canonical-src="https://i.imgur.com/I2waMiy.gif" alt="Texting service demo GIF" height="400" width="auto" />

### Admin dashboard demo
---
[Full video link](https://drive.google.com/open?id=19cOxLMBC9qxG0ZaOuHsJzNcQckTyBmKL)  
![Admin dashboard demo GIF](https://i.imgur.com/Xm9eIhz.gif)

### Admin dashboard + texting service demo
---
[Full video link](https://drive.google.com/open?id=1bVG1KUow_Jj-e8q2gajalak0KkCUNhJ1)  
![Admin dashboard + texting service demo GIF](https://i.imgur.com/VcAlLch.gif)

## Project requirements
This project requires `npm`. Upon downloading, please install the requirements by running `npm install` in the root folder. You should also `cd` into the `client` folder and run `npm install` there as well.

This project uses the MERN stack: Node.js + Express on the backend with a MongoDB database and frontend in ReactJS. Because it is an SMS based app, we use the Twilio API to manage receiving/sending texts. To run it on your own, you'll need to create an account on Twilio, create a number, and set the incoming SMS webhook to your local server. For local testing, we recommend using [ngrok](https://ngrok.com/). 

## Server-side
The server-side app runs on Node.js with a MongoDB database. Run `mongod` to get your MongoDB database up and running. Then, run `node server.js` in the root folder to get the server up and running.

## Front-end
The front-end admin dashboard is in ReactJS. `cd` to the `client` folder and run `npm start` to initialize the client. If in WSL, run `BROWSER=none yarn start` instead (on my computer, adding this suffix removed an error with opening Google chrome).
