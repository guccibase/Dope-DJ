



// for (var i = 0; i < document.querySelectorAll(".drum").length; i++){



// }

function drum (num, mySound){
    document.querySelectorAll(".drum")[num].addEventListener("click", function(){

        this.style.color = "blue";

            var snd = new Audio(mySound);
            snd.play();
            

     });

     

  
}


drum(0,"sounds/tom-1.mp3");
drum(1,"sounds/tom-2.mp3");
drum(2,"sounds/tom-3.mp3");
drum(3,"sounds/tom-4.mp3");
drum(4,"sounds/crash.mp3");
drum(5,"sounds/snare.mp3");
drum(6,"sounds/kick-bass.mp3");