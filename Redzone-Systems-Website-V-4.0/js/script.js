// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation Toggle (assuming a button with id "mobile-toggle" and a nav with id "mobile-nav")
document.getElementById('mobile-toggle').addEventListener('click', function() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('active');
});

// Simple fade-in animation for elements with class "fade-in"
document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 0;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.transition = 'opacity 1s';
                entry.target.style.opacity = 1;
            }
        });
    });

    observer.observe(el);
});

// Modal Window Functionality
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const showModalButtons = document.querySelectorAll('.show-modal');

showModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Carousel/Slider Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Highlight Active Section in Navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight/3) && pageYOffset < (sectionTop + sectionHeight/3)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Smooth Scrolling to Sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// "Back to Top" Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "Back to Top";
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animation for "Explore" Button
const exploreButton = document.querySelector('.explore-btn');
exploreButton.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 1000);
});

// Modal Pop-up for Contact Link
const contactLink = document.querySelector('nav a[href="#contact"]');
const modal = document.createElement('div');
modal.classList.add('modal');
const modalContent = `
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Contact Us</h2>
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" value="${localStorage.getItem('userEmail') || ''}">
            <button type="submit">Send</button>
        </form>
    </div>
`;
modal.innerHTML = modalContent;
document.body.appendChild(modal);

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
});

const closeBtn = modal.querySelector('.close-btn');
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Save User's Email to Local Storage
modal.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('#email').value;
    localStorage.setItem('userEmail', email);
    alert('Thank you for contacting us!');
    modal.style.display = 'none';
});

// Change Explore Button Text on Click
const exploreBtn = document.querySelector('.explore-btn');
exploreBtn.addEventListener('click', function() {
    const originalText = this.textContent;
    this.textContent = "Exploring...";
    setTimeout(() => {
        this.textContent = originalText;
    }, 2000);
});

