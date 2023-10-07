console canvas = document.getElementById("canvas");
const crx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
cost CANVAS_HEIGHT = canvas.height = 600;

cost playerImage = new Image();
playerImage.src = "./assets/images/assets/images/shadow_dog.png";
const spriteWidth = 575;
cost spriteHeight = 523;
let frameX = 4;
let frameY = 5;//byta frame
let gameFrame = 0;
cost staggerFrames = 5; //hastinghet


function animate(){
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   //ctx.fillRect(50,50,100,100);
   //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
   let position = Math.floor(gameFrame/staggeredFrames) % 6;
   ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spritewidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
   requestAnimationFrame(animate);
   if (gameFrame % staggerFrames == 0){//hastighet
   if (frameX < 6) frameX++;//antal frames 
   else frameX = 0;

    }
   gameframe ++;
};
animated();

