
var back, backImg;
var banker ,bankerImg ,player;
var no_deal, deal, phone, col;
var no_dealImg, dealImg, phoneImg, colImg;
var song, callRing;
var suitcaseSelected=false;
var selectedSuitcase;
var openedSuitcases=[];
var shuffledAmountsArray = [];
var boxarray=[];
var selected=null;
var boxImg;
var b1Sprite,b2Sprite;
var boxGroup,suitcasenumber="";
var deal,noDeal;
var a,b,c;
var arr = [
  1,
  10,
  50,
  100,
  500,
  750,
  1000,
  5000,
  7000,
  10000,
  15000,
  20000

];

function preload(){
selectedSuitcase=loadImage("selected.jpg");
backImg = loadImage("back_4.jpg")
phoneImg = loadImage("phone.png")
no_dealImg = loadImage("no_deal.png")
dealImg = loadImage("deal.png")
openedSuitcase = loadImage("box_open.png")
boxImg = loadImage("box_close.png")
//colImg = loadImage("col.png")
bankerImg = loadImage("banker.png")
song = loadSound("backmusic.mp3")
}

function setup() {
  createCanvas(1500,720);

  form = new Form()
  shuffledAmountsArray = shuffle(arr); 
  console.log(arr);
  console.log(shuffledAmountsArray);
  
  b1 = new Box(400,100,10,10)
  b1Sprite=createSprite(400,100,50,50);
  b1Sprite.addImage("boxImg",boxImg);
  b1Sprite.addImage("selectedSuitcase",selectedSuitcase);
  b1Sprite.addImage("openbox",openedSuitcase);
  b1Sprite.scale=0.15;
  b2 = new Box(600,100,10,10);
  b2Sprite=createSprite(600,100,50,50);
  b2Sprite.addImage("boxImg",boxImg);
  b2Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b2Sprite.scale=0.15;
  b3 = new Box(800,100,50,50)
  b3Sprite=createSprite(800,100,50,50);
  b3Sprite.addImage("boxImg",boxImg);
  b3Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b3Sprite.scale=0.15;
  b4 = new Box(1000,100,50,50);
  b4Sprite=createSprite(1000,100,50,50);
  b4Sprite.addImage("boxImg",boxImg);
  b4Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b4Sprite.scale=0.15;
  b5 = new Box(400,300,50,50);
  b5Sprite=createSprite(400,300,50,50);
  b5Sprite.addImage("boxImg",boxImg);
  b5Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b5Sprite.scale=0.15;
  b6 = new Box(600,300,50,50);
  b6Sprite=createSprite(600,300,50,50);
  b6Sprite.addImage("boxImg",boxImg);
  b6Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b6Sprite.scale=0.15;
  b7 = new Box(800,300,50,50);
  b7Sprite=createSprite(800,300,50,50);
  b7Sprite.addImage("boxImg",boxImg);
  b7Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b7Sprite.scale=0.15;
  b8 = new Box(1000,300,50,50);
  b8Sprite=createSprite(1000,300,50,50);
  b8Sprite.addImage("boxImg",boxImg);
  b8Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b8Sprite.scale=0.15;
  b9 = new Box(400,500,50,50);
  b9Sprite=createSprite(400,500,50,50);
  b9Sprite.addImage("boxImg",boxImg);
  b9Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b9Sprite.scale=0.15;
  b10 = new Box(600,500,50,50);
  b10Sprite=createSprite(600,500,50,50);
  b10Sprite.addImage("boxImg",boxImg);
  b10Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b10Sprite.scale=0.15;
  b11 = new Box(800,500,50,50);
  b11Sprite=createSprite(800,500,50,50);
  b11Sprite.addImage("boxImg",boxImg);
  b11Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b11Sprite.scale=0.15;
  b12 = new Box(1000,500,50,50);
  b12Sprite=createSprite(1000,500,50,50);
  b12Sprite.addImage("boxImg",boxImg);
  b12Sprite.addImage("selectedSuitcase",selectedSuitcase)
  b12Sprite.scale=0.15;
deal=createSprite(500,200,100,50);
deal.shapeColor="green";
deal.visible=false;
noDeal=createSprite(1000,200,100,50);
noDeal.shapeColor="red";
noDeal.visible=false;

  boxGroup=new Group();

  boxarray=[b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12];

  col1 = new Col(1300,100,10,10,0)
  col2 = new Col(1300,200,10,10,1)
  col3 = new Col(1300,300,10,10,2)
  col4 = new Col(1300,400,10,10,3)
  col5 = new Col(1300,500,10,10,4)
  col6 = new Col(1300,600,10,10,5)
  col7 = new Col(150,100,10,10,6)
  col8 = new Col(150,200,10,10,7)
  col9 = new Col(150,300,10,10,8)
  col10 = new Col(150,400,10,10,9)
  col11 = new Col(150,500,10,10,10)
  col12 = new Col(150,600,10,10,11)

//song.play();

}

