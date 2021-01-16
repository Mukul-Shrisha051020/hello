function preload() {}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log("Posenet is Instalized");
}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("nose_x = " + result[0].pose.nose.x);
        console.log("nose_y = " + result[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300)
}

function Take_snapshot() {
    save('Your-image_jpeg');
}