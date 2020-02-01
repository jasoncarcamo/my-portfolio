let screenWidth = window.innerWidth;

function handleScreenSize(){
    window.addEventListener("resize", ()=>{
        screenWidth = window.innerWidth;
    });
};

function redirect(){
    const buttons = document.querySelectorAll("#home-section > button");
    console.log(buttons);

    Array.from(buttons).forEach( (button, index)=>{
        button.addEventListener("click", (e)=>{
            console.log(e.target.children)
            window.location.href = e.target.children[0].pathname;
        })
    })
}



handleScreenSize();
redirect();