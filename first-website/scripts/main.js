let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/umbc-league-overlay-old.png') {
      myImage.setAttribute('src','images/umbc-league-overlay.png');
    } else {
      myImage.setAttribute('src','images/umbc-league-overlay-old.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(myName){
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hey welcome, ' + myName;
    }
    
    
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hey welcome, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}