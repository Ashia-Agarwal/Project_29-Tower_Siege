class Box {
  constructor(x, y, width, height, color) {
    var options = {
      'restitution': 0.5,
      'friction': 1.0,
      'density': 15
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    World.add(world, this.body);
  }

  display() {
    rectMode(CENTER);
    fill(this.color);
    stroke("white");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }
}