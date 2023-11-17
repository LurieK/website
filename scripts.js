document.addEventListener('DOMContentLoaded', function() {
    

    const elementsToAnimate = document.querySelectorAll('.opening, .about, .portfolio, .responsive-portfolio, .contact');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log(entry.target.className)
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    
 });

//drop down for client projects 

const clients= document.getElementsByClassName('clients')[0];

clients.addEventListener('click', function (){
    console.log('clients was clicked')
    const clientsSection = document.querySelector('.client-dropdwn');
    if (clientsSection.style.display === 'flex') {
        clientsSection.style.display = 'none';
    } else {
        clientsSection.style.display = 'flex';
    }
    
 })

//drop down for personal projects 
const projects= document.getElementsByClassName('projects')[0];

projects.addEventListener('click', function (){
    console.log('projects was clicked')
    const projectsSectionMobile = document.querySelector('.responsive-portfolio');
    const projectsSection = document.querySelector('.images');

    if (window.innerWidth > 1000){
        if (projectsSection.style.display === 'flex') {
            projectsSection.style.display = 'none';
        } else {
            projectsSection.style.display = 'flex';
        }
    }else{
        if (projectsSectionMobile.style.display === 'flex') {
            projectsSectionMobile.style.display = 'none';
        } else {
            projectsSectionMobile.style.display = 'flex';
        }
    }
 })
