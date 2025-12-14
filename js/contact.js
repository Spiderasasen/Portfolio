const contact_button = document.getElementById("contact");

//when contact button is clicked, it will send you to contact.html and also highlight the contact sectioon in nav
contact_button.addEventListener("click", () => {
    console.log("clicked", contact_button); //checks that the button is clicked
    sessionStorage.setItem("activeLink", "contact_me.html"); //sets the current active to be the contact.html link
    window.location.href = "contact_me.html"; //changes the location
});