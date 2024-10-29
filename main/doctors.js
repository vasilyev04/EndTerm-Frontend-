var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let isDefaultFont = true;

function toggleFont() {
    const textElement = document.getElementById("myText");

    if (isDefaultFont) {
        textElement.style.fontFamily = "Courier New, monospace";
    } else {
        textElement.style.fontFamily = "Arial, sans-serif";
    }

    isDefaultFont = !isDefaultFont;
}