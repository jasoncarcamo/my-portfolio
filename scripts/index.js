let screenWidth = window.innerWidth;

function handleScreenSize(){
    window.addEventListener("resize", ()=>{
        screenWidth = window.innerWidth;
    });
};

function redirect(){
    const buttons = document.querySelectorAll("#home-section > button");

    Array.from(buttons).forEach( (button, index)=>{
        button.addEventListener("click", (e)=>{
            
            window.location.href = e.target.children[0].pathname;
        })
    })
}

function learnMore(){
    const button = document.getElementById("learn-more");

    button.addEventListener("click", (e)=>{
        window.location.href = "https://jasoncarcamo.github.io/my-portfolio/about.html"
    })
}

function animateTitle(){
    let titleIndex = 0;
    let iconIndex = 0;
    const titles = document.querySelectorAll("#title-container > h2");
    const h2 = document.querySelectorAll("#home-section > h4");
    const learnMore = document.getElementById("learn-more");
    const icons = document.getElementsByClassName("landing-page-icons");

    setInterval(()=>{

        if(titleIndex === titles.length){
            return;
        };

        titles[titleIndex].classList.add("display-title");

        titleIndex++;
    }, 200);

    //When the word developer finishes fading in
    titles[titles.length - 1].addEventListener("animationend", (e)=>{

        h2[0].classList.add("display-title");

    });

    h2[0].addEventListener("animationend", (e)=>{

        setTimeout(()=>{

            learnMore.classList.add("display-title");

        }, 300);

    });

    learnMore.addEventListener("animationend", (e)=>{
        setInterval(()=>{
            if(iconIndex === icons.length){
                return;
            };

            icons[iconIndex].classList.add("display-title");

            iconIndex++;
            
        }, 200);
    })
    
}

handleScreenSize();
redirect();
learnMore();
animateTitle();