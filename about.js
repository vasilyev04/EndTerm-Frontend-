const button = document.getElementById('changeColorButton');
const body = document.body;

const colors = ['#FF5733', '#33FFBD', '#FF33A6', '#338AFF', '#FFD433', '#75FF33'];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    body.style.backgroundColor = randomColor;
}

button.addEventListener('click', changeBackgroundColor);

function getCurrentDateTime() {
    const now = new Date();

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    return now.toLocaleString('en-US', options);
}

function updateDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    dateTimeElement.textContent = getCurrentDateTime();
}


setInterval(updateDateTime, 1000);

window.onload = updateDateTime;


var modal = document.getElementById("contactModal");
var btn = document.getElementById("contactBtn");
var span = document.querySelector(".close");

if (btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    };
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


function showConfetti() {
    confetti(
        {
            particleCount: 200,
            spread: 200
        }
    );
}

document.getElementById('themeToggle').addEventListener('change', function () {
    const body = document.body;
    const formContainer = document.querySelector('.container');
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