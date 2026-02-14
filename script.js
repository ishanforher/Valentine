// show reasons
function showReasons(){
    document.getElementById("reasons").classList.toggle("hidden");
    document.getElementById("loveQuestion").classList.remove("hidden");
}

// surprise message
function showMessage(){
    alert("Don't worry in every emergency, I am always there with you my Chintu Baby ❤️");
}

// yes button
function yesLove(){
    document.getElementById("result").innerHTML =
    "<h2>Hehehe I knew it 😌❤️</h2><p>Now you are stuck with me forever</p>";
}

// moving NO button
function moveNo(){
    const btn = document.querySelector(".no");
    btn.style.left = Math.random()*200 - 100 + "px";
    btn.style.top = Math.random()*200 - 100 + "px";
}

// floating hearts
const heartsContainer = document.querySelector(".hearts");
for(let i=0;i<25;i++){
    const heart=document.createElement("span");
    heart.style.left=Math.random()*100+"%";
    heart.style.animationDuration=5+Math.random()*5+"s";
    heartsContainer.appendChild(heart);
}
