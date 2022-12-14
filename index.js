//Using html DOM to select all "drum" classes from html file
//Add for all of them a new method whenever user makes mouse click it will start the functions below

document.querySelectorAll(".drum").forEach(function(drum){
    drum.addEventListener("click",function(){
        const buttomInnerHTML=this.innerHTML;
        makeSound(buttomInnerHTML);
        buttomAnimation(buttomInnerHTML);
    });
}); 


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttomAnimation(event.key);
})


function makeSound(key)
{
    switch(key)
    {
        case 'w':
             var audio=  new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
        case 'a':
            var audio=  new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
        case 's':
                var audio=  new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
        case 'd':
               var audio=  new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
                case 'j':
             var audio=  new Audio("sounds/crash.mp3");
             audio.play();
             break;
        case 'k':
            var audio=  new Audio("sounds/kick.mp3");
             audio.play();
             break;
        case 'l':
            var audio=  new Audio("sounds/snare.mp3");
             audio.play();
             break;
        default:console.log(buttomInnerHTML);     

    }
}

function buttomAnimation(currentKey)
{
    const activeButtom=document.querySelector("." + currentKey);
    activeButtom.classList.add("pressed");
    setTimeout(function() {
        activeButtom.classList.remove("pressed");
        
    }, 100);
   
}