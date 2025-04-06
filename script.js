const textElement = document.getElementById("typing-text");
const messages = [
  "Hi! I'm Marjohn Reyes!",
  "こんにちは！レイエス マージョンです！"
];

let currentMessage = 0;

function typeText(text, callback) {
  let index = 0;
  textElement.textContent = "";
  textElement.style.opacity = 1;

  const typeInterval = setInterval(() => {
    textElement.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(typeInterval);
      setTimeout(() => {
        textElement.style.opacity = 0;
        setTimeout(callback, 1000); // Wait for fade before switching
      }, 1500); // Wait 1.5s before fading
    }
  }, 70);
}

function loopTyping() {
  typeText(messages[currentMessage], () => {
    currentMessage = (currentMessage + 1) % messages.length;
    loopTyping();
  });
}

loopTyping();

AOS.init({
  duration: 1000, // animation speed
  easing: "ease-out", // smooth motion
  once: true // animate only once
});

// When the page loads
window.addEventListener("DOMContentLoaded", () => {
  // After 1.5s, show the long About Me text
  setTimeout(() => {
    document.getElementById("about-content").classList.add("expanded");
  }, 1500);
});

const skillsToggle = document.getElementById("skills-toggle");
const skillsContent = document.getElementById("skills-content");

skillsToggle.addEventListener("click", (e) => {
  e.preventDefault(); // prevent page jump
  skillsContent.classList.toggle("show");
});

window.history.replaceState({}, document.title, "/");