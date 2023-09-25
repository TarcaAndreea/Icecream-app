const navLinks=document.querySelectorAll("nav a");navLinks.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth"})}))}));
//# sourceMappingURL=index.8ca4a12c.js.map
