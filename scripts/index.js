$(function(){
    
    function fadeInWord(){
        const container = document.getElementById("landing-page-section-container");

        container.classList.add("fadein-container");
    };

    function fadeInViewMore(){
        const viewMore = document.getElementById("view-more");
        const container = document.getElementById("landing-page-section-container");

        container.addEventListener("transitionend", (e)=>{
            viewMore.classList.add("fadein-viewmore");
        });
    };

    
    fadeInWord();
    fadeInViewMore();
<<<<<<< HEAD
});
=======
});
>>>>>>> 9780c7bbb33ed61f92db909f368ad0d5d71f5eb0
