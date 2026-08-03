const cards = document.querySelectorAll(".video-card");

let currentVideo = null;

cards.forEach(card => {

    const video = card.querySelector(".video");
    const play = card.querySelector(".play-icon");

    // نخلي الفيديو يشتغل داخل الصفحة
    video.playsInline = true;
    

    card.addEventListener("click", () => {

        // لو ضغط على نفس الفيديو وهو شغال
        if(currentVideo === video && !video.paused){

            video.pause();
            video.currentTime = 0;

            play.style.opacity = "1";
            play.style.transform = "translate(-50%,-50%) scale(1)";

            currentVideo = null;

            return;

        }

        // لو فيه فيديو تاني شغال
        if(currentVideo && currentVideo !== video){

            currentVideo.pause();
            currentVideo.currentTime = 0;

            const oldCard = currentVideo.closest(".video-card");
            const oldPlay = oldCard.querySelector(".play-icon");

            oldPlay.style.opacity = "1";
            oldPlay.style.transform = "translate(-50%,-50%) scale(1)";

        }

        // تشغيل الفيديو الجديد
        currentVideo = video;

        play.style.opacity = "0";
        play.style.transform = "translate(-50%,-50%) scale(1.3)";

        video.play();

    });

    // عند انتهاء الفيديو
    video.addEventListener("ended", () => {

        play.style.opacity = "1";
        play.style.transform = "translate(-50%,-50%) scale(1)";

        video.currentTime = 0;

        currentVideo = null;

    });

});