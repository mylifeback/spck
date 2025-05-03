let CLASSIFIER = "MobileNet";
const image = document.getElementById("image");
const result = document.getElementById("result");
const probability = document.getElementById("probability");

const classifier = ml5.imageClassifier(CLASSIFIER);



// function onImageReady() {
//   console.log("ready");
// }

function onImageLoaded(){
  console.log("loaded");
  classifier.classify(image, 10, gotResult);
  console.log("predicted");
}

function gotResult(results){
  console.log("got result ...");
  console.log({results});
  // result.innerText = results[0].label;
  // probability.innerText = results[0].probability.toPrecision(2);
}