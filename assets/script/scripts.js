document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelectorAll(".project-button")
    let popup = document.querySelector(".popup")
    let close = document.querySelector(".close")

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function() {
            popup.style.display = "flex";
        })
    }

    close.addEventListener("click", function() {
        popup.style.display = "none";
    })
});