'use strict'


function askUserName(){
    var internalUserName = prompt('What is your name?');
    return internalUserName;
}


function confirmContinue(userName){ // the function is accepting a parameter
    confirm(`${userName} welcome! The gods would like to know more about you!`);
}

function lightSide(){
    var lightSide;
    lightSide = prompt('Are you a lightweight...Or a Viking!');
    return lightSide
}

function checkLight(lightSideQuestion){
    if(lightSideQuestion === 'lightweight'){
        alert('Do not worry, the Gods will turn you into a Viking soon!');
    }  if(adopt === 'Viking'){
        alert('Welcome Viking! The Gods shall honor you with a fine selection of Mead! Skoll!');
    }  else {
        alert('Ah, you are undecided. The Gods shall watch as you develop.');
        return lightSideQuestion
    }
}

function adopt(lightSideQuestion){
    if(lightSideQuestion === 'lightweight'){
        var adopt = prompt('So future viking, do you enjoy Sweet or bitter Mead? there is no wrong answer.');

        if(adopt === 'Sweet'){
            alert('Ah, there is a wide selection to choose from! I recommend The Honeybomb or Oak Barrel!');
        } if(adopt === 'Bitter'){
            alert('An Iron Stomach and an Iron Will! For you i would suggest the Semi Sweet or the Blueberry!');
        } else {
            alert('There is no inbetween! Choose your Mead!');
        }
    }
}
function accept(lightSideQuestion){
    var adopt= prompt(lightSideQuestion === 'Viking'){
        alert('Welcome Viking! The Gods shall honor you with a fine selection of Mead! Skoll!');
    }
}



var externalUserName = askUserName(); // value of internalUserName not the variable name
confirmContinue(externalUserName);  // this is passing an argument
var lightSideQuestion = lightSide();
checkLight(lightSideQuestion);
adopt(lightSideQuestion);
accept(lightSideQuestion);