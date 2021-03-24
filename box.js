class Box {
constructor(x,y,width,height){
    this.x = x,
    this.y = y
    this.image = loadImage("box_close.png")
}
display(){
    rectMode(CENTER);
    rect(this.x,this.y, 50, 50);
}

 
}