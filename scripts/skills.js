$(function(){
    function popSkills(){
        const skillsSection = document.querySelectorAll("#skills-section > section");

        Array.from(skillsSection).forEach((section, index)=>{
            if(isInViewport(section)){
                skillsSection[index].classList.add("pop");
            };
        });

        window.addEventListener("scroll", (e)=>{
            Array.from(skillsSection).forEach((skill, index)=>{
                if(isInViewport(skill)){
                    skillsSection[index].classList.add("pop");
                };
            });
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