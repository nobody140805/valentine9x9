function showLetter() {
    document.getElementById('loveLetter').classList.toggle('hidden');
    triggerHeartExplosion();
}

function showSocola() {
    document.getElementById('Socola').classList.toggle('socola_img');
    triggerHeartExplosion();
}

function showGift() {
    document.getElementById('gift').classList.toggle('hidden');
    triggerHeartExplosion();
}

document.getElementById("chocolate").addEventListener("click", function(event) {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.setProperty('--x', `${(Math.random() - 0.5) * 300}px`);
        heart.style.setProperty('--y', `${(Math.random() - 0.5) * 300}px`);
        heart.style.left = `${event.clientX}px`;
        heart.style.top = `${event.clientY}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
});

function triggerHeartExplosion() {
    const fireworkContainer = document.getElementById("chocolateFirework");
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
        heart.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
        heart.style.left = "50%";
        heart.style.top = "50%";
        fireworkContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

    function generatePoem() {
        const poems = [
            "Roses are red, violets are blue,\nMy heart beats faster when I’m with you! 💖",
            "No matter where you are,\nMy love for you will travel far. ✨",
            "You’re the sunshine on my rainy days,\nThe melody in my heart that forever plays. 🎶"
        ];
        document.getElementById('poem').innerText = poems[Math.floor(Math.random() * poems.length)];
    }

