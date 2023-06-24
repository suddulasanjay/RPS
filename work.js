window.onload = alert("Welcome !!");
"use strict";
let x = prompt("What's your choice ?");
function getComputerChoice(){
    let ind = Math.random()*3;
    if(ind==0) return "Rock";
    if(ind==1) return "Paper";
    else return "Scissor";
}
let y=getComputerChoice();
function play(a,b){
    if(a==="Rock"){
        if(b==="Scissor"){
            alert("You have Won! Rock breaks the Scissor!!");
            return;
        }
        if(b==="Paper"){
            alert("You have lost! Paper covers the rock");
            return;
        }
        if(a==b){
            alert("No Result !!!");
            return;
        }
    }
    if(a==="Scissor"){
        if(b==="Rock"){
            alert("You have Lost! Rock breaks the Scissor!!");
            return;
        }
        if(b==="Paper"){
            alert("You have Won! Scissor cuts the Paper !!");
            return;
        }
        if(a==b){
            alert("No Result !!!");
            return;
        }
    }
    if(a==="Rock"){
        if(b==="Scissor"){
            alert("You have Won! Rock breaks the Scissor!!");
            return;
        }
        if(b==="Paper"){
            alert("You have lost! Paper covers the rock!!");
            return;
        }
        if(a==b){
            alert("No Result !!!");
            return;
        }
    }
    else{
        if(b==="Rock"){
            alert("You have Won! Paper covers the rock!");
            return;
        }
        if(b==="Scissor"){
            alert("You have Lost! Scissor cuts the paper!!");
            return;
        }
        if(a==b){
            alert("No Result !!!");
            return;
        }
    }
}
play(x,y);