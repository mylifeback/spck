

// initialized variables
let faceapi;
let detections = [];

let video;
let canvas;

function setup() {
  canvas = createCanvas(1080, 720); // canvas window
  canvas.id("canvas");

  // getting video of user
  video = createCapture(video);
  video.id("video");
  video.size(width, height);

  // making face details
  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5,
  };

  //Initialize the model:
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}



// on face detection
function faceReady() {
  faceapi.detect(gotFaces);
}



// Got faces:
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detections = result; //Now all the data in this detections:

  clear(); //Draw transparent background;:
  drawBoxs(detections); //Draw detection box:
  drawLandmarks(detections); //// Draw all the face points:

  faceapi.detect(gotFaces); // Call the function again at here:
}



function drawBoxs(detections) {
  if (detections.length > 0) {
    //If at least 1 face is detected:
    for (f = 0; f < detections.length; f++) {
      let { _x, _y, _width, _height } = detections[f].alignedRect._box;
      stroke(44, 169, 225);
      strokeWeight(1);
      noFill();
      rect(_x, _y, _width, _height);
    }
  }
}



function drawLandmarks(detections) {
  if (detections.length > 0) {
    //If at least 1 face is detected:
    for (f = 0; f < detections.length; f++) {
      let points = detections[f].landmarks.positions;
      for (let i = 0; i < points.length; i++) {
        stroke(47, 255, 0); // points color
        strokeWeight(5); // points weight
        point(points[i]._x, points[i]._y);
      }
    }
  }
}




