'use strict';

// Step 1: For this repo into your own personal REPO.
// Step 2:  Navigate to an empty file where you can glone the forked version of this repo into your terminal.
// Step 3: Run 'git clone {insert link}' to bring this file down to your local computer.
// Step 4: In the directory where you cloned down this repo run ' npm init ' and follow the steps below.
// Step 4: Complete all of the steps
      // - Packagename: enter
      // - version: enter
      // - description - Provide a brief description of this server, you will be able tp upate in the future if the package.json files.
      // - entry point: !!!!!  CHANGE THIS TO 'server.js' its auto set to index.js  !!!!!
      // - test command: enter
      // - git repo: enter
      // - keywords: enter
      // - author: Enter the names of the people who will be working on the files.
      // - license: you can choose your preference for all purpose use "MIT".
      // - Is this Ok: enter
// Step 5: Once you have your init process MAKE SURE YOU ARE IN THE RIGHT DIRECTORY of the file to download the correct dependencies
      // 'npm i cors express dotenv'
// Step 6: Navigate to the .env.sample file and rename it to .env and change the port to any preference for the port your like your server to listen too.
// Step 7: Run 'npm start', you should get this in the terminal "Listening on ${PORT}" 
// Step 8: Open chrome and go to http://localhost:{PORT}, change port to the 4 numbers you decided for you server to listen too, you should see the following on a blank page 
      // - 'This is the landing page congrats you are all set up'
// Step 9: If you dont want others to see your env variables change the .gitignore.sample file to {.gitignore} before you push up to github to prevent your env variables from getting pushed up to github.
// Step 10: CONGARTS YOU ARE ALL SET UP HAVE FUN CODING. 



require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 1234 // The 1234 is for error handling make sure you connect your .env file correctly so that the PORT works properly.

app.get('/', landingPage);

async function landingPage(req, res){
  try{
    res.status(200).send('This is the landing page congrats you are all set up')
  }catch(error){
    console.error(error.message);
  }
}

app.listen(PORT, console.log(`Listening on ${PORT}`));
