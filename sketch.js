var bg,bgImg;
var cat, catImg1, catImg2,catImg3, catImg4;
var mouse, mouseImg1, mouseImg2,mouseImg3, catImg4;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3=loadAnimation("images/cat3.png");
    mouseImg3=loadAnimation("images/mouse3.png");
    catImg4=loadAnimation("images/cat4.png");
    mouseImg4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(850,600,10,10);
    cat.addAnimation("CatSitting",catImg1);
    cat.scale=0.2;

    mouse=createSprite(150,600,10,10);
    mouse.addAnimation("mouseCheese",mouseImg1);
    mouse.scale=0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catHappy",catImg4);
    cat.scale=0.2;
    cat.changeAnimation("catHappy");
    mouse.addAnimation("mouseHappy",mouseImg4);
    mouse.scale=0.2;
    mouse.changeAnimation("mouseHappy");
    cat.x=270;
    cat.y=600;
}

    drawSprites();
}

function keyPressed(){

    if(keyCode===LEFT_ARROW){
        mouse.addAnimation("mouseTesing",mouseImg2);
        mouse.scale=0.2;
        mouse.changeAnimation("mouseTesing");
        mouse.frameDelay=10;
        cat.addAnimation("catWalking",catImg2);
        cat.scale=0.2;
        cat.changeAnimation("catWalking");
        cat.velocityX=-3;
    }

}
