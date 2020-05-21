



// for (var i = 0; i < document.querySelectorAll(".drum").length; i++){



// }

function drum (num, mySound){
    document.querySelectorAll(".drum")[num].addEventListener("click", function(){

        this.style.color = "blue";

            var snd = new Audio(mySound);
            snd.play();

            
           // animateKey()

     });

     

  
}

function keyPress(){
    document.addEventListener("keydown", function(event){

        animateKey(event.key);


        switch(event.key){
            case "d":
                var snd = new Audio("sounds/tom-1.mp3");
                snd.play();
                break;
            case "o":

                    var snd = new Audio("sounds/tom-2.mp3");
                    snd.play();
                    break;
            case "p":

                        var snd = new Audio("sounds/tom-3.mp3");
                        snd.play();
                        break;
            case "e":

                var snd = new Audio("sounds/tom-4.mp3");
                snd.play();
                break;
            case "s":

                    var snd = new Audio("sounds/crash.mp3");
                    snd.play();
                    break;
            case "b":

                        var snd = new Audio("sounds/snare.mp3");
                        snd.play();
                        break;
            case "j":

                        var snd = new Audio("sounds/kick-bass.mp3");
                        snd.play();
                        break;

             default:
                    console.log(event);
        }
    })
}

drum(0,"sounds/tom-1.mp3");
drum(1,"sounds/tom-2.mp3");
drum(2,"sounds/tom-3.mp3");
drum(3,"sounds/tom-4.mp3");
drum(4,"sounds/crash.mp3");
drum(5,"sounds/snare.mp3");
drum(6,"sounds/kick-bass.mp3");
keyPress();


function animateKey(key){
    document.querySelector("."+key).setAttribute("class", "democlass");

    setTimeout(function (){
        document.querySelector("."+key).classList.remove("democlass");

    }, 100);

}

