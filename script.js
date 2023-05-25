noseX=0;
noseY=0;
function preload() {
    mustache=loadImage("https://i.postimg.cc/P59W6whh/pngimg-com-moustache-PNG18.png");
}

function setup() {
  canvas = createCanvas(800, 800);
  canvas.center();
  video=createCapture(VIDEO);  
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
  video.hide();
}

function modelLoaded(){
    console.log('PoseNet Is Initaialized');
}


function gotPoses(results){
    if(results.length>0){
        noseY=results[0].pose.nose.y;
        noseX=results[0].pose.nose.x
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log(results);
    }
}


function draw() {
  image(video,0,0,800,800);
  fill("red")
  stroke("red")
  image(mustache,noseX+60,noseY+500,100,100);
}

function take_snapshot(){    
  save('myFilterImage.png');
}