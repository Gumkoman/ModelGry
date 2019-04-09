var enemy;
var crosshair;
var windowSizeX;
var windowSizeY;
function setup() {
  windowSizeX=1280;
  windowSizeY=720;
  enemy = new Enemy;
  crosshair = new Crosshair
  createCanvas(windowSizeX,windowSizeY);
  noCursor();
}

function draw() {
  background(237, 34, 93);
  enemy.show();
  crosshair.show();
  crosshair.updateMouse();
}
function Crosshair(){
  this.x = mouseX;
  this.y = mouseY;

  this.show=function(){
    fill(0);
    ellipse(this.x, this.y, 10, 10);
  }

  this.updateMouse=function(){
    this.x = mouseX;
    this.y = mouseY;
  }
}
function Enemy(){
  console.log(windowSizeX);
  console.log(windowSizeY);
  this.x = Math.random()*windowSizeX;
  this.y = Math.random()*windowSizeY;
  this.r = 50;

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
  }
  this.changePosition=function(){
    this.x = Math.random()*windowSizeX;
    this.y = Math.random()*windowSizeY;
  }
  this.checkCollision=function(){

  }

}
