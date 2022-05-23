var video = "";
var status = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
canvas = createCanvas(480, 380);
canvas.center();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "estado: detectando objetos";
}

function modelLoaded(){
 console.log("model loaded");
 status = true;
 video.loop();
 video.speed(1);
 video.volumen(0);
}

function draw(){
    image(video,0,0,480,380);
}
