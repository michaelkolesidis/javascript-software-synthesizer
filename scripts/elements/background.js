/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 *  Provides the animated background for JSS-01.
 *  Utilizing p5.js
 * 
 */

let star = [];//star array
let canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);  
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  for (let i = 0; i < 4000; i++) {
    //make a star array, and the array is a star function.
    star[i] = new Star();
  }
}


function draw() {
  //background change
  // let blue = map(mouseY, 0, height, 54, 14);
  background(255);

  //call the star show function
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < star.length; i++) {
    star[i].show();
  }
  pop();
}

function Star() {
  //make main variables
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);

  //this funtion draw the stars and make them move
  this.show = function() {
    //make the speed change with the mouseX
    this.speed = 1;
    this.z = this.z - this.speed;

    //when stars come to the front, draw more stars.
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }

    //draw the stars & add its move
    fill(180, 180, 180);
    noStroke();
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.r = map(this.z, 0, width, 5, 0);
    ellipse(this.sx, this.sy, this.r, this.r);
  }
}