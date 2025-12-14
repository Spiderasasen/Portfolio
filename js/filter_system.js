const langs = document.querySelectorAll('.lang');

langs.forEach(lang => {
    lang.addEventListener('click', () => {
        // remove active from all
        langs.forEach(l => l.classList.remove('active'));
        // add active to the clicked one
        lang.classList.add('active');
    });
});