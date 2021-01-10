function preload(){
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotposes);
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function take_snapshot(){
    save("myimg_2.png");
}
function next_page(){
    window.location="ears.html";
}
function back_page(){
    window.location="index.html";
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function gotposes(result){
 if(result.length > 0)
 {
    console.log(result);
console.log("lefteye x="+result[0].pose.leftEye.x);
console.log("lefteye y="+result[0].pose.leftEye.y);
console.log("righteye x="+result[0].pose.rightEye.x);
console.log("righteye y="+result[0].pose.rightEye.y);
}
 }