document.getElementById('themeToggle').addEventListener('change', function () {
    const body = document.body;
    const formContainer = document.querySelector('.form-container');
    const labels = document.querySelectorAll('label');

    if (this.checked) {
        body.classList.add('night-mode');
        formContainer.classList.add('night-mode');
        labels.forEach(label => label.classList.add('night-mode'));
        localStorage.setItem('theme', 'night');
    } else {
        body.classList.remove('night-mode');
        formContainer.classList.remove('night-mode');
        labels.forEach(label => label.classList.remove('night-mode'));
        localStorage.setItem('theme', 'day'); 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        console.log("Форма отправлена, но страница не обновляется");
        alert('Форма успешно отправлена!');

        form.reset();
    });

    const theme = localStorage.getItem('theme');
    const body = document.body;
    const formContainer = document.querySelector('.form-container');
    const labels = document.querySelectorAll('label');
    const themeToggle = document.getElementById('themeToggle');

    if (theme === 'night') {
        body.classList.add('night-mode');
        formContainer.classList.add('night-mode');
        labels.forEach(label => label.classList.add('night-mode'));
        themeToggle.checked = true; 
    } else {
        body.classList.remove('night-mode');
        formContainer.classList.remove('night-mode');
        labels.forEach(label => label.classList.remove('night-mode'));
        themeToggle.checked = false; 
    }
});


