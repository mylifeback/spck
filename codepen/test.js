
console.dir(Math.PI);
setInterval (hello, 1000);

let b = 1;
const a = document.getElementsByClassName("rotate");
function hello (){
  console.log(b);
  a[0].textContent = parseInt(b);
//  a[0].textContent = "ahhlsdf";
  b ++;
}
