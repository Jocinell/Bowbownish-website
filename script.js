document.addEventListener('DOMContentLoaded', () => {
    const text = "Welcome to Bowbonish Visionary Ads";
    let i = 0;
    const speed = 100; // typing speed in milliseconds
    const typingTextElement = document.getElementById("typing-text");

    function typeWriter() {
        if (i < text.length) {
            typingTextElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Clear text and restart typing effect after a delay
            setTimeout(() => {
                typingTextElement.textContent = "";
                i = 0;
                typeWriter();
            }, 2000); // 2-second pause before restarting
        }
    }

    typeWriter(); // Start typing effect on page load
});