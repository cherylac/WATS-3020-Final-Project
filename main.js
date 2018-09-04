//Main javascript file for WATS 3020 Final Project - Birthdate Pool//


class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.username = email.split('@')[0];
    }
}

class Contestant extends Person {
    constructor(name, email, birthdate, babyname){
        super(name, email);
        this.birthdate = birthdate;
        this.babyname = babyname;
        console.log(this);
    }
}

class Contest {
    constructor(){
        this.contestants = [];
    }
    
    updateRoster(contest){
        let rosterTbody = document.querySelector('#roster tbody');
        rosterTbody.innerHTML = '';
        
        //Populate Roster Content//
        for ( let contestant of this.contestants){
            let newTR = document.createElement('tr');
            let nameTD = document.createElement('td');
            nameTD.innerHTML = contestant.name;
            newTR.appendChild(nameTD);
            
            let emailTD = document.createElement('td');
            emailTD.innerHTML = contestant.email;
            newTR.appendChild(emailTD);
            
            let birthdateTD = document.createElement('td');
            birthdateTD.innerHTML = contestant.birthdate;
            newTR.appendChild(birthdateTD);
            
            let babynameTD = document.createElement('td');
            babynameTD.innerHTML = contestant.babyname; 
            newTR.appendChild(babynameTD);
        
            
            rosterTbody.appendChild(newTR);           
        }
    }

addContestant(){
    let name = prompt('Please enter your name');
    let email = prompt('Please enter your email address');
    let birthdate = prompt('What day will the baby be born? (enter as MM/DD/YYYY');
    let babyname = prompt('What will the baby\'\s name be?');
    let newContestant = new Contestant(name, email, birthdate, babyname);
    this.contestants.push(newContestant);
    this.updateRoster();
   }
}

let rosterTbody = document.querySelector('#roster tbody');
   rosterTbody.innerHTML = '';
   

let myContest = new Contest();
let addContestantButton = document.querySelector('#add-contestant');
addContestantButton.addEventListener('click', function(e){
    console.log('Calling addContestant() method.');
    myContest.addContestant();
})

//function showWinner () {
//    let winningDate = "8/27/2018";
//    if ((contestant.birthdate = winningDate)); {
//    document.getElementByID("showwinner").innerHTML = "winner!";
//    console.log('We have a winner.');
//    }  
    //updateRoster(this);
//}
//markWinner(username, status ='') {
//    let contestant = this.contestant(username);
//    let winningDate = '8/27/2018';
//    if (contestant.birthdate === winningDate)
//    let status = winner!;
//    if (status === 'winner') {
//        contestant.win.innerHTML = "You win!";
//        else { contestant.win.innerHTML = "You did not win";    
//        }
//    } updateRoster(this);
//}

//findContestant(username){
//    let foundContestant = this.contestants.find(function(contestant, index) {
//        return contestant.username == username;
//    });
//    return foundContestant;
//}
//showBirthdateButton.addEventListener("click", showWinner)
//function showWinner (){
//    birthdate = document.getElementById("birthdate").value;
//if ((birthdate = '08/27/2018')){
//    birthdateTD.innerHTML = "You win!";
//}   else birthdateTD.innerHTML = "you did not win"

let showBirthdateButton = document.querySelector('#show-birthdate');
showBirthdateButton.addEventListener('click', function (event){
    prompt('Are you done guessing?');
    console.log('Calling show birthdate');
    showBirthdateButton.innerHTML = "08/27/2018";
});

//TODO: make a function to show winner or not winner for each contestant//