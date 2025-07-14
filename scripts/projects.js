$(function(){
    const frontendProjects = [
        {
            img: "./images/sweetbliss.png",
            Name: "Sweet Bliss",
            Description: "A delightful ice cream shop landing page featuring rich visuals, smooth navigation, and a tempting UI — designed to satisfy every sweet tooth.",
            'Built with': "Html5, Css3",
            'View Live': "https://jasoncarcamo.github.io/icecream-shop",
            'Github repo': "https://github.com/jasoncarcamo/icecream-shop",
            started: "Feb 2019",
            ended: "Feb 2019"
        },
        {
            img: "./images/website1.png",
            Name: "BrightPath Academy",
            Description: "A clean, modern landing page for a fictional school — built to showcase programs, values, and admissions info with an inviting, professional design",
            'Built with': "Html5, Css3",
            'View Live': "https://jasoncarcamo.github.io/schoollayout",
            'Github repo': "https://github.com/jasoncarcamo/schoollayout",
            started: "Feb 2019",
            ended: "Feb 2019"
        },
        {
            img: "./images/website2.png",
            Name: "Yelp redesign",
            Description: "A modern revamp of Yelp’s landing page — focused on cleaner UI, improved usability, and a more engaging experience for discovering local businesses.",
            'Built with': "Html5, Css3, React.js, Yelp Api",
            'View Live': "https://jasoncarcamo.github.io/yelp-api/",
            'Github repo': "https://github.com/jasoncarcamo/yelp-api-code",
            started: "Feb 2019",
            ended: "Feb 2019"
        },
        {
            img: "./images/website4.png",
            Name: "The Burger Joint",
            Description: "A juicy, bold landing page for a burger joint — showcasing mouth-watering menu items with a fresh, fun, and easy-to-navigate design.",
            'Built with': "Html, Css",
            'View Live': "https://jasoncarcamo.github.io/burgerrest/",
            'Github repo': "https://github.com/jasoncarcamo/burgerrest",
            started: "Mar 2019",
            ended: "Mar 2019"
        }
    ];
    
    const backendProjects = [
        {
            img: "./images/pizzashop.png",
            Name: "The Pizza Shop",
            Description: "Wood-fired, handcrafted pizzas made with the freshest ingredients. Classic flavors, bold twists, and every slice made with love.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API",
            'View Live': "https://pizza-shop-phi.vercel.app/",
            'Github repo': "https://github.com/jasoncarcamo/pizza-shop-client",
            started: "Feb 2025",
            ended: "March 2025"
        },
        {
            img: "./images/serenta.png",
            Name: "Serenta",
            Description: "Used Google's map api to create a web app that displays bedrooms and apartments for rent. The app is a prototype and has not been published yet, but spanish and english will be the main language for future users.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API",
            'View Live': "http://serenta.jasoncarcamo30.now.sh/",
            'Github repo': "https://github.com/jasoncarcamo/serenta-client",
            started: "Sep 2019",
            ended: "Sep 2019"
        },
        {
            img: "./images/website5.png",
            Name: "Password Manager",
            Description: "Users hash, sanitize, and provide protection against cross site scripting before saving their passwords.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API",
            'View Live': "https://password-manager.jasoncarcamo30.now.sh/",
            'Github repo': "https://github.com/jasoncarcamo/password-manager-client",
            started: "Apr 2019",
            ended: "Apr 2019"
        },
        {
            img: "./images/julis.png",
            Name: "Julis Cleaning Company",
            Description: "Users get a feel of the company and can quickly request a quote with whatever the client has in mind. The admin recieves email confirmations when a user requests a quote or fills out the contact form. Admin also recieves push notifications on the mobile app version, see react native projects section.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API, Nodemailer.js",
            'View Live': "https://juliscleaningcompany.com/",
            'Github repo': "https://github.com/jasoncarcamo/julis-cleaning-company-client",
            started: "Aug 2019",
            ended: "Aug 2019"
        }
    ];
    
    const mobileAppProjects = [
        {
            img: "./images/passwordmanagerapp.png",
            Name: "Password manager mobile app",
            Description: "Password manager mobile app allows users to save, edit, and delete passwords. Password are hashed, salted and protected from xss attacks. Features include saving, editing, and delete passwords. Sign up included.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API",
            'Download Android version': "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jasoncarcamo/PasswordManager-93d562a5666f41da8193a69985e1d9ef-signed.apk",
            'Download IOS version': "",
            'View online': "https://snack.expo.io/@git/github.com/jasoncarcamo/password-manager-app",
            'Github repo': "https://github.com/jasoncarcamo/password-manager-app",
            started: "Oct 2019",
            ended: "Oct 2019"
        },
        {
            img: "./images/julismobileapp.png",
            Name: "Julis cleaning company mobile app",
            Description: 'Julis mobile app allows the admin to view and confirm appointments made from the company website, <a href="https://juliscleaningcompany.com" target="_blank" rel="noopener">juliscleaningcompany.com</a>. Features include push notifications, secure log in, and email confirmation upon successful appointment set up',
            'Built with': "React Native, Express, PostgreSQL, RESTful API, ASP.NET Core",
            'Download Android version': "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jasoncarcamo/JulisCleaningCompany-8f937bdae579404fb7e59271e92cfb5e-signed.apk",
            'Download IOS version': "",
            'View online': "https://snack.expo.io/@git/github.com/jasoncarcamo/julisapp",
            'Github repo': "https://github.com/jasoncarcamo/julisapp",
            started: "Feb 2020",
            ended: "Feb 2020"
        },
        {
            img: "./images/francescosmobileapp.png",
            Name: "Francescos Pizzeria mobile app",
            Description: "Users can browse through the restaurants menu and order online from their mobile phones. Features include ordering pick up or delivery, registering users for futures orders, and  cancelling orders. Tracker coming soon...",
            'Built with': "React Native, Express, PostgreSQL, RESTful API, ASP.NET Core",
            'Download Android version': "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jasoncarcamo/FrancescosPizzeriaClient-771911f02ae84543b9cfa7a4d9d84597-signed.apk",
            'Download IOS version': "",
            'View online': "https://snack.expo.io/@git/github.com/jasoncarcamo/FrancescosPizzeriaClient",
            'Github repo': "https://github.com/jasoncarcamo/FrancescosMobileApp",
            started: "Jan 2020",
            ended: "Jan 2020"
        }
    ];
    
    function addFrontProjects(){
    
        for(let i = 0; i < frontendProjects.length; i++){
            frontendProjects[i]["Built with"] = frontendProjects[i]["Built with"].split(",").map((skill, i) => `<li>${skill}</li>`).join("");
                let newProject = `<section class="project"> 
    
                    <img class="project-img" src="${frontendProjects[i].img}" alt="${frontendProjects[i].Name} landing page."/>
                    
                    <section>
                        
                        <div class="close-project">
                            <div></div>
                            <div></div>
                        </div>
        
                        <button class="display-project-btn">View</button>

                        <div class="author-container">
                            <div class="author-icon"></div>

                            <div class="author-info">
                                <p>Jason C.</p>
                                <p>${frontendProjects[i].started ? (frontendProjects[i].started + " <span class='date-separator'></span> " + frontendProjects[i].ended) : ""}</p>
                            </div>

                            <div class="author-options">
                                <div class="author-options-dot"> </div>
                                <div class="author-options-dot"> </div>
                                <div class="author-options-dot"> </div>

                                <div class="project-options">
                                    <a class="live-link" href='${frontendProjects[i]["View Live"]}' target='_blank' aria-label="${frontendProjects[i].Name} View" rel="noopener">View</a>
                                    <a href='${frontendProjects[i]["Github repo"]}' target='_blank' aria-label="${frontendProjects[i].Name} github repository" rel="noopener">GitHub Repo</a>
                                </div>
                            </div>
    
                        </div>
        
                        <div class="project-info">
                            <h3>${frontendProjects[i].Name}</h3>
        
                            <p>${frontendProjects[i].Description}</p
                    </section>
                </section>`;
            $("#frontend-projects").append(newProject);
        };
    };
    
    function addBackendProjects(){
        for(let i = 0; i < backendProjects.length; i++){
            backendProjects[i]["Built with"] = backendProjects[i]["Built with"].split(",").map((skill, i) => `<li>${skill}</li>`).join("");
            let newProject = `<section class="project"> 
    
                <img class="project-img" src="${backendProjects[i].img}" alt="${backendProjects[i].Name} landing page."/>
            
                <section>
    
                    <div class="close-project">
                        <div></div>
                        <div></div>
                    </div>
    
                    <button class="display-project-btn">View</button>

                    <div class="author-container">
                        <div class="author-icon"></div>

                        <div class="author-info">
                            <p>Jason C.</p>
                            <p>${backendProjects[i].started ? (backendProjects[i].started + " <span class='date-separator'></span> " + backendProjects[i].ended) : ""}</p>
                        </div>

                        <div class="author-options">
                            <div class="author-options-dot"> </div>
                            <div class="author-options-dot"> </div>
                            <div class="author-options-dot"> </div>
                            <div class="project-options">
                                <a class="live-link" href='${backendProjects[i]["View Live"]}' target='_blank' aria-label="${backendProjects[i].Name} live page" rel="noopener">View</a>
                                <a href='${backendProjects[i]["Github repo"]}' target='_blank' aria-label="${backendProjects[i].Name} github repository" rel="noopener">GitHub Repo</a>
                            </div>  
                        </div>
                    </div>
    
                    <div class="project-info">
                        <h3>${backendProjects[i].Name}</h3>
    
                        <p>${backendProjects[i].Description}</p>
                    </div>
    
                </section>
            </section>`;
    
            $("#backend-projects").append(newProject);
        };
    };
    
    function addMobileApps(){
        for(let i = 0; i < mobileAppProjects.length; i++){
            mobileAppProjects[i]["Built with"] = mobileAppProjects[i]["Built with"].split(",").map((skill, i) => `<li>${skill}</li>`).join(" ");
            let newProject = `<section class="project">
        
            <img class="project-img" src="${mobileAppProjects[i].img}" alt="${mobileAppProjects[i].Name} mobile app"/>

            <section>
                <div class="close-project">
                <div></div>
                <div></div>
            </div>                           

            <button class="display-project-btn">View</button>

            <div class="author-container">
                <div class="author-icon"></div>

                <div class="author-info">
                    <p>Jason C.</p>
                    <p>${mobileAppProjects[i].started ? (mobileAppProjects[i].started + " <span class='date-separator'></span> " + mobileAppProjects[i].ended) : ""}</p>
                </div>

                <div class="author-options">
                    <div class="author-options-dot"> </div>
                    <div class="author-options-dot"> </div>
                    <div class="author-options-dot"> </div>

                    <div class="project-options">
                        <a href="${mobileAppProjects[i]["View online"]}" target="_blank" rel="noopener">View</a>

                        <a href='${mobileAppProjects[i]["Github repo"]}' target='_blank' aria-label="${mobileAppProjects[i].Name} github repository" rel="noopener">GitHub Repo</a>
                        <a href="${mobileAppProjects[i]["Download Android version"]}" rel="noopener" download="${mobileAppProjects[i].Name} mobile app">Download Android version</a>
                    </div>
                </div>
            </div>

            <div class="project-info">
                <h3>${mobileAppProjects[i].Name}</h3>
                <p>${mobileAppProjects[i].Description}</p>
            </div> 
            </section>
        </section>`;
    
        $("#react-native-projects").append(newProject);
        };
    };
    
    function slideProjects(){
        const projects = document.getElementsByClassName("project");
    
        Array.from(projects).forEach((project, index)=>{
            if(isInViewport(project)){
                project.classList.add("slide-project");
            };
        });
    
        window.addEventListener("scroll", (e)=>{
            Array.from(projects).forEach((project, index)=>{
                if(isInViewport(project)){
                    project.classList.add("slide-project");
                };            
            });
        });
    };
    
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        
        return (
            rect.top >= 0 &&
            rect.left <= 0 &&
            rect.bottom <= (window.innerHeight || html.clientHeight) &&
            rect.right <= (window.innerWidth || html.clientWidth)
        );
    };

    function toggleprojectOptions(){
        const authorOptions = document.getElementsByClassName("author-options");

        Array.from(authorOptions).forEach((container, containerindex)=>{
            container.addEventListener("click", (e)=>{
                container.children[3].classList.toggle("show-project-options")
            });
        });
    };
    
    addFrontProjects();
    addBackendProjects();
    addMobileApps();
    slideProjects();
    toggleprojectOptions();
});
