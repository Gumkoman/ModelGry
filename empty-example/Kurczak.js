function Kurczak(){

  this.x = Math.random()*width;
  thix.y = 250;
  this.r = 50;

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
  }

}
