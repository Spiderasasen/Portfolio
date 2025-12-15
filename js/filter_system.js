//creating a type filter

//getting the ids of all the langauges
const web = document.getElementById("web");
const python = document.getElementById("python");
const java = document.getElementById("java");
const rust = document.getElementById("rust");

//getting the quary of all the projects systems
const projects = document.querySelectorAll("[data-value]");

//for the web
web.addEventListener("click", () => {
    console.log("clicked", web);
    projects.forEach((project) => {
        if (project.dataset.value !== "web"){
            project.style.display = 'none';
        }
        else{
            project.style.display = 'block';
        }
    });
});

//for python
python.addEventListener("click", () => {
    console.log("clicked", python);
    projects.forEach((project) => {
        if (project.dataset.value !== "python"){
            project.style.display = 'none';
        }
        else{
            project.style.display = 'block';
        }
    });
});

//for java
java.addEventListener("click", () => {
    console.log("clicked", java);
    projects.forEach((project) => {
        if (project.dataset.value !== "java"){
            project.style.display = 'none';
        }
        else{
            project.style.display = 'block';
        }
    });
});

//for rust
rust.addEventListener("click", () => {
    console.log("clicked", rust);
    projects.forEach((project) => {
        if (project.dataset.value !== "rust"){
            project.style.display = 'none';
        }
        else{
            project.style.display = 'block';
        }
    })
})

//for my images being shown when clicked
const langs = document.querySelectorAll('.lang');

langs.forEach(lang => {
    lang.addEventListener('click', () => {
        // remove active from all
        langs.forEach(l => l.classList.remove('active'));
        // add active to the clicked one
        lang.classList.add('active');
    });
});