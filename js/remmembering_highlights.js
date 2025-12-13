const navLinks = document.querySelectorAll('nav a');

//adding a click events to each click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        //saves something to local storage
        sessionStorage.setItem("activeLink", link.getAttribute('href'));
        console.log("activeLink", link.getAttribute('href'));
    });
});

//on page load, checking localStorage
const activeLink = sessionStorage.getItem("activeLink");
const currentPage = window.location.pathname.split('/').pop();
if (activeLink){
    navLinks.forEach(link => {
        //removeing the link first

        link.classList.remove('active');
        //user clicked a link earlier in the session
        if (activeLink && link.getAttribute('href') === activeLink){
            link.classList.add('active');
            console.log("Case 1) user clicked a link earlier in the session")
        }
        else{
            link.classList.remove('active');
            console.log("Removing all the other highlights! in case 1")
        }
    });
}
else{
    navLinks.forEach(link => {
        //falling back to the orginal highlight
        if (link.getAttribute('href') === currentPage){
            link.classList.add('active');
            console.log("Case 2) falling back to the orginal highlight")
        }
        else{
            link.classList.remove('active');
            console.log("Removing all the other highlights! in case 2")
        }
    })
}