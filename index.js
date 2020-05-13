
//document.querySelector("button");
//document.querySelector("button").addEventListener("click",clickHandler);
//function clickHandler(){
  //alert("i have clicked");
//}


//deduction button presse

var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //  alert("i have clicked");
    //  this.style.color="white";
//real code for this we are using switc

//duduction key press
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

    })


}

//for key press status
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

//// making sound
function makeSound(key){

  switch(key){
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
  case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
      break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;


    case "l":
    var kik = new Audio('sounds/kick-bass.mp3');
    kik.play();
    break;

    default:
  }

}

//Button animation

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed");},100);

}
