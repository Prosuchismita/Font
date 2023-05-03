left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;






function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(10,50);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightwrist_x;
        left_wrist_x = results[0].pose.leftwrist_x;

        difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightwrist_x - "results[0].pose.rightwrist_x"rightwrist_y -"+results[0].pose.rightwrist_y);
        console.log("rightwrist_y - "results[0].pose.rightwrist_x"rightwrist_y -"+results[0].pose.rightwrist_y);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background(' #0000FF');
    document.getElementById("font-size").innerHTML = "Font size of the text will be - "+difference+"px";
    fill('#00fea');
    textSize(difference);
    text('Suchismita',50,600);
}