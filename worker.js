console.log("started worker");


function loop (){
  console.log("worker thread: " + 45678);
}

setInterval (loop, 1000);
