// Handle Loading Animation
setTimeout(() => {
  document.body.classList.remove("hide");
}, 5000)

// Handle Scrolling To Up
let scrollToTop = document.querySelector(".scroll-up") as HTMLElement;

window.addEventListener("scroll", () => {
  if(window.scrollY >= 300) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
})

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

// Handle Scrolling Progress
let scrollProgress = document.querySelector(".scroll-progress") as HTMLDivElement;

window.addEventListener("scroll", () => {
  scrollProgress.style.width = `${(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100}%`
})

// Handle Bullet Section Scrolling
let bullets = document.querySelectorAll(".sectionBullets li") as NodeListOf<HTMLLIElement>;

bullets.forEach(bullet => {
    bullet.addEventListener("click", (e: any) => {
        document.querySelector(`section.${e.currentTarget.dataset.section}`)?.scrollIntoView({
          behavior: "smooth"
        })
    })
})