document.addEventListener('DOMContentLoaded', function () {
    // Get the elements to animate
    const openingImg = document.querySelector('.opening-img');
    const openingText = document.querySelector('.opening-text');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the animate-slide-in class when elements are in the viewport
    function handleScroll() {
        if (isInViewport(imgContainer)) {
            openingImg.classList.add('animate-slide-in');
        }
        if (isInViewport(openingText)) {
            openingText.classList.add('animate-slide-in');
        }
    }

    // Initial check on page load
    handleScroll();

    // Add event listener to trigger animations on scroll
    window.addEventListener('scroll', handleScroll);
});