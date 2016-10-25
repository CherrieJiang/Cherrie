var x=0;
var y=0;
var abcd;

function preload(){
    abcd = loadImage("pics/2222.png")

    createCanvas(innerWidth, innerHeight)
    colorMode(HSB);
    background(random(0,200),80,100);

}

function draw(){
    
     
     fill(random(0,255),100,100)
     noStroke();

         blendMode(BLEND);
         ellipse(mouseX,mouseY,20,20);
         image(abcd,mouseX,mouseY,70,50)
       

       
 
 }