# PROJECT NAME
	Speech2Me

## Description
_Duration: 2 Weeks_

The Speech2Me app is a web application that will allow users to practice their speeches on their own as well as present to a group. This app allows users to create speeches and record all the dialog stated using the NPM speech to text recognition API. 

A user has the ability to set a goal for the time to complete their speech, create notes to see on the side while they are presenting, create table topics for items to discuss, and select the type of speech they are giving. Upon creation of the speech a user will then be able to click a start button that will record their speech and once finished go to a feedback session that will tell them their stats for the speech. 

Did the speaker finish in the allotted time? It will also have a counter for the number of times users say certain keywords for example “likes” and “ands”. The user may also submit feedback on how they felt about the speech by clicking on the evaluate button. After a user is satisfied with the speech feedback they may then submit the speech as completed by clicking on the end review section that will save all their speeches to a history page. Users will be able to click on each speech in order to get the stats of all the speeches.

To see the fully functional website, please visit: [Speech2Me](https://fathomless-basin-20031.herokuapp.com/)

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

- Create a new database called `prime_app`
- Copy and run the sql commands in Postico from the `database.sql` file

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Usage
1. First click on the Join Speech2Me link and create a user by filling out the form
2. You will automatically be logged in
3. Create a speech by clicking on the 'Create New Speech' Button(Title, Min Time and Max Time)
4. Prep for speech by creating notes for your speech by click on on the 'Add Notes' button. This will take you to a textarea field where you can type as many notes as you like.
5. Create table topics that will be discussed at the end of your speech. Its the same process as adding notes but you'll click on the 'Add Table Topics' button.
6. Add a speech type by click on the speech dropdown.
7. You can then click start speech and go to the presentation page
8. Presentation page has three panes. Left pane shows a word count and will increase as you say the keywords in your speech. Right pane has the notes you created in the notes section to help you during your speech. The center pane is the magic pane that is connected to the speech to text api and has the controls.
9. Controls for the speech. Record starts the api for speech to text and timer. Pause Stops the recording and timer but keeps the transcript. Submit transcript will stop recording and timer an after a 3 sec delay take you to the review page. Cancel Speech will stop the recording and timer then goes back to the home page.
10. Review page show you all the information about the speech including speech content(what was said), speech notes, speech table topics, word count for filler words, speech run time shows the time the speech took and if the speaker finished in the time specified, and the speech type.
11. The review page controls allows the speaker to reset the speech back to the beginning to do over,change count allows you to adjust the filler words in case a word was used properly, add evaluation also either the speaker or some one who heard the speech to evaluate the speech and end review submits the speech to history page.
12. History page will show the user their completed speeches with all the data from that speech.

## Built With
- HTML
- CSS
- Javascript
- Node.js
- Express.js
- PostgreSQL
- React.js
- React Redux
- React Sagas
- React Router
- React Logger
- Passports

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special shout out to my instructors Mary and Kris for helping become the programmer I always dreamed of and to my cohort at Prime Dijkstra!! Woot Woot, Help for Life!