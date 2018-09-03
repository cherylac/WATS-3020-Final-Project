//Main javascript file for WATS 3020 Final Project - Birthdate Pool//


class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
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
    let name = prompt('Please enter your name', 'Jane Doe');
    let email = prompt('Please enter your email address', 'me@email.com');
    let birthdate = prompt('What day will the baby be born? (enter as MM/DD/YYYY', '08/31/2018');
    let babyname = prompt('What will the baby\'\s name be?', 'Maria');
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