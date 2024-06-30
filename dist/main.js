"use strict";
// Handle Loading Animation
setTimeout(() => {
    document.body.classList.remove("hide");
}, 5000);
// Handle Scrolling To Up
let scrollToTop = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        scrollToTop.classList.add("show");
    }
    else {
        scrollToTop.classList.remove("show");
    }
});
scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
// Handle Scrolling Progress
let scrollProgress = document.querySelector(".scroll-progress");
window.addEventListener("scroll", () => {
    scrollProgress.style.width = `${(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100}%`;
});
// Handle Bullet Section Scrolling
let bullets = document.querySelectorAll(".sectionBullets li");
bullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        var _a;
        (_a = document.querySelector(`section.${e.currentTarget.dataset.section}`)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
            behavior: "smooth"
        });
    });
});
