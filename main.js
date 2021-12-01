leftWristX=0;
rightWristX=0;

difference=0;

function setup(){

    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550, 435);
    canvas.position(650,130);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){

    background("#32a8a6");
    text("Sahasra", 150, 200);
    textSize(difference);
    fill("pink");
   

}

function modelLoaded(){

    console.log("PoseNet is intiallized");
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftWristX= "+leftWristX+"rightWristX= "+rightWristX);
        difference= floor(leftWristX-rightWristX);
        console.log("difference= "+difference);
    }
}