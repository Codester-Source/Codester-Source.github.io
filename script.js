// Scroll animation
const elements = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});
elements.forEach(el => observer.observe(el));

// Language toggle
let currentLang = "en";
document.getElementById("langToggle").onclick = () => {
currentLang = currentLang === "en" ? "ar" : "en";
document.querySelectorAll("[data-en]").forEach(el => {
el.textContent = el.getAttribute(`data-${currentLang}`);
});
document.getElementById("langToggle").textContent = currentLang === "en" ? "AR" : "EN";
};

// Projects interactive cards placeholder links
document.querySelectorAll(".card.interactive").forEach(card => {
card.addEventListener("click", () => {
const link = card.getAttribute("data-link");
if(link && link !== "#") window.open(link, "_blank");
});
});
