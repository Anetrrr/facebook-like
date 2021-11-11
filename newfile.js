 var database = [ 
     {
     username: "bencarson",
     password: "ben"},
     {
         username: "brandon",
         password: "1234"},
    {
        username: "annie",
        passowrd: "4444"
    }]
var newsFeed = [
    {
        username: "sandy",
        tweets: "I love Elon Musk",
        actions: "like"},
    {
        username: "excel",
        tweets: "sir, I am hungry",
        action: "smiley face emoji"
        },
    {
        username: "rose",
        tweets: "upper iweka",
        action: "funny video"
    }
]
var uName = prompt("Enter your username")
var pWord = prompt("Enter your password")

function isUserValid(uName, pWord) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === uName && 
            database[i].password === pWord)
        {
            return true;
        }}
               return false;
        }

    
function logIn (uName, pWord) {
    if (isUserValid(uName, pWord)){
       alert("Successful");
        console.log(newsFeed);}     
      else {      
            alert("Incorrect login");
        }
        
}
logIn(uName, pWord);



