
const canvas = document.getElementById("canvas");
const video = document.getElementById("video");
let faceMesh;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipped: false };
const constraints = {
  audio: false,
  video: {
    facingMode: "user",
    width: { min: 320, ideal: 640, max: 800 },
    height: {min: 240, ideal: 480, max: 720}
  }
}


preload();
camera();
setup();
// document.addEventListener("DOMContentLoaded", setup);
setInterval(console.log({ faces }), 3000);

function preload() {
  faceMesh = ml5.faceMesh(options);
  console.log("preloading ");
}

function gotFaces(results) {
  faces = results;
  // console.log("got " + {results});
}

function got1Face(results) {
  // console.log("hello");
  // console.log("got 1 face" + { results });
}

function setup() {
  faceMesh.detectStart(video, gotFaces);
  // faceMesh.detect(video, got1Face);
  // let triangles = faceMesh.getTriangles();
  // console.log({ triangles });

}

function camera() {
  navigator.mediaDevices.getUserMedia(constraints).then(function (streamObj) {
    video.srcObject = streamObj;
    video.onloadedmetadata = function (event) { video.play() };
  })
}

