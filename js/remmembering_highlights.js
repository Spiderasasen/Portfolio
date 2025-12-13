const navLinks = document.querySelectorAll('nav a');

//adding a click events to each click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        //saves something to local storage
        sessionStorage.setItem("activeLink", link.getAttribute('href'));
    });
});

//on page load, checking localStorage
const activeLink = sessionStorage.getItem("activeLink");
if (activeLink){
    navLinks.forEach(link => {
        if (link.getAttribute('href') === activeLink){
            link.classList.add("active");
        }
        else{
            link.classList.remove("active");
        }
    });
}