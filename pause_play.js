function toggleMute() {
    var video=document.getElementById("video")
    if(video.muted){
        video.muted = false;
        btn1.innerHTML = '<i class="fa fa-volume-up"></i>'
    } else {
        video.muted = true;
        btn1.innerHTML = '<i class="fas fa-volume-mute"></i>'
    }
}

function pause_start() {
    var video=document.getElementById("video")

    if (video.paused) {
        video.play();
        btn2.innerHTML = "Pause II";
    }
    else {
        video.pause();
        btn2.innerHTML = "Play ▶";
    }
}