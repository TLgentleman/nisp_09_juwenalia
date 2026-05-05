// --- ODPLICZANIE DO JUWENALIÓW ---
// Ustaw datę docelową wydarzenia (np. za kilka miesięcy)
const eventDate = new Date("May 22, 2026 18:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    // Obliczenia matematyczne czasu
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Wyświetlenie wyników w pliku HTML
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Gdy czas dobiegnie końca
    if (difference < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "<h3>Festiwal właśnie trwa!</h3>";
    }
}, 1000);


// --- MENU MOBILNE (HAMBURGER) ---
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
});

// Dodanie prostego stylu w JS do dynamicznego menu mobilnego (lub można to dopisać w CSS)
const style = document.createElement('style');
style.innerHTML = `
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: rgba(15, 12, 27, 0.98);
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid var(--primary-color);
        }
        .nav-links.active li {
            margin: 15px 0;
        }
        .menu-toggle.is-active .bar:nth-child(2) { opacity: 0; }
        .menu-toggle.is-active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .menu-toggle.is-active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
    }
`;
document.head.appendChild(style);


// --- OBSŁUGA FORMULARZA KONTAKTOWEGO ---
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Pobranie danych (można je przesłać do bazy/backendu)
    alert("Dziękujemy za kontakt! Odpowiemy tak szybko, jak to możliwe.");
    contactForm.reset();
});