
//  ======= NAvigation Bar Function =========
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
}else{
    menuBtn.className = "nav-menu";
    }
}



// Add Animation on navigation bar while scrolling =======

    window.onscroll = function() {
        headerShadow()
    }
    function headerShadow(){
        const navHeader = document.getElementById("header");

        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navHeader.style.boxShadow = "0 1px 6px  rgba(0,0,0,0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = " 70px";

    }else {
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = " 90px";

    }
}

// ========== Typing Effect ==========

// var typingEffect = new Typed(".typedText", {
//     strings: ["Web Developer", "Frontend Developer", "Web Designer"], // Corrected 'Strings' to 'strings'
//     loop: true,
//     typeSpeed: 150,
//     backSpeed: 90,
//     backDelay: 3000,
// });
document.addEventListener("DOMContentLoaded", function () {
    var typingEffect = new Typed(".typedText", {
        strings: ["Web Developer", "Frontend Developer", "Web Designer"],
        loop: true,
        typeSpeed: 150,
        backSpeed: 90,
        backDelay: 2000,
    });
});




// ===========scroll reveal animation =========
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// ==HOME==
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.featured-image',{delay: 200})


// Project-box 
sr.reveal('.project-box',{interval: 200})

// Headings
sr.reveal('.top-header',{})

// ========= scroll reveal left right animations


// About Info & Contact Info


const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

// About Skills & Form Box
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-cotrol',{delay: 100})

// Change Active Links

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.scrollY;
    
    sections.forEach(current =>{
        const sectionsHeight = current.offsetHeight;
        const sectionsTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionsTop && scrollY <= sectionsTop + sectionsHeight){


        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
});
}

window.addEventListener('scroll', scrollActive);