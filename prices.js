document.getElementById('themeToggle').addEventListener('change', function () {
    const body = document.body;
    const container = document.querySelector('.container');
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const headings = document.querySelectorAll('th');

    if (this.checked) {
        body.classList.add('night-mode');
        container.classList.add('night-mode');
        table.classList.add('night-mode');
        rows.forEach(row => row.classList.add('night-mode'));
        headings.forEach(heading => heading.classList.add('night-mode'));
    } else {
        body.classList.remove('night-mode');
        container.classList.remove('night-mode');
        table.classList.remove('night-mode');
        rows.forEach(row => row.classList.remove('night-mode'));
        headings.forEach(heading => heading.classList.remove('night-mode'));
    }
});