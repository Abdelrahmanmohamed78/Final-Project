"use strict";setTimeout((function(){document.body.classList.remove("hide")}),5e3);var scrollToTop=document.querySelector(".scroll-up");window.addEventListener("scroll",(function(){window.scrollY>=300?scrollToTop.classList.add("show"):scrollToTop.classList.remove("show")})),scrollToTop.addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}));var scrollProgress=document.querySelector(".scroll-progress");window.addEventListener("scroll",(function(){scrollProgress.style.width="".concat(document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,"%")}));var bullets=document.querySelectorAll(".sectionBullets li");bullets.forEach((function(o){o.addEventListener("click",(function(o){var e;null===(e=document.querySelector("section.".concat(o.currentTarget.dataset.section)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}))}));