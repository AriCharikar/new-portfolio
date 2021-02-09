//Baffle.js for the text inside the header stating my name and job title.
let modifiedName = baffle('.header-name').start();
let modifiedJobTitle = baffle('.header-job-title').start();

modifiedName.set({
    characters : 'ΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω',
    speed: 90
})

modifiedJobTitle.set({
    characters : 'आईऊऋॠऌॡऐऔऎअंअँकखगघङचछजझञटठडढणतथदधनपफबभयरवळशषसहआईऊऋॠऌॡऐऔऎअंअँकखगघङचछजझञटठडढणतथदधनपफबभयरवळशषसह',
    speed: 90
})

modifiedName.reveal(1500, 1000);
modifiedJobTitle.reveal(1500, 1000);


//Javascript for NavBar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');

hamburgerMenu.addEventListener('click', function() {
    nav.classList.toggle('nav-is-active');  
});


//Javascript Scroll elements (intersection observer api)
const fadeIn = document.querySelectorAll('.fade-in');
const slideIn = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0.3,
};

function scrollEffect(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}

const appearOnScroll = new IntersectionObserver(scrollEffect, appearOptions);

fadeIn.forEach(fade => {
    appearOnScroll.observe(fade);
});

slideIn.forEach(slide => {
    appearOnScroll.observe(slide);
});


//Transition background

function bgChanger() {
    
}