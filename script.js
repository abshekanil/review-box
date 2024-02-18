    let reviews = [
        {
            id: 1,
            name: "Ethan Reynolds",
            img:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
            job: "Software Developer",
            description: "Ethan Reynolds, a skilled software developer based in San Francisco, proficient in Python, Java, and JavaScript, excels in web development and database management, with a track record of successful projects and collaboration."

        },
        {
            id: 2,
            name: "Marcus Thompson",
            img: "https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png",
            job: "Graphic Designer",
            description: "Marcus Thompson is a creative graphic designer known for his innovative designs and attention to detail. With expertise in Adobe Creative Suite, he crafts visually stunning artwork that captivates audiences and communicates brand messages effectively."
        },
        {
            id: 3,
            name: "Sophia Rodriguez",
            img: "https://lovetobeinthekitchen.com/wp-content/uploads/2015/04/Emily-Circle-Profile-e1428003256512.png",
            job: "Salesforce Developer",
            description: "Sophia Rodriguez, an adept Salesforce developer, excels in customizing and optimizing CRM solutions. With expertise in Apex, Visualforce, and Lightning components, she enhances business processes and drives organizational efficiency through innovative Salesforce solutions."
        },

        {
            id: 4,
            name: "Ava Mitchell",
            img: "https://www.ashleygrantco.com/Images/profileimage.png",
            job: "Data Analayst",
            description: "Ava Mitchell is a skilled data analyst with a knack for extracting insights from complex datasets. Proficient in SQL, Python, and data visualization tools, she uncovers actionable intelligence to drive strategic decision-making and business growth."
        },
        {
            id: 5,
            name: "Adam Starc",
            img: "https://buffer.com/library/content/images/2020/05/Ash-Read.png",
            job: "Frontend Developer",
            description: "Adam Starc, a proficient frontend developer, specializes in crafting intuitive user interfaces. With expertise in HTML, CSS, and JavaScript frameworks like React, he transforms design concepts into seamless and engaging web experiences"
        },
        {
            id: 6,
            name: "Jennifer Lopez",
            img: "https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg",
            job: "Game Developer",
            description: "Jennifer Lopez, a skilled game developer, pioneers captivating virtual experiences. Proficient in Unity and C#, she merges creativity with technical prowess to craft immersive worlds that captivate players and push boundaries."
        }


    ];

    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    let randomBtn = document.querySelector('.random');
    let names = document.querySelector('.name');
    let jobs = document.querySelector('.jobs');
    let descriptions = document.querySelector('.description');
    let imgs = document.querySelector('.images');
    let currentItem = 0;
    window.addEventListener("DOMContentLoaded", function(){
        function showPerson(){
            names.textContent =  reviews[currentItem].name;
            imgs.src = reviews[currentItem].img;
            jobs.textContent = reviews[currentItem].job;
            descriptions.textContent = reviews[currentItem].description;

        }

        prevBtn.addEventListener("click", function(){
            currentItem--;
            if(currentItem < 0)
            {
                currentItem = reviews.length - 1;
            }
            showPerson();
        });

        nextBtn.addEventListener("click", function(){
            currentItem++;
            if(currentItem > reviews.length - 1)
            {
                currentItem = 0;
            }
            showPerson();
        });

        randomBtn.addEventListener("click", function(){
            currentItem = Math.floor(Math.random()* reviews.length);
            showPerson();
            console.log(currentItem);
        })
    });


    


