
const canvas = document.getElementById("canvas");
const video = document.getElementById("video");
let ctx = canvas.getContext('2d');
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

preload();
setInterval((console.log({ faces[0] })), 3000);

async function preload() {
  faceMesh = ml5.faceMesh(options);
  await faceMesh.ready;
  camera();
}

function gotFaces(results) {
  faces = results;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  faces.forEach(face => {
    face.keypoints.forEach(keypoint => {
      ctx.beginPath();
      ctx.arc(keypoint.x, keypoint.y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });
  });
}


function startDetect() {
  faceMesh.detectStart(video, gotFaces);
}

function camera() {
  navigator.mediaDevices.getUserMedia(constraints).then(function (streamObj) {
    video.srcObject = streamObj;
    video.onloadedmetadata = function (event) {
      video.play();
      startDetect();
    };
  })
}

