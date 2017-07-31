var bugs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i=0; i<20; i++) {
    bugs.push(new Jitter());
  }
}



function mousePressed(){
      for (var i=0; i<bugs.length; i++) {
        bugs[i].clicked();
  }
}


function draw() {
  background(50, 89, 100);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}
