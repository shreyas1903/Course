var database = [
    {
        username: "shreyas",
        password: "patil"
    },
    {
        username: "abhishek",
        password: "mutha"
    },
    {
        username: "nikhil",
        password: "maste"
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


function isuserValid(username, password){
    for(var i =0; i < database.length;i++){
        if(database[i].username === username &&
        database[i].password === password){
            return true;
        }
        

    }
    return false;
}


function signIn(username, password) {
    

    if(isuserValid(username, password)){
        console.log(newsFeed);
    }
    else{
        alert("sorry, wrong username and pssword")
    }

}
signIn(userNamePrompt, passwordPrompt);