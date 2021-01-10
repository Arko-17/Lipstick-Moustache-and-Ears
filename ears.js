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
    save("myimg_3.png");
}
function back(){
    window.location="glasses.html";
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function gotposes(result){
 if(result.length > 0)
 {
    console.log(result);
console.log("leftears x="+result[0].pose.leftEar.x);
console.log("leftears y="+result[0].pose.leftEar.y);
console.log("rightears x="+result[0].pose.rightEar.x);
console.log("rightears y="+result[0].pose.rightEar.y);
}
 }