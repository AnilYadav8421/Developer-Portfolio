const menuItems = document.querySelector('#menu-items');
const menuIcons = document.querySelector('.menu-icon');

const about1 = document.querySelector('.about1');
const project1 = document.querySelector('.project1');

const aboutID = document.querySelector('#aboutID');
const projectID = document.querySelector('#projectID');

const skills1 = document.querySelector('.skill1');
const skillID = document.querySelector('#skillsID');



const contact1 = document.querySelector('.contact1');
const contactID = document.querySelector('#contactID');


// Navbar
menuItems.style.maxHeight = '0px'
menuIcons.addEventListener('click', function(){
    if(menuItems.style.maxHeight == '0px'){
        menuItems.style.maxHeight = '200px'
    }
    else{
        menuItems.style.maxHeight = '0px'
    }
})

// Scrool to page
about1.addEventListener('click', function(){
    aboutID.scrollIntoView({behavior: "smooth"});
})

project1.addEventListener('click', function(){
    projectID.scrollIntoView({behavior: "smooth"});
})

contact1.addEventListener('click', function(){
    contactID.scrollIntoView({behavior: "smooth"});
})

skills1.addEventListener('click', function(){
    skillID.scrollIntoView({behavior: "smooth"});
})

console.log(skills1.textContent);
console.log(skillID);

console.log('hello');