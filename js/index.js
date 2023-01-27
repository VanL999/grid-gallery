const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-nav");
const navLinks = nav.querySelectorAll(".nav-link");


burger.addEventListener("click", () => {
  burger.classList.toggle("active");
    nav.classList.toggle("active");
    
});

navLinks.forEach(function(link) {
    link.addEventListener("click", () =>{
        burger.classList.remove("active");
        nav.classList.remove("active");
    })

})
