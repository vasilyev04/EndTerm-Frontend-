document.getElementById('themeToggle').addEventListener('change', function () {
    const body = document.body;
    const container = document.querySelector('.container');
    const companies = document.querySelectorAll('.company');
    const headings = document.querySelectorAll('h2');

    if (this.checked) {
        body.classList.add('night-mode');
        container.classList.add('night-mode');
        companies.forEach(company => company.classList.add('night-mode'));
        headings.forEach(heading => heading.classList.add('night-mode'));
    } else {
        body.classList.remove('night-mode');
        container.classList.remove('night-mode');
        companies.forEach(company => company.classList.remove('night-mode'));
        headings.forEach(heading => heading.classList.remove('night-mode'));
    }
});