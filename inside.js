const dj = document.querySelector(".dj");
const ticket = document.querySelector(".ticket");
const camera = document.querySelector(".camera");
const box = document.querySelector(".box");
const wrapper = document.querySelector(".wrapper");

function openPage(element, animationClass){

    element.addEventListener("click", () => {

        element.classList.add(animationClass);

        setTimeout(() => {

            wrapper.classList.add("zoom-out");

        }, 250);

        setTimeout(() => {

            window.location.href = element.dataset.link;

        }, 500);

    });

}

openPage(dj,"dj-click");

openPage(ticket,"ticket-click");

openPage(camera,"camera-click");

openPage(box,"box-click");