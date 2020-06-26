'use strict'

var ableToAdopt = false;

function askUserName(){
    var internalUserName = prompt('What is your name?');
    return internalUserName;
}

function confirmContinue(userName){ // the function is accepting a parameter
    confirm('Greetings ' + userName + " the Gods wish to more about you!");
}

function lightSide(){
    var lightSide;
    lightSide = prompt('Are you a lightweight...or a viking! (one or the other)');
    while(lightSide.toLowerCase() != 'lightweight' + 'viking' && lightSide != ''){
        lightSide = prompt('Are you a lightweight...or a viking! (one or the other)');
    }
    return lightSide
}

function checkLight(lightSideQuestion){
    if(lightSideQuestion === 'viking'){
        alert('Ah welcome viking! the Gods honor you with a fine selection of mead, skoll!')
        ableToAdopt = false;
    } if(lightSideQuestion === 'lightweight') {
        alert('future viking, the Gods wish to test your wit!');
        ableToAdopt = true;
    }
}

function forceTest(){      // i++
    var answer = 1;
    for(var i = 0; i < 10; i = i + 1){
        var userAnswer = prompt("Between 1 and 10, how many arrows can a bow fire at a time?");
        if(parseInt(userAnswer) ===  answer){
            alert('Sharp eyes rest in your head! The Gods are pleased, you may proceed!')
            ableToAdopt = true;
            break;
        } else{
            alert("your wit displeases the Gods...Try again!")
        }
    }
    if(i > 9){
        ableToAdopt = false;
    }
    
    // 10 chances to guess a the number 1
    // if they pass they can drink, if not then no drink

}


function adopt(lightSideQuestion){
    if(ableToAdopt === true){
        var adopt = prompt('So future viking, do you enjoy Sweet or bitter Mead? there is no wrong answer.');

        if(adopt === 'sweet'){
            alert('Ah, there is a wide selection to choose from! I recommend the Blueberry or Oak Barrel!');
        } else if(adopt === 'bitter'){
            alert('An Iron Stomach and an Iron Will! For you I would suggest the Semi Sweet or the Dry Cyser!');
        } else {
            alert('Ah, you believe theres more than two choices. you will soon learn that is not the case. Embrace the Mead!');
        }
    }
}






// var externalUserName = askUserName(); // value of internalUserName not the variable name
// confirmContinue(externalUserName);  // this is passing an argument
confirmContinue(askUserName());
var lightSideQuestion = lightSide();
checkLight(lightSideQuestion);
forceTest();
adopt(lightSideQuestion);