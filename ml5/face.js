
const canvas = document.getElementById("canvas");
const video = document.getElementById("video");
let stream;
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

console.log({ faces });
preload();
// camera();
// setup();
// document.addEventListener("DOMContentLoaded", setup);
setInterval(console.log({ faces }), 3000);
setInterval(console.log("hello"), 3000);
console.log("finished");

async function preload() {
  faceMesh = ml5.faceMesh(options);
  await faceMesh.ready;
  console.log("preloading completed");
  camera();
  console.log("calling camera");
}

function gotFaces(results) {
  // console.log ("called back");
  faces = results;
  console.log("got " + {results});
}


function setup() {
  faceMesh.detectStart(video, gotFaces);
  console.log("detect started");
  // faceMesh.detect(video, got1Face);
  // let triangles = faceMesh.getTriangles();
  // console.log({ triangles });

}

function camera() {
  navigator.mediaDevices.getUserMedia(constraints).then(function (streamObj) {
    video.srcObject = streamObj;
    console.log("stream added, listening event");
    video.onloadedmetadata = function (event) {
      video.play();
      setup();
      console.log("event activated, video started playing, setup called");
    };
  })
}

