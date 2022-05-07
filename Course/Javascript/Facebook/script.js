var database = [
    {
        username: "shreyas",
        password: "secret"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "so tires from all the learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool"
    }

];

var userNamePrompt = prompt("what is your username");
var passwordPrompt = prompt("what is ur password");

function signIn(user, pass) {
    if(user === database[0].username 
    && pass === database[0].password){
        console.log(newsFeed);
    }
    else{
        alert("sorry, wrong username and pssword")
    }

}
signIn(userNamePrompt, passwordPrompt);