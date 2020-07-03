
const menuBurger = document.getElementById("nav-burger");
const navLinks = document.getElementById("nav-links");
const closeMenuButton = document.getElementById("close-burger-menu");

function handleScreenSize(){
    window.addEventListener("resize", ()=>{
        screenWidth = window.innerWidth;
    });
}

function handleMenuBurger(){
    
    if(!menuBurger){
        return;
    };

    menuBurger.addEventListener("click", ()=>{
        menuBurger.classList.toggle("is-active");
        navLinks.classList.toggle("display-links");
    });
}

function closeBurgermenu(){
    if(!closeMenuButton){

        return;
    }
    closeMenuButton.addEventListener("click", ()=>{
        menuBurger.classList.toggle("hide-menu-burger");
        closeMenuButton.classList.toggle("show-close-menu");
        navLinks.classList.toggle("display-links");
    });
}

function navLinksScroll(){
    if(!navLinks){
        return;
    };

    navLinks.addEventListener("touchmove", (e)=>{
        e.preventDefault();
    });
};


handleScreenSize();
handleMenuBurger();
closeBurgermenu();
navLinksScroll();