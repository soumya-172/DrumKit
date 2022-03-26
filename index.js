
//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTMl = this.innerHTML;

    makeSound(buttonInnerHTMl);    

    buttonAnimation(buttonInnerHTMl);

  });
}

//Detecting keyboard press

document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});



function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;

    case "k":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 200);
}

