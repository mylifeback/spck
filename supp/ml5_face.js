// let CLASSIFIER = "MobileNet";
// const image = document.getElementById("image");
// const result = document.getElementById("result");
// const probability = document.getElementById("probability");
// const outputElement = document.getElementById("paragraph");
// const classifier = ml5.imageClassifier(CLASSIFIER);

const canvas = document.getElementById("canvas");
const video = document.getElementById("video");
let faceMesh;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipped: false };
const source = "https://";



preload();
setup();

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function gotFaces(results) {
  faces = results;
  console.log("got " + {results});
}

function setup() {
  faceMesh.detectStart(video, gotFaces);
}

window.addEventListener("load", setup);

function camera() {
  navigator.mediaDevices.getUserMedia(constraints).then(function (streamObj) {
    video.srcObject = streamObj;
    video.onloadedmetadata = function (event) { video.onplay(); }
  })
}

// console.log(image);
// console.log(result);
// console.log(probability);
// console.log(outputElement);
// onImageReady();

// function onImageReady(){
//   console.log("loaded");
//   classifier.classify(image, 10, gotResult);
//   console.log("predicted");
//   console.log(outputElement);
//   outputElement.textContent = "predicting ...";
// }

// function gotResult(results){
//   console.log("got result ...");
//   console.log({ results });
//   outputElement.textContent = "results arrived ...";
//   result.innerText = results[0].label;
//   probability.innerText = results[0].confidence.toPrecision(2);
// }