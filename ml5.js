let CLASSIFIER = "MobileNet";
const image = document.getElementById("image");
const result = document.getElementById("result");
const probability = document.getElementById("probability");
const log = document.getElementById("console");

const classifier = ml5.imageClassifier(CLASSIFIER);



// function onImageReady() {
//   console.log("ready");
// }

function onImageReady(){
  console.log("loaded");
  classifier.classify(image, 10, gotResult);
  console.log("predicted");
  log.textContent = "predicting ...";
}

function gotResult(results){
  console.log("got result ...");
  console.log({ results });
  log.textContent = "results arrived ...";
  result.innerText = results[0].label;
  probability.innerText = results[0].probability.toPrecision(2);
}