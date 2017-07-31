function Jitter() {
  this.x = random(width);
  this.y = random(height);   
  this.diameter = random(10, 30);
  this.col = color(255,100);
  this.speed = 1;   

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);           
  };
    

  this.clicked = function(){
      var distanse = dist(mouseX,mouseY,this.x,this.y);
      var r = this.diameter / 2;
      if (distanse < r ){
           this.col = color(255, 49, 130);
          }
  };
  this.display = function() {
    fill(this.col)
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}