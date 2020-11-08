$(function(){
    function popSkills(){
        const frontendSkills = document.getElementById("frontend-skills");
        const backendSkills = document.getElementById("backend-skills");
        const tools = document.getElementById("development-tools");

        frontendSkills.classList.add("pop");

        frontendSkills.addEventListener("transitionend", (e)=>{
            backendSkills.classList.add("pop");
        });

        backendSkills.addEventListener("transitionend", (e)=>{
            tools.classList.add("pop");
        });
    };

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || html.clientHeight) &&
            rect.right <= (window.innerWidth || html.clientWidth)
        );
    };

    popSkills();
});