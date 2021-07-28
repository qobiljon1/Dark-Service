let menuOpen = true
let burger = document.querySelector(".burger").addEventListener("click", () => {
     if (menuOpen) {
       document.querySelector("nav").classList.add("show");
       document.querySelector("nav").classList.remove("hide");
       menuOpen = false
     } else {
       document.querySelector("nav").classList.remove("show");
       document.querySelector("nav").classList.add("hide");
       menuOpen = true
     }
});
