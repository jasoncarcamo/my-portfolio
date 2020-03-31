let screenWidth = window.innerWidth;
const menuBurger = document.getElementById("nav-burger");
const navLinks = document.getElementById("nav-links");
const closeMenuButton = document.getElementById("close-burger-menu");
const closeSkillButton = document.getElementsByClassName("close-skills");
const skillsSection = document.getElementById("skills-section");
const frontend = document.getElementById("frontend-skills");
const backend = document.getElementById("backend-skills");
const developmentTools = document.getElementById("development-tools");
const linksToSkills = document.querySelectorAll("#skills-section p");


function preventScroll(e){
    e.preventDefault();
}

function handleScreenSize(){
    window.addEventListener("resize", ()=>{
        screenWidth = window.innerWidth;
    });
}

function handleMenuBurger(){
    menuBurger.addEventListener("click", ()=>{
        menuBurger.classList.toggle("is-active");        
        navLinks.removeEventListener("touchmove", preventScroll);
        navLinks.addEventListener("touchmove", preventScroll);
        navLinks.classList.toggle("display-links");
    });
}

function closeBurgermenu(){
    closeMenuButton.addEventListener("click", ()=>{
        menuBurger.classList.toggle("hide-menu-burger");
        closeMenuButton.classList.toggle("show-close-menu");
        navLinks.classList.toggle("display-links");
    });
}

function handleSkillsLinks(){
    
    linksToSkills[0].addEventListener("click", ()=>{
        skillsSection.classList.toggle("hide-skill-section");
        frontend.classList.toggle("show-skill");
    });

    linksToSkills[1].addEventListener("click", ()=>{
        skillsSection.classList.toggle("hide-skill-section");
        backend.classList.toggle("show-skill");
    });

    linksToSkills[2].addEventListener("click", ()=>{
        skillsSection.classList.toggle("hide-skill-section");
        developmentTools.classList.toggle("show-skill");
    });
}

function handleCloseSkill(){
    Array.from(closeSkillButton).forEach( button => {
        button.addEventListener("click", (e)=>{
            const parent = e.target.parentNode.parentNode;
            parent.classList.toggle("show-skill");

            skillsSection.classList.toggle("hide-skill-section")
        });
    });
};

function navLinksScroll(){
    navLinks.addEventListener("touchmove", (e)=>{
        e.preventDefault();
    });
}

handleScreenSize();
//handleMenuBurger();
handleSkillsLinks();
handleCloseSkill();
//navLinksScroll();