const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const note = document.getElementById("note");

const yesMessages = [
  "You just made my day! 💖",
  "Yay! Our date is on!",
  "Best answer ever. I love you!",
  "Woohoo! I can't wait!",
];

yesBtn.addEventListener("click", () => {
  const message = yesMessages[Math.floor(Math.random() * yesMessages.length)];
  note.textContent = message;
  confettiHearts();
});

noBtn.addEventListener("mouseenter", () => {
  const offsetX = Math.random() * 160 - 80;
  const offsetY = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

function confettiHearts() {
  for (let i = 0; i < 16; i += 1) {
    const heart = document.createElement("span");
    heart.textContent = "❤";
    heart.style.position = "fixed";
    heart.style.left = `${50 + Math.random() * 40 - 20}%`;
    heart.style.top = `${50 + Math.random() * 30 - 15}%`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    heart.style.color = Math.random() > 0.5 ? "#ff8066" : "#c3425b";
    heart.style.opacity = "0.9";
    heart.style.transition = "transform 800ms ease, opacity 800ms ease";
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translate(${Math.random() * 160 - 80}px, ${
        Math.random() * -120 - 60
      }px) scale(1.4)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 900);
  }
}
