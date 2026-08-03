const play = document.querySelector("#play");

const music = document.querySelector("#music");

let playing = false;

play.addEventListener("click", () => {

    if(!playing){

        music.play();

        play.src = "assets/pause.png";

        playing = true;

    }

    else{

        music.pause();

        play.src = "assets/play.png";

        playing = false;

    }

});

music.addEventListener("ended", () => {

    play.src = "assets/play.png";

    playing = false;

});