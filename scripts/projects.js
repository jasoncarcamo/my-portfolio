$(function(){
    const frontendProjects = [
        {
            img: "./images/website1.png",
            Name: "Fake college",
            Description: "Landing page of a fake college campus",
            'Built with': "Html5, Css3",
            'View Live': "https://jasoncarcamo.github.io/schoollayout",
            'Github repo': "https://github.com/jasoncarcamo/schoollayout",
            started: "Feb 20, 2019",
            ended: "Feb 20, 2019"
        },
        {
            img: "./images/website2.png",
            Name: "Yelp revamp",
            Description: "Used React.js and Yelp's API to retrieve a list of restaurants according to user's input.",
            'Built with': "Html5, Css3, React.js, Yelp Api",
            'View Live': "https://jasoncarcamo.github.io/yelp-api/",
            'Github repo': "https://github.com/jasoncarcamo/yelp-api-code",
            started: "Feb 25, 2019",
            ended: "Feb 25, 2019"
        },
        {
            img: "./images/website4.png",
            Name: "Burger restaurant",
            Description: "Used vanilla Html and Css to create a landing for for a fake burger restaurant.",
            'Built with': "Html, Css",
            'View Live': "https://jasoncarcamo.github.io/burgerrest/",
            'Github repo': "https://github.com/jasoncarcamo/burgerrest",
            started: "Mar 5, 2019",
            ended: "Mar 5, 2019"
        },
        {
            img: "./images/website3.png",
            Name: "Rhyming App",
            Description: "Helps you find rhyming words in english or spanish.",
            'Built with': "Html5, Css3, React, Rhyme brain Api",
            'View Live': "https://jasoncarcamo.github.io/reactrhyme/",
            'Github repo': "https://github.com/jasoncarcamo/reactrhyme-code",
            started: "Mar 10, 2019",
            ended: "Mar 10, 2019"
        }
    ];
    
    const backendProjects = [
        {
            img: "./images/serenta.png",
            Name: "Serenta",
            Description: "Used Google's map api to create a web app that displays bedrooms and apartments for rent. The app is a prototype and has not been published yet, but spanish and english will be the main language for future users.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API",
            'View Live': "http://serenta.jasoncarcamo30.now.sh/",
            'Github repo': "https://github.com/jasoncarcamo/serenta-client",
            started: "Sep 10, 2019",
            ended: "Sep 17, 2019"
        },
        {
            img: "./images/website5.png",
            Name: "Password Manager",
            Description: "Users hash, sanitize, and provide protection against cross site scripting before saving their passwords.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API",
            'View Live': "https://password-manager.jasoncarcamo30.now.sh/",
            'Github repo': "https://github.com/jasoncarcamo/password-manager-client",
            started: "Apr 2, 2019",
            ended: "Apr 5, 2019"
        },
        {
            img: "./images/julis.png",
            Name: "Julis Cleaning Company",
            Description: "Users get a feel of the company and can quickly request a quote with whatever the client has in mind. The admin recieves email confirmations when a user requests a quote or fills out the contact form. Admin also recieves push notifications on the mobile app version, see react native projects section.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API, Nodemailer.js",
            'View Live': "https://juliscleaningcompany.com/",
            'Github repo': "https://github.com/jasoncarcamo/julis-cleaning-company-client",
            started: "Aug 10, 2019",
            ended: "Aug 20, 2019"
        },
        {
            img: "./images/shoe-comp.png",
            Name: "Shoe comp",
            Description: "Users select shoes with different color combinations and add the shoe to their cart. The shoe stays in the cart incase a user did not confirm or cancel the order.",
            'Built with': "Html5, Css3, React, Express, PostgreSQL, RESTful API",
            'View Live': "https://shoe-comp-app.jasoncarcamo30.now.sh/",
            'Github repo': "https://github.com/jasoncarcamo/shoe-comp",
            started: "Apr 20, 2019",
            ended: "Apr 25, 2019"
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
            started: "Oct 15, 2019",
            ended: "Oct 19, 2019"
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
            started: "Feb 7, 2020",
            ended: "Feb 10, 2020"
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
            started: "Jan 3, 2020",
            ended: "Jan 14, 2020"
        }
    ];
    
    function addFrontProjects(){
    
        for(let i = 0; i < frontendProjects.length; i++){
            frontendProjects[i]["Built with"] = frontendProjects[i]["Built with"].split(",").map((skill, i) => `<li> ${skill} </li>`).join("");
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
    
                        <p><strong>Tech Stack:</strong></p>
                        <ul>
                            ${frontendProjects[i]["Built with"]}
                        </ul>
                    </div>
    
                </section>
            </section>`;
            
            $("#frontend-projects").append(newProject)
        };
    };
    
    function addBackendProjects(){
        for(let i = 0; i < backendProjects.length; i++){
            backendProjects[i]["Built with"] = backendProjects[i]["Built with"].split(",").map((skill, i) => `<li> ${skill} </li>`).join("");
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
                                <a class="live-link" href='${backendProjects[i]["View Live"]}' target='_blank' aria-label="${backendProjects[i].Name} live page" rel="noopener">Viewe</a>
                                <a href='${backendProjects[i]["Github repo"]}' target='_blank' aria-label="${backendProjects[i].Name} github repository" rel="noopener">GitHub Repo</a>
                            </div>  
                        </div>
                    </div>
    
                    <div class="project-info">
                        <h3>${backendProjects[i].Name}</h3>
    
                        <p>${backendProjects[i].Description}</p
    
                        <p><strong>Tech Stack</strong></p>
                        <ul
                            ${backendProjects[i]["Built with"]}
                        </ul>
                      
                    </div>
    
                </section>
            </section>`;
    
            $("#backend-projects").append(newProject);
        };
    };
    
    function addMobileApps(){
        for(let i = 0; i < mobileAppProjects.length; i++){
            mobileAppProjects[i]["Built with"] = mobileAppProjects[i]["Built with"].split(",").map((skill, i) => `<li> ${skill} </li>`).join(" ");
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

                <p><strong>Tech Stack</strong></p>
                <ul
                    ${mobileAppProjects[i]["Built with"]}
                </ul>
            </div> 
            </section>
        </section>`;
    
        $("#react-native-projects").append(newProject);
        };
    };
    
    function slideProjects(){
        const projectSection = document.getElementById("projects-section");
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