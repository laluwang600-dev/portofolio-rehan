// Menu mobile
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Tutup menu setelah memilih link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Form kontak
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Pesan berhasil dikirim!");

    form.reset();
});