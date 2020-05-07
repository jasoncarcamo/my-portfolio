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

            if($(e.target).hasClass("display-project")){
                $(e.target).find(".close-project")[0].classList.add("display-close-btn");
                return;
            };
            
            $(e.target).find(".project-img")[0].classList.add("fade-project");
            $(e.target).find("button")[0].classList.add("display-btn");
        });

        project.addEventListener("mouseleave", (e)=>{
            $(e.target).find(".close-project")[0].classList.remove("display-close-btn");
            $(e.target).find(".project-img")[0].classList.remove("fade-project");
            $(e.target).find("button")[0].classList.remove("display-btn");
        });

    });
};

function displayProject(){
    const buttons = document.getElementsByClassName("display-project-btn");
    const projects = document.getElementsByClassName("project");
    const titles = $(".project-type-title");

    Array.from(buttons).forEach((button, index)=>{

        button.addEventListener("click", (e)=>{

            Array.from(projects).forEach((project, i)=>{
                if(project != $(e.target).parent()[0]){
                    project.classList.add("hide-project");
                };
            });

            Array.from(titles).forEach((title, index)=>{
                console.log(title);
                title.classList.add("hide-title");
            });
            console.log()
            $(e.target).siblings(".close-project")[0].classList.add("display-close-btn");
            $(e.target).parent()[0].classList.add("display-project");
            $(e.target).next("div.project-info")[0].classList.add("display-project-info");
            $(e.target).prev(".project-img")[0].classList.remove("fade-project");            
            $(e.target).removeClass("display-btn")
        })
    })
}

function closeProject(){
    const buttons = document.getElementsByClassName("close-project");
    const projects = document.getElementsByClassName("project");
    const titles = $(".project-type-title");

    Array.from(buttons).forEach((button, index)=>{
        button.addEventListener("click", (e)=>{
            Array.from(projects).forEach((project, i)=>{
                project.classList.remove("hide-project");  
                project.classList.remove("display-project");             
            });

            Array.from(titles).forEach((title, index)=>{
                title.classList.remove("hide-title");
            });

            $(e.currentTarget).siblings(".project-info")[0].classList.remove("display-project-info");
            button.classList.remove("display-close-btn");  
        })
    })
}

handleScreenWidth();
hoverProject();
displayProject();
closeProject();