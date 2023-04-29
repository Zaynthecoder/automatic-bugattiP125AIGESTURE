difference = 0;
rightWristX=0;
leftWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model has loaded and posenet is initialized yay!")
}

function gotPoses(results) {
    console.log("posenet is on yay!");
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);

    }
}

function draw() {
    background("#FFFFFF");
    textSize(difference);
    fill("#FF000F");
    text("Zayn", 50,400);
    
}