import { Howl, Howler } from "howler";
var sound = new Howl({
  src: ["sound.webm", "sound.mp3"], // ON mettra le chemin vers le sons ici
});

const shuffle_button=document.querySelector("#shuffle");
const pause_play_button=document.querySelector("#pause-play");
const backward_button=document.querySelector("#backward");
const next_button=document.querySelector("#next");
const repeat_button=document.querySelector("#repeat");

// Progression Bar related 

const updated_duration= document.querySelector(".updated_duration");
const progression_bar=document.querySelector(".progression");

// important functions

function bar_Progression(){
  
}
// EventListeners 
pause_play_button.addEventListener("click",function(e){
  e.preventDefault;
  try {
    console.log("bouton play clické");
    sound.play();

  } catch (error) {
    console.error(`il ya une erreur du type ${error} , qui est à corrigé `)
    
  }
})