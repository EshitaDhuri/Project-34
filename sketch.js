//Create variables here
var dog;
var happyDog;
var dogImage;
var happyDogImage;
var database;
var food;
var foodStock;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  happyDogImage.loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database= firebase.database;

  dog = new rect(200,300,20,20);
  dog.addImage("dogImage");

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}

function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage("happyDogImage");
}
  drawSprites();
  //add styles here

}

function readStock(data){
  food = data.val();
}

function writeStock(x){
if(x < 0){
  x = 0;
}
else{
  x = x-1;
}

database.ref('/').update({
  Food:x
})
}
