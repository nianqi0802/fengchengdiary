var weibopost;


function preload(){
    weibopost = loadJSON("/home/test.json");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  console.log(weibopost);
}