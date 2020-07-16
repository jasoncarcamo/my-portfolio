$(function(){
    
const menuBurger = document.getElementById("nav-burger");
const navLinks = document.getElementById("nav-links");
const closeMenuButton = document.getElementById("close-burger-menu");
let screenWidth = window.innerWidth;
const navHeader = document.getElementById("nav-header");

function navBarAnimation(){
    let prevYOffset = window.pageYOffset;

    window.addEventListener("scroll", (e)=>{
        let currentYOffset = window.pageYOffset;

        if(screenWidth <= 1400 && navLinks.classList.contains("display-links")){
            console.log("Has")
            navHeader.classList.remove("hide-header");
            navHeader.classList.add("show-header");

            return;
        }

        if(currentYOffset < prevYOffset){
            navHeader.classList.add("show-header");
            navHeader.classList.remove("hide-header");
        } else{
            navHeader.classList.remove("show-header");
            navHeader.classList.add("hide-header");
        }

        prevYOffset = currentYOffset;
    });
};

function handleScreenSize(){
    window.addEventListener("resize", ()=>{
        screenWidth = window.innerWidth;
    });
};

function handleMenuBurger(){
    
    if(!menuBurger){
        return;
    };

    menuBurger.addEventListener("click", ()=>{
        document.querySelector("#nav-bar-container > div").classList.toggle("fade");
        document.querySelector("#nav-bar-container").classList.toggle("show-container")
        menuBurger.classList.toggle("is-active");
        navLinks.classList.toggle("display-links");
    });
};

function closeBurgermenu(){
    if(!closeMenuButton){

        return;
    }
    closeMenuButton.addEventListener("click", ()=>{
        menuBurger.classList.toggle("hide-menu-burger");
        closeMenuButton.classList.toggle("show-close-menu");
        navLinks.classList.toggle("display-links");
    });
};

function navLinksScroll(){
    if(!navLinks){
        return;
    };

    navHeader.addEventListener("touchmove", (e)=>{
        e.preventDefault();
    });
};


handleScreenSize();
handleMenuBurger();
closeBurgermenu();
navLinksScroll();
navBarAnimation();
})