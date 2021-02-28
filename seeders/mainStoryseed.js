let sequelize = require("sequelize");
let db = require("../models/");

module.exports = function (app) {
db.sequelize.sync().then(() => {
let stories = [
    {//1
        title: "Homework Dilemma",
        narrative: "Your first homework has been graded. You received a decent grade but you do notice things in the feedback from the grader that would be easy points to fix and would definitely help to polish your code. Do you:",
        leftChoice: "Accept the grade and keep the feedback in mind. You already have another homework due soon and don’t want to fall behind on that.",
        leftChoiceId: 11,
        rightChoice: "Use the feedback to correct your mistakes and submit your homework for a better grade.",
        rightChoiceId: 2
        // exp: ,
        // item:""        
    },
    {//2
        title: "Flexbox",
        narrative: "You are having trouble understanding flexbox and you need to use it to complete the activity you are working on. There have been a few links posted in resources to help you practice and figure out how to use it, however you already found a snippet of code you could copy and paste into your activity to just get it over with. What do you do?",
        leftChoice: "Take the time, use the resources and make sure you understand it in case the next activity is similar.", 
        leftChoiceId: 18,
        rightChoice: "Copy and paste. It just needs to work.",
        rightChoiceId: 19
         // exp: ,
        // item:"" 
      },
    {//3
        title: "Saturday Class",
        narrative: "Today is a beautiful day outside. The sun is shining and you receive a message from your best friend inviting you to brunch. Sounds like a great time! It is a saturday morning and you have been dying to try this restaurant. All seems great, however …… you have class Saturday morning and it’s right when you are supposed to go to brunch. Do you:",
        leftChoice: "Go to brunch. The class is recorded and you can always catch up later.", 
        leftChoiceId: 8,
        rightChoice: "Go to class, even though the class is recorded you have the chance to ask questions and participate when you attend live.",
        rightChoiceId: 27
         // exp: ,
        // item:""      
    },
    {//4
        title: "Class Struggles",
        narrative: "Class is really difficult today and you are struggling to grasp the concepts in lecture. Suddenly you are put into breakout rooms and asked to do pair programming on an activity. What do you do?",
        leftChoice: "Offer to share your screen. Even though you are struggling, maybe putting yourself out there and having your group help you will be beneficial.", 
        leftChoiceId: 9,
        rightChoice: "Just stay quiet and hope the rest of the group knows what is going on. Hopefully someone will say something that makes sense to you and will help you catch up.",
        rightChoiceId: 8
         // exp: ,
        // item:""          
    },
    {//5
        title: "Quiz 1",
        narrative: "ECMAScript stands for European Computer Manufacturer's Association.",
        leftChoice: "True", 
        leftChoiceId: 12,
        rightChoice: "False",
        rightChoiceId: 13
         // exp: ,
        // item:""          
    },
    {//6
        title: "Quiz 2",
        narrative: "The M in the MVC pattern stands for modules.",
        leftChoice: "True", 
        leftChoiceId: 15,
        rightChoice: "False",
        rightChoiceId: 14
         // exp: ,
        // item:""          
    },
    {//7
        title: "Quiz 3",
        narrative: "What does HTML stand for?",
        leftChoice: "HyperText Markup Language", 
        leftChoiceId: 16,
        rightChoice: "HyperText Markdown Language",
        rightChoiceId: 17
         // exp: ,
        // item:""          
    },
    {//8
        title: "Quiz 4",
        narrative: "In CSS what do the two S’s stand for?",
        leftChoice: "Signal Styles", 
        leftChoiceId: 22,
        rightChoice: "Style Sheets",
        rightChoiceId: 23
         // exp: ,
        // item:""          
    },
    {//9
        title: "Congrats",
        narrative: "Congratulations you made many choices along the way to get you to where you are now. This is not the end of your coding journey but the beginning! All of your practice, hardwork and dedication has landed you a job at an uber successful mega tech powerhouse! Good Luck!"
        // exp: ,
        // item:""         
    },
    {//10
        title: "Practice",
        narrative: "Practice, Practice, Practice! Coding is a lot of hard work and takes tons of practice. Keep at it and you will soon reap the rewards!"
       // exp: ,
        // item:""          
    },
     {//11
        title: "Quiz? 1",
        narrative: "Because you didnt revise your homework we would like to challenge your skills with a pop quiz. Take Quiz?",
        leftChoice: "Sure!", 
        leftChoiceId: 5,
        rightChoice: "No thanks!",
        rightChoiceId: 2
         // exp: ,
        // item:""          
    },
      {//12
        title: "Correct 1",
        narrative: "Correct! You've gained 50 Experience points!",
        leftChoice: "Let's keep going", 
        leftChoiceId: 2,
        exp: 50
        // item:""          
    },
      {//13
        title: "Spotty Wifi",
        narrative: "Your wifi is going in and out making it hard to understand class. Quick restart your router and log back in! You get 50 experience points for dealing with this mess!",
        leftChoice: "Well, that was easy", 
        leftChoiceId: 2,
        exp: 50,
        // item:""         
    },
      {//14
        title: "Prize",
        narrative: "Correct! You get 50 Experience points!",
        leftChoice: "Awesome!", 
        leftChoiceId: 3,
        exp: 50
        // item:""         
    },
      {//15
        title: "Forgot to make commits",
        narrative: "Uh oh! You forgot to make commits throught your project and now if something goes wrong you have nothing to revert back to. ",
        leftChoice: "I'll remember next time!", 
        leftChoiceId: 7
        // exp: ,
        // item:""         
    },
      {//16
        title: "Prize Correct",
        narrative: "Great job! You won Ada Lovelace's Keyboard",
        leftChoice: "Cool!", 
        leftChoiceId: 4,
        // exp: ,
        item:"Ada Lovelace's Keyboard"        
    },
      {//17
        title: "Bad Bug",
        narrative: "Oh no! There is a bug in your code. It has been hours and you still can't find it",
        leftChoice: "Bummer!", 
        leftChoiceId: 3
         // exp: ,
        // item:""         
    },
      {//18
        title: "Fixed a bug",
        narrative: "A fellow peer needed help fixing a bug in their project. You  found their typo and got their code working! Great job! You get 50 Experience points!",
        leftChoice: "Where to next?", 
        leftChoiceId: 3,
        exp: 50
        // item:""         
    },
      {//19
        title: "Quiz?",
        narrative: "Here is a quiz to show you know your stuff. Are you up for the challenge?",
        leftChoice: "Take quiz", 
        leftChoiceId: 6,
        rightChoice: "No quiz",
        rightChoiceId: 20
         // exp: ,
        // item:""          
    },
      {//20
        title: "Forgot homework",
        narrative: "Oops you forgot to turn in your homework. Now you are behind and will have to make it up.",
        leftChoice: "Sheesh", 
        leftChoiceId: 3
        // exp: ,
        // item:""  
              
    },
    {//21
        title: "You won an item ",
        narrative: "You won Brendan Eich's Keyboard and 50 more Experience points! Way to go! Would you like another chance to win a new keyboard?",
        leftChoice: "No thanks", 
        leftChoiceId: 10,
        rightChoice: "Yes, I want to go for it",
        rightChoiceId: 24,
        exp: 50,
        item:"Brendan Eich's Keyboard"         
    },
      {//22
        title: "Incorrect ",
        narrative: "Close but not exactly. That answer is incorrect.",
        leftChoice: "Ok", 
        leftChoiceId: 10
         // exp: ,
        // item:""         
    },
  {//23
        title: "Correct points ",
        narrative: "You got that answer correct! Would you like another chance to win a new keyboard?",
        leftChoice: "No thanks I'm happy with what I have.", 
        leftChoiceId: 9,
        rightChoice: "Yes! The more the better!",
        rightChoiceId: 24
         // exp: ,
        // item:""         
    },
     {//24
        title: "Item quiz",
        narrative: "Who wrote the first version of HTML?",
        leftChoice: "Tim Berners-Lee", 
        leftChoiceId: 25,
        rightChoice: "Håkon Wium Lie",
        rightChoiceId: 26
         // exp: ,
        // item:""         
    },
      {//25
        title: "Win Item",
        narrative: "You won Tim Berners-Lee's Keyboard! Very fitting as he was the inventor of HTML! ",
        leftChoice: "Add that to my collection!", 
        leftChoiceId: 9,
        // exp: ,
        item:"Tim Berners-Lee's Keyboard"          
    },
      {//26
        title: "Lose",
        narrative: "Not quite, but good try. You get 50 Experience points for challenging yourself!",
        leftChoice: "Darn! I will remember that next time.", 
        leftChoiceId: 10,
        exp: 50
        // item:""         
    },
    {//27
      title: "Let's test your skills",
      narrative:"Think fast! How many days did it take to create JavaScript?",
      leftChoice: "10 days", 
      leftChoiceId: 21,
      rightChoice: "66 days",
      rightChoiceId:28
       // exp: ,
        // item:"" 
    },
     {//28
      title: "Wrong",
      narrative:"Off by a little bit there. Shall we continue on?",
      leftChoice: "Let's keep going", 
      leftChoiceId: 4
       // exp: ,
        // item:"" 
    } 



];

db.MainStory.bulkCreate(stories)
    .then(data => {
        // console.log(data);
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        // process.exit(1);
    });
})
}