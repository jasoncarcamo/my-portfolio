let screenSidth = window.innerWidth;

function handleScreenWidth(){
    window.addEventListener("resize", (e)=>{
        screenSidth = window.innerWidth;
    });
};

function hoverProject(){
    const projects = document.getElementsByClassName("project");

    Array.from(projects).forEach(( project, index)=>{

        project.addEventListener("mouseenter", (e)=>{
            console.log($(e.target).hasClass("display-project"));

            if($(e.target).hasClass("display-project")){
                return;
            };

            $(e.target).find(".project-img")[0].classList.add("fade-project");

            $(e.target).find("button")[0].classList.add("display-btn");
        });

        project.addEventListener("mouseleave", (e)=>{
            $(e.target).find(".project-img")[0].classList.remove("fade-project");
            $(e.target).find("button")[0].classList.remove("display-btn");
        });

    });
};

function displayProject(){
    const buttons = document.getElementsByClassName("display-project-btn");
    const projects = document.getElementsByClassName("project");

    Array.from(buttons).forEach((button, index)=>{
        button.addEventListener("click", (e)=>{

            Array.from(projects).forEach((project, i)=>{
                if(project != $(e.target).parent()[0]){
                    project.classList.add("hide-project");
                };
            });
            console.log($(e.target).prev(".project-img")[0])
            $(e.target).prev(".project-img")[0].classList.remove("fade-project");
            $(e.target).parent()[0].classList.add("display-project");
            $(e.target).next("div.project-info")[0].classList.add("display-project-info");
            $(e.target).removeClass("display-btn")
        })
    })
}

handleScreenWidth();
hoverProject();
displayProject();