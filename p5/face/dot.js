let mesh;
let video;
let faces = [];
let option = {
  maxFaces: 1,
  refinelandmarks: false,
  flipHorizontal: false
};

function setup() {
  prepare();
}

function draw() {
  
}

function prepare() {
  mesh = ml5.faceMesh(option);
  video = createCapture(VIDEO);
  video.size(640, 480);
  // video.hide();
  mesh.detectStart(video, callback);
}

function callback(dots) {
  faces = dots;
}