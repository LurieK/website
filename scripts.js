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


const projects= document.getElementsByClassName('projects')[0];

projects.addEventListener('click', function (){
    console.log('projects was clicked')

    if (window.innerwidth > 1000){
        const projectsSection = document.querySelector('.images');
        if (projectsSection.style.display === 'flex') {
            projectsSection.style.display = 'none';
        } else {
            projectsSection.style.display = 'flex';
        }
    }else{
        const projectsSection = document.querySelector('.responsive-portfolio');
        if (projectsSection.style.display === 'flex') {
            projectsSection.style.display = 'none';
        } else {
            projectsSection.style.display = 'flex';
        }
    }
 })
