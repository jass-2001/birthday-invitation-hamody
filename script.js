const container = document.querySelector(".container");
const cover = document.querySelector(".cover-keyhole");

cover.addEventListener("click", () => {

    container.classList.add("open");

    setTimeout(() => {

        window.location.href = "inside.html";

    }, 1000);

});