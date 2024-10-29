document.getElementById('themeToggle').addEventListener('change', function () {
    const body = document.body;
    const formContainer = document.querySelector('.form-container');
    const labels = document.querySelectorAll('label');

    if (this.checked) {
        body.classList.add('night-mode');
        formContainer.classList.add('night-mode');
        labels.forEach(label => label.classList.add('night-mode'));
    } else {
        body.classList.remove('night-mode');
        formContainer.classList.remove('night-mode');
        labels.forEach(label => label.classList.remove('night-mode'));
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        console.log("Форма отправлена");
        alert('Форма успешно отправлена!');

        form.reset();
    });
});


