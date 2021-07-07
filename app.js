"use strict";


// let name="ahmad";
// let age =23;
// let uni="zaytoonah";
// let hobbies = "eating"
// let goal="learrn css";


let name=prompt("what is your name:");
let pcounter=0;
let ncounter=0;
alert("Welcome "+ name +"to our website");




let q1=prompt("is my name ahmad?");

if ((q1.toLowerCase()=="yes") || (q1.toLowerCase()=="y")){
    alert("great that's the right answer ")
    pcounter++;
    // console.log("true");
}

else if((q1.toLowerCase()=="no") || (q1.toLowerCase()=="ny")) {
    alert("oops you got it wrong ")
    // console.log("false");
    ncounter--;


}
else{alert("wrong input")};


let q2 =prompt("am i older than 50 ?");
if ((q2.toLowerCase()=="yes") || (q2.toLowerCase()=="y")){
    alert(" oops you got it wrong ")
    // console.log("false");
    ncounter--;

}

else if((q2.toLowerCase()=="no") || (q2.toLowerCase()=="n")) {
    alert("great that's the right answer ")
    // console.log("true");
    pcounter++;
}
else{alert("wrong input")};



let q3 =prompt("did  i go to alzaytoonah uni ?");
if ((q3.toLowerCase()=="yes") || (q3.toLowerCase()=="y")){
    alert("great that's the right answer ")
    // console.log("true");
    pcounter++;
}

else if((q3.toLowerCase()=="no") || (q3.toLowerCase()=="n")) {

    alert(" oops you got it wrong ")
    // console.log("false");
    ncounter--;
}
else{alert("wrong input")};



let q4 =prompt("do i like food ?");
if ((q4.toLowerCase()=="yes") || (q4.toLowerCase()=="y")){
    alert("great that's the right answer ")
    // console.log("true");
    pcounter++;
}

else if((q4.toLowerCase()=="no") || (q4.toLowerCase()=="n")) {

    alert(" oops you got it wrong ")
    // console.log("false");
    ncounter--;

}
else{alert("wrong input")};


let q5 =prompt("is one of my goals to learn css ?");
if ((q5.toLowerCase()=="yes") || (q5.toLowerCase()=="y")){
    alert("great that's the right answer ")
    // console.log("true");
    pcounter++;
}

else if((q5.toLowerCase()=="no") || (q5.toLowerCase()=="n")) {

    alert(" oops you got it wrong ")
    // console.log("false");
    ncounter--;
}
else{alert("wrong input")};

alert(name+"you answered "+ pcounter+ " questions right and "+ 
ncounter+ "ansers wrong" );
