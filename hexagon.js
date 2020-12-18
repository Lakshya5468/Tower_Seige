class Hexagon extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image=loadImage("polygon.js");
    }
  display(){
    image(this.image, 0, 0, this.width, this.height);
  }
  };