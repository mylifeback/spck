
const canvas = document.getElementById("canvas");
const video = document.getElementById("video");
let v;

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

function setup() {
  console.log("setup started");
  preload();
  // takeVideo();
  setInterval(console.log({ faces }), 3000);
  v();
  // faceMesh.detectStart(video, gotFaces);
  console.log("detect started");
}

function draw() {
  // console.log("a");
}

function v() {
  // createCanvas(640, 480);
  v = createCapture(VIDEO);
  v.size(640, 480);
  v.hide();

  faceMesh.detectStart(v, gotFaces);
}

function preload() {
  faceMesh = ml5.faceMesh(options);
  console.log("preloading ");
}

function gotFaces(results) {
  faces = results;
}

function takeVideo() {
  navigator.mediaDevices.getUserMedia(constraints).then(function (streamObj) {
    video.srcObject = streamObj;
    console.log("camera called");
    video.onloadedmetadata = function (event) {
      video.play();
      console.log("video started, setup called");
    };
  })
}

