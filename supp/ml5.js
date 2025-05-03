let CLASSIFIER = "MobileNet";
const image = document.getElementById("image");
const result = document.getElementById("result");
const probability = document.getElementById("probability");
const outputElement = document.getElementById("paragraph");

const classifier = ml5.imageClassifier(CLASSIFIER);

window.addEventListener("load", onImageReady);

console.log(image);
console.log(result);
console.log(probability);
console.log(outputElement);
onImageReady();

function onImageReady(){
  console.log("loaded");
  classifier.classify(image, 10, gotResult);
  console.log("predicted");
  console.log(outputElement);
  outputElement.textContent = "predicting ...";
}

function gotResult(results){
  console.log("got result ...");
  console.log({ results });
  outputElement.textContent = "results arrived ...";
  result.innerText = results[0].label;
  probability.innerText = results[0].confidence.toPrecision(2);
}