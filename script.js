document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

const mottoElement = document.querySelector('.motto h2');
const motivationalQuotes = [
    "“It is not the mountain we conquer, but ourselves.” – Sir Edmund Hillary",
    "“The only way to do great work is to love what you do.” – Steve Jobs",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill"
];

let currentQuoteIndex = 0;

setInterval(() => {
    currentQuoteIndex = (currentQuoteIndex + 1) % motivationalQuotes.length;
    mottoElement.textContent = motivationalQuotes[currentQuoteIndex];
}, 5000);

document.getElementById('othersBtn').addEventListener('click', function () {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = messageBox.style.display === 'none' ? 'block' : 'none';
});
