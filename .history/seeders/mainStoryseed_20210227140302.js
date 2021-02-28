let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync().then(() => {
let stories = [
    {
        title: "Homework Dilemma",
        narrative: "Your first homework has been graded. You received a decent grade but you do notice things in the feedback from the grader that would be easy points to fix and would definitely help to polish your code. Do you:",
        leftChoice: "Accept the grade and keep the feedback in mind. You already have another homework due soon and don’t want to fall behind on that.",
        leftChoiceId: 5,
        rightChoice: "Use the feedback to correct your mistakes and submit your homework for a better grade.",
        rightChoiceId: 2        
    },
    {
        title: "Flexbox",
        narrative: "You are having trouble understanding flexbox and you need to use it to complete the activity you are working on. There have been a few links posted in resources to help you practice and figure out how to use it, however you alway found a snippet of code you could copy and paste into your activity to just get it over with. What do you do?",
        leftChoice: "Take the time, use the resources and make sure you understand it in case the next activity is similar.", 
        leftChoiceId: 3,
        rightChoice: "Copy and paste. It just needs to work.",
        rightChoiceId: 6
    },
    {
        title: "Saturday Class",
        narrative: "Today is a beautiful day outside. The sun is shining and you receive a message from your best friend inviting you to brunch. Sounds like a great time! It is a saturday morning and you have been dying to try this restaurant. All seems great, however …… You have Saturday morning class and it’s right when you are supposed to go to brunch. Do you:",
        leftChoice: "Go to brunch. The class is recorded and you can always catch up later.", 
        leftChoiceId: 7,
        rightChoice: "Go to class, even though the class is recorded you have the chance to ask questions and participate when you attend live.",
        rightChoiceId: 4         
    },
    {
        title: "Class Struggles",
        narrative: "Class is really difficult today and you are struggling to grasp the concepts in lecture. Suddenly you are put into breakout rooms and asked to do pair programming on an activity. What do you do?",
        leftChoice: "Offer to share your screen. Even though you are struggling, maybe putting yourself out there and having your group help you will be beneficial.", 
        leftChoiceId: 9,
        rightChoice: "Just stay quiet and hope the rest of the group knows what is going on. Hopefully someone will say something that makes sense to you and will help you catch up.",
        rightChoiceId: 8         
    },
    {
        title: "Quiz 1",
        narrative: "ECMAScript stands for European Computer Manufacturer's Association.",
        leftChoice: "True", 
        leftChoiceId: 2,
        rightChoice: "False",
        rightChoiceId: 2         
    },
    {
        title: "Quiz 2",
        narrative: "The M in the MVC pattern stands for modules.",
        leftChoice: "True", 
        leftChoiceId: 3,
        rightChoice: "False",
        rightChoiceId: 3         
    },
    {
        title: "Quiz 3",
        narrative: "What does HTML stand for?",
        leftChoice: "HyperText Markup Language", 
        leftChoiceId: 4,
        rightChoice: "HyperText Markdown Language",
        rightChoiceId: 4         
    },
    {
        title: "Quiz 4",
        narrative: "In CSS what do the two S’s stand for?",
        leftChoice: "Signal Styles", 
        leftChoiceId: 10,
        rightChoice: "Style Sheets",
        rightChoiceId: 10         
    },
    {
        title: "Congrats",
        narrative: "Congratulations you made many choices along the way to get you to where you are now. All of your practice, hardwork and dedication has landed you a job at an uber successful mega tech powerhouse! Good Luck!",
        // leftChoice: "", 
        // leftChoiceId: ,
        // rightChoice: "",
        // rightChoiceId:          
    },
    {
        title: "Practice",
        narrative: "Coding is a lot of hard work and takes tons of practice. Keep at it and you will soon reap the rewards!",
        // leftChoice: "", 
        // leftChoiceId: ,
        // rightChoice: "",
        // rightChoiceId:          
    }
];
console.log(db.MainStory)
//db
db.MainStory.bulkCreate(stories)
    .then(data => {
        console.log(data);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
})

//add items to seed
//mainstory items
//throw items into inventory on character