'use strict'

console.log('hi')

let whou = prompt("What's you're name")
console.log('Hello ' + whou)

let myname = prompt("Is my name Joel?").toLowerCase()
    ;

if (myname === 'yes' || myname === 'y') {
    alert('You are correct!!')
    //console.log('You are correct!!')
} else if (myname === 'no' || myname === 'n') {
    alert('You are WRONG!!')
    //console.log('You are WONRG!!')
} else
    alert('Yes or No kindly')
//console.log('Yes or No kindly')

let car = prompt("Do I Like Cars?").toLowerCase()
    ;

if (car === 'yes' || car === 'y') {
    alert('You are correct!!')
    //console.log('You are correct!!')
} else if (car === 'no' || car === 'n') {
    alert('You are WRONG!!')
    //console.log('You are WONRG!!')
} else
    alert('Yes or No kindly')
//console.log('Yes or No kindly')

let muzik = prompt("Do I Like EDM?").toLowerCase()
    ;

if (muzik === 'yes' || muzik === 'y') {
    alert("You're headbaning right!!")
    //console.log("You're headbaning right!!")
} else if (muzik === 'no' || muzik === 'n') {
    alert('You are WRONG!!')
    //console.log('You are WONRG!!')
} else
    alert('Yes or No kindly')
//console.log('Yes or No kindly')

let locate = prompt('Am I from Seattle?').toLowerCase()
    ;

if (locate === 'no' || locate === 'n') {
    alert('You are correct!!')
    //console.log('You are correct!!')
} else if (locate === 'yes' || locate === 'y') {
    alert('You are WONRG!!')
    //console.log('You are WONRG!!')
} else
    alert('Yes or No kindly')
//console.log('Yes or No kindly')

let weether = prompt("Do I Like the cold?").toLowerCase()
    ;

if (weether === 'no' || weether === 'n') {
    alert("Ahhh, ahah that's hot!!")
    //console.log("Ahhh, ahah that's hot!!")
} else if (weether === 'yes' || weether === 'y') {
    alert('You are WRONG!!')
    //console.log('You are WONRG!!')
} else
    alert('Yes or No kindly')
//console.log('Yes or No kindly')

let whp;
let fast = 320;
let slow = 319;
let attemptsleft = 4;
let rite = false;

while (attemptsleft) {
    whp = prompt(`How much whp does my car make?`);

    if (whp > fast) {
        attemptsleft--
        alert(`Lower you have ${attemptsleft} tries left.`)
        rite = true

        if (rite = true) {
            console.log(`incorrect`)
        }
    }

    else if (whp < fast) {
        attemptsleft--
        alert(`Higher you have ${attemptsleft} tries left.`)
        rite = true

        if (rite = true) {
            console.log(`incorrect`)
        }
    } else if (whp == fast) {
        alert(`Fast Guy Huh!`)
        rite = true

        if (rite = true) {
            console.log(`correct`)
        } break;
    } else {
        alert(`Type an answer please.`)
    }
}


let mods = ['turbo', 'exhaust', 'intake'];
let usercorrect = false;
let tries = 6;
let score = 0;
let useranswer;

while (tries) {
    useranswer = prompt(`What mods do I have on my car?`);

    for (let i = 0; i < mods.length; i++) {
        if (useranswer === mods[i]) {
            console.log(`Correct`)
            usercorrect = true
        }
    }
    if (usercorrect === true) {
        alert(`Right`);
        score++;
        alert(score)
        break;
    } else {
        tries--
        alert(`Incorrect ${tries} left`)
    }
}

alert('Was nice talking to you ${whou} please do enjoy more information about myself.')
