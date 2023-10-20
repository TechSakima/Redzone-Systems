document.addEventListener("DOMContentLoaded", function() {
    // Toggle navigation for mobile view
    var navbarToggle = document.querySelector('.navbar-toggle');
    var navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });

    // Smooth scroll for anchor links
    var anchorLinks = document.querySelectorAll('a[href^="#"]');

    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function(event) {
            event.preventDefault();

            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            var scrollOptions = {
                top: targetElement.offsetTop,
                behavior: "smooth"
            };

            window.scrollTo(scrollOptions);
        });
    }

    // Displaying a back to top button after scrolling 100px
    var backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Collapsible Navigation Menu for smaller screens
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close the menu when a link is clicked (useful for single-page sites)
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navMenu.classList.remove('active');
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {

    // Previous features
    // ...

    // Back to Top Button
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerText = "Back to Top";
    backToTopBtn.className = "back-to-top";
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {  // Show the button after scrolling 300px
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {

    // Previous features
    // ...

    // Tooltip functionality
    const tooltipElements = document.querySelectorAll("[data-tooltip]");

    tooltipElements.forEach(function(el) {
        const tooltipText = el.getAttribute("data-tooltip");
        const tooltipDiv = document.createElement("div");
        tooltipDiv.className = "tooltip";
        tooltipDiv.innerText = tooltipText;
        tooltipDiv.style.display = "none";
        document.body.appendChild(tooltipDiv);

        el.addEventListener('mouseenter', function(e) {
            tooltipDiv.style.left = (e.clientX + 15) + 'px';
            tooltipDiv.style.top = (e.clientY + 15) + 'px';
            tooltipDiv.style.display = "block";
        });

        el.addEventListener('mouseleave', function() {
            tooltipDiv.style.display = "none";
        });
    });

});
