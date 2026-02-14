document.addEventListener("DOMContentLoaded", function () {

const reasonBtn = document.getElementById("reasonBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reasons = document.getElementById("reasons");
const loveQuestion = document.getElementById("loveQuestion");
const result = document.getElementById("result");
const music = document.getElementById("bgmusic");

// start music after first tap (mobile restriction fix)
document.body.addEventListener("click", () => {
    music.play().catch(()=>{});
}, { once: true });

// show reasons
reasonBtn.addEventListener("click", () => {
    reasons.classList.toggle("hidden");
    loveQuestion.classList.remove("hidden");
});

// surprise
surpriseBtn.addEventListener("click", () => {
    alert("You are my favorite notification ❤️");
});

// yes
yesBtn.addEventListener("click", () => {
    result.innerHTML =
    "<h2>Hehehe I knew it 😌❤️</h2><p>Now you are stuck with me forever</p>";
});

// running NO button
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "relative";
    noBtn.style.left = Math.random()*200 - 100 + "px";
    noBtn.style.top = Math.random()*200 - 100 + "px";
});

// floating hearts
const heartsContainer = document.querySelector(".hearts");
for(let i=0;i<25;i++){
    const heart=document.createElement("span");
    heart.style.left=Math.random()*100+"%";
    heart.style.animationDuration=5+Math.random()*5+"s";
    heartsContainer.appendChild(heart);
}

});
    noBtn.style.left = Math.random()*200 - 100 + "px";
    noBtn.style.top = Math.random()*200 - 100 + "px";
});

// floating hearts
const heartsContainer = document.querySelector(".hearts");
for(let i=0;i<25;i++){
    const heart=document.createElement("span");
    heart.style.left=Math.random()*100+"%";
    heart.style.animationDuration=5+Math.random()*5+"s";
    heartsContainer.appendChild(heart);
}

});
