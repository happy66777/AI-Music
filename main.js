song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadSound("music.mp3");
    song2=loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console. log('poseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 600, 500);
    if(rightWristY >0 && rightWristY<250){
        
        if(song.isPlaying()){
        song.stop()
        song2.play()
        }
    }
    if(rightWristY >250 && rightWristY<500){
        
        if(song2.isPlaying()){
        song2.stop()
        song1.play()
        }
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pause_song()
{
  song.pause()
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}