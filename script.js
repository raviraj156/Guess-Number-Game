let inp = document.querySelector("input");
let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let random = Math.floor(Math.random()*100);
let span = document.querySelector("span");
let chance = 5;
let chanceBan = document.querySelector(".chance");
console.log(random);
chanceBan.innerText = `Chance: ${chance}`;

btn.addEventListener("click", function(){
    checkInput();
    if(btn.innerText=="Play Again"){
        chance = 5;
        btn.innerText = "Guess";
        h3.innerHTML = "";
        h3.style.color = "black";
        random = Math.floor(Math.random()*100);
        console.log(random);
    }
    if(chance>0){
        if(inp.value==random){
            h3.innerText = "Congratulation!! You guessed it right!!"
            inp.value = "";
            btn.innerText = "Play Again";
            random = Math.floor(Math.random()*100);
            console.log(random);
            chance = 5;
        }
        else if(inp.value<random && inp.value!=""){
            chance--;
            h3.innerText = "Your Guess is too small!! Try again";
            inp.value = "";
        }
        else if(inp.value>random && inp.value!=""){
            chance--;
            h3.innerText = "Your Guess is too large!! Try again";
            inp.value = "";
        }
        chanceBan.innerText = `Chance: ${chance}`;
    }
    else{
        if(inp.value!=""){
            h3.innerHTML = "You have no remaining chance!! Please play again"
            h3.style.color = "Red";
            inp.value = "";
            btn.innerText = "Play Again";
        }
        else{
            h3.innerHTML = "";
        }
    }
})

function checkInput(){
    if(inp.value=="" && btn.innerText!="Play Again"){
        span.innerText = "Please enter number to guess!!";
        span.style.color = "Red";
    }
    else{
        span.innerText = "";
    }
}