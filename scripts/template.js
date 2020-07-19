$(function(){
    
const menuBurger = document.getElementById("nav-burger");
const navLinks = document.getElementById("nav-links");
const closeMenuButton = document.getElementById("close-burger-menu");
let screenWidth = window.innerWidth;
const scrollY = window.scrollY;
const navHeader = document.getElementById("nav-header");
const navAnchors = document.querySelectorAll("#nav-links a");

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

        if(currentYOffset < prevYOffset || currentYOffset === 0){
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

    if(screenWidth < 1400){
        Array.from(navAnchors).forEach((link, index)=>{
            link.addEventListener("click", (e)=>{
                document.querySelector("#nav-bar-container > div").classList.toggle("fade");
                document.querySelector("#nav-bar-container").classList.toggle("show-container")
                menuBurger.classList.toggle("is-active");
                navLinks.classList.toggle("display-links");
            });
        })
    }

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
    };

    closeMenuButton.addEventListener("click", ()=>{
        menuBurger.classList.toggle("hide-menu-burger");
        closeMenuButton.classList.toggle("show-close-menu");
        navLinks.classList.toggle("display-links");
    });
};

function navLinksScroll(){
    console.log(screenWidth)
    if(screenWidth <= 1400){
        console.log(screenWidth);

        window.addEventListener("scroll", (e)=>{

            if(navLinks.classList.contains("display-links")){
                console.log("Has", window.scrollY)
                e.preventDefault();
            }
        });
    };

    navHeader.addEventListener("touchmove", (e)=>{
        e.preventDefault();
    });

    navHeader.addEventListener("scroll", (e)=>{
        console.log(window.pageYOffset)
        if(screenWidth >= 1400){
            console.log(scrollY)
            e.preventDefault();
        }
    })
};


handleScreenSize();
handleMenuBurger();
closeBurgermenu();
navLinksScroll();
navBarAnimation();
})