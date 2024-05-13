
document.querySelectorAll('.navbar-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault()

        const sectionId = this.getAttribute('data-section')
        const targetSection = document.querySelector(sectionId)

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    })
})

// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
        }
    });
}

const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observe each section with the class 'observe-section'
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});