function draw() {
 // form.display();
  background(backImg);  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  col1.display();
  col2.display();
  col3.display();
  col4.display();
  col5.display();
  col6.display();
  col7.display();
  col8.display();
  col9.display();
  col10.display();
  col11.display();
  col12.display();
  if(!suitcaseSelected&&openedSuitcases.length===0)
  {
  b1Sprite.changeImage("boxImg");
  b2Sprite.changeImage("boxImg");
  b3Sprite.changeImage("boxImg");
  b4Sprite.changeImage("boxImg");
  b5Sprite.changeImage("boxImg");
  b6Sprite.changeImage("boxImg");
  b7Sprite.changeImage("boxImg");
  b8Sprite.changeImage("boxImg");
  b9Sprite.changeImage("boxImg");
  b10Sprite.changeImage("boxImg");
  b11Sprite.changeImage("boxImg");
  b12Sprite.changeImage("boxImg");
  }
  boxGroup.add(b1Sprite);
  boxGroup.add(b2Sprite);
  boxGroup.add(b3Sprite);
  boxGroup.add(b4Sprite);
  boxGroup.add(b5Sprite);
  boxGroup.add(b6Sprite);
  boxGroup.add(b7Sprite);
  boxGroup.add(b8Sprite);
  boxGroup.add(b9Sprite);
  boxGroup.add(b10Sprite);
  boxGroup.add(b11Sprite);
  boxGroup.add(b12Sprite);


  stroke("black")
  textSize(25)
  fill("white")
  text("CHOOSE YOUR CASE",600,10)

  stroke("black")
  textSize(15)
  fill("white")
  text("MY CASE :"+suitcasenumber,width/2,height-40)

  for(var i=0;i<boxGroup.length;i++)
  {
  
    if(mousePressedOver(boxGroup.get(i))&&!(suitcaseSelected))
    {
      if(openedSuitcases.includes(i+1))
      {
        boxGroup.get(i).changeImage("openbox");
      }
      else{
      boxGroup.get(i).changeImage("selectedSuitcase");
      fill("white");
       suitcasenumber=i+1;// no next to My Case
        suitcaseSelected=true;
        deal.visible=true;
        noDeal.visible=true;
    }
  }
  }
//please add deal or no deal images or sprites to confirm the user whether they are surre to open the box
if(mousePressedOver(deal))
{
deal.visible=false;
noDeal.visible=false;
for(var i=0;i<boxGroup.length;i++)
{
  if(i===suitcasenumber-1)
  {
    if(!openedSuitcases.includes(suitcasenumber))
    {
boxGroup.get(i).changeImage("openbox");
openedSuitcases.push(suitcasenumber);
a=shuffledAmountsArray[i];
b=boxarray[i].x;
c=boxarray[i].y;
text(shuffledAmountsArray[i],boxarray[i].x,boxarray[i].y)
suitcaseSelected=false;
    }
  }
}
}

drawSprites();
textSize(25)
text(a,b,c);

textSize(30);
fill("black")
text("1",390,120)
textSize(30);
fill("black")
text("2",590,120)
textSize(30);
fill("black")
text("3",790,120)
textSize(30);
fill("black")
text("4",990,120)
textSize(30);
fill("black")
text("5",390,320)
textSize(30);
fill("black")
text("6",590,320)
textSize(30);
fill("black")
text("7",790,320)
textSize(30);
fill("black")
text("8",990,320)
textSize(30);
fill("black")
text("9",390,520)
textSize(30);
fill("black")
text("10",590,520)
textSize(30);
fill("black")
text("11",790,520)
textSize(30);
fill("black")
text("12",990,520)
}




    /* { 
    if (mousePressedOver(b1)&&(selectedSuitcase!=1)&&!openedSuitcases.includes(",1,")) {
        b1.changeImage(openedSuitcase);
        openedSuitcases=openedSuitcases+",1,";
        text(shuffledAmountsArray[0], b1.x, b1.y);
    } else if (mousePressedOver(b2)&&(selectedSuitcase!=2)&&!openedSuitcases.includes(",2,")) {
      b2.changeImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",2,";
      text(shuffledAmountsArray[1], b2.x, b2.y);
    } if (mousePressedOver(b3)&&(selectedSuitcase!=3)&&!openedSuitcases.includes(",3,")) {
      b3.changeImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",3,";
      text(shuffledAmountsArray[2], b3.x, b3.y);
    } 
    //...till 12
}*/

