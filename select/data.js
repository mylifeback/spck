const folder = "meningioma";
const file = "large";
// const show = "vtk";      
const show = "dicom";                  

const a1 = ["lesion", "red", 1.0];
const a2 = ["skin", "green", 0.6];
const a3 = ["dura", "blue", 1, "1"];
const a4 = ["opening", "purple", 1, "2"];
const a5 = ["rightSkin", "green", 0.4, "3"];
const a6 = ["marker", 0xFFFFFF, 1, "4"];
const models = [a1, a2, a3, a4, a5, a6];


const names = {
  title: "meningioma",
  topic: "large meningioma",
  
};

const select = {
  folder: folder,
  file: file,
  show: show
};

export {names, models, select};

