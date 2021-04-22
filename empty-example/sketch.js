var enemy;
var crosshair;
var windowSizeX;
var windowSizeY;
var timer;
var key;
var score;
function setup() {
  windowSizeX=1920;
  windowSizeY=1080;
  key=5;
  enemy = new Enemy;
  crosshair = new Crosshair;
  timer = new Timer;
  score = new Score;
  createCanvas(windowSizeX,windowSizeY);
  noCursor();
}

function draw() {
  background(237, 34, 93);
  if(timer.value<10){
    enemy.show();
    enemy.checkCollision(score);
    crosshair.show();
    crosshair.updateMouse();
    timer.updateTime();
    timer.showTimer();
    score.showScore(10,640);
  }else{
    score.showScore(600,300);
  }
  //console.log(timer.value);
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
  this.checkCollision=function(sc){
    var tempR;
    tempR=Math.sqrt(Math.pow(mouseX-this.x,2)+Math.pow(mouseY-this.y,2));
    if ((tempR<this.r)&&(mouseIsPressed)){
      console.log(windowSizeY);
      this.changePosition();
      sc.addScore();
      //timer.updateTime();
      //console.log(timer.value);
    }
  }

}
function Score(){
  this.value=0;
  this.addScore=function(){
    this.value+=1;
  }
  this.showScore=function(x,y){
    text("Score: "+this.value,x,y);
  }
}
function Timer(){
  this.initialValue = second();
  this.value = 0;
  this.x=450;
  this.y=64;
  this.updateTime = function(){
    this.value = Math.abs(this.initialValue-second());
  }

  this.showTimer=function(){
    fill(0);
    textSize(64);
    text("Timeleft: "+(10-this.value),this.x,this.y);
    if(this.value>5){
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    }
  }
}
