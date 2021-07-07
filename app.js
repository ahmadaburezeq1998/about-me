"use strict";


// let name="ahmad";
// let age =23;
// let uni="zaytoonah";
// let hobbies = "eating"
// let goal="learrn css";


let name = prompt("what is your name:");
let pcounter = 0;
let ncounter = 0;
alert("Welcome " + name + "to our website");


function questions1() {
    let q1 = prompt("is my name ahmad?");

    if ((q1.toLowerCase() == "yes") || (q1.toLowerCase() == "y")) {
        alert("great that's the right answer ")
        pcounter++;
        // console.log("true");
    }

    else if ((q1.toLowerCase() == "no") || (q1.toLowerCase() == "ny")) {
        alert("oops you got it wrong ")
        // console.log("false");
        ncounter++;


    }
    else { alert("wrong input") };
}
questions1();


function questions2() {
    let q2 = prompt("am i older than 50 ?");
    if ((q2.toLowerCase() == "yes") || (q2.toLowerCase() == "y")) {
        alert(" oops you got it wrong ")
        // console.log("false");
        ncounter++;

    }

    else if ((q2.toLowerCase() == "no") || (q2.toLowerCase() == "n")) {
        alert("great that's the right answer ")
        // console.log("true");
        pcounter++;
    }
    else { alert("wrong input") };
}
questions2();


function questions3() {
    let q3 = prompt("did  i go to alzaytoonah uni ?");
    if ((q3.toLowerCase() == "yes") || (q3.toLowerCase() == "y")) {
        alert("great that's the right answer ")
        // console.log("true");
        pcounter++;
    }

    else if ((q3.toLowerCase() == "no") || (q3.toLowerCase() == "n")) {

        alert(" oops you got it wrong ")
        // console.log("false");
        ncounter++;
    }
    else { alert("wrong input") };
}
questions3();

function questions4() {
    let q4 = prompt("do i like food ?");
    if ((q4.toLowerCase() == "yes") || (q4.toLowerCase() == "y")) {
        alert("great that's the right answer ")
        // console.log("true");
        pcounter++;
    }

    else if ((q4.toLowerCase() == "no") || (q4.toLowerCase() == "n")) {

        alert(" oops you got it wrong ")
        // console.log("false");
        ncounter++;

    }
    else { alert("wrong input") };
}
questions4();

function questions5() {
    let q5 = prompt("is one of my goals to learn css ?");
    if ((q5.toLowerCase() == "yes") || (q5.toLowerCase() == "y")) {
        alert("great that's the right answer ")
        // console.log("true");
        pcounter++;
    }

    else if ((q5.toLowerCase() == "no") || (q5.toLowerCase() == "n")) {

        alert(" oops you got it wrong ")
        // console.log("false");
        ncounter++;
    }
    else { alert("wrong input") };

    alert(name + "you answered " + pcounter + " questions right and " +
        ncounter + "ansers wrong");
}
questions5();



function questions6() {
    alert("lets play a game");

    let mynumber = 6;
    let usernumber = prompt("guess a number between 0 and 10 ");
    let i = 0;

    while (i < 3 && (mynumber != usernumber)) {
        if (usernumber == mynumber) {
            alert("you won");
            console.log("you won");
            pcounter++;
        }
        else if (usernumber < 6) { alert("your guess is low") }
        else if (usernumber > mynumber) { alert("your guess is high ") }
        else { alert("ou should only guess between 0 and 10") }
        usernumber = prompt("guess a number between 0 and 10 ");
        i++;
        if (i == 3 && (usernumber != mynumber)) {
            alert("you lost the rright answerr is " + mynumber);
            console.log("you lost");
            ncounter++;
        }
    }

}
questions6();

function questions7() {
    alert("lets play another game");

    let cities = ["amman", "jarash", "ajloun", "mafraq", "aqaba", "irbid", "salt", "madaba"];
    let usercity = prompt("name a city in jordan");

    let d = 0;
    let b = 0
    while (d < 5) {

        for (b; b < cities.length; b++) {
            if (usercity == cities[b]) {
                alert("thats a right answer");
                b = 10;
                pcounter++;
                break;
            }
            else {
                alert("try again");
                usercity = prompt("name a city in jordan");
                break;
            }

        }
        d++;
    }
    if (d == 5 && (usercity != cities[cities.length]) && (b != 10)) {
        alert("you lost");
        alert("the right answer could've been one of " + cities);
        ncounter++;


    }
}
questions7();


alert("you have " + pcounter + " right answers and " + ncounter + " wrong answers");