


function handle (data){
  setTimeout (postMessage(data.data[0] +1), 1000);
}

onmessage = handle(data);

