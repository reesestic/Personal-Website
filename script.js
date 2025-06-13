const vid = document.getElementById("bg-video");

vid.currentTime = 15; 

vid.addEventListener("timeupdate", () => {
    if (vid.currentTime > 35) {
    vid.currentTime = 15;
    }
});
