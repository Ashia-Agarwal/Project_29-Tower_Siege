const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, platform;
var boxa1, boxa2, boxa3, boxa4, boxa5, boxa6, boxa7;
var boxb1, boxb2, boxb3, boxb4, boxb5;
var boxc1, boxc2, boxc3;
var boxd1;
var polygon, polyimg, chain;

function preload() {
    polyimg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1280, 574);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2, height-15, width, 30, "black");
    platform = new Ground(900, height-145, 300, 20, "white");
    boxa1 = new Box(812.5, height-175, 25, 50, "blue");
    boxa2 = new Box(837.5, height-175, 25, 50, "blue");
    boxa3 = new Box(862.5, height-175, 25, 50, "blue");
    boxa4 = new Box(887.5, height-175, 25, 50, "blue");
    boxa5 = new Box(912.5, height-175, 25, 50, "blue");
    boxa6 = new Box(937.5, height-175, 25, 50, "blue");
    boxa7 = new Box(962.5, height-175, 25, 50, "blue");
    boxb1 = new Box(837.5, height-200, 25, 50, "red");
    boxb2 = new Box(862.5, height-200, 25, 50, "red");
    boxb3 = new Box(887.5, height-200, 25, 50, "red");
    boxb4 = new Box(912.5, height-200, 25, 50, "red");
    boxb5 = new Box(937.5, height-200, 25, 50, "red");
    boxc1 = new Box(862.5, height-225, 25, 50, "green");
    boxc2 = new Box(887.5, height-225, 25, 50, "green");
    boxc3 = new Box(912.5, height-225, 25, 50, "green");
    boxd1 = new Box(887.5, height-250, 25, 50, "purple");
    polygon = Bodies.rectangle(200, 150, 50, 50, {'restitution': 0.5, 'friction': 1.0, 'density': 15});
    World.add(world, polygon);
    chain = new Slingshot(polygon, {'x': 225, 'y': 125});
}

function draw() {
    background(0);
    Engine.update(engine);
    boxa1.display();
    boxa2.display();
    boxa3.display();
    boxa4.display();
    boxa5.display();
    boxa6.display();
    boxa7.display();
    boxb1.display();
    boxb2.display();
    boxb3.display();
    boxb4.display();
    boxb5.display();
    boxc1.display();
    boxc2.display();
    boxc3.display();
    boxd1.display();
    ground.display();
    platform.display();
    chain.display();
    push();
    translate(polygon.position.x, polygon.position.y);
    rotate(polygon.angle);
    imageMode(CENTER);
    image(polyimg, 0, 0, 50, 50);
    pop();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    chain.fly();
}