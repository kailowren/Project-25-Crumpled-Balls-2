class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.5,
          friction: 0.5,
          density: 1.2
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage("Paper.png");
      World.add(world, this.body);
    }
    display(){
      var paperpos=this.body.position; 
      push() 
      translate(paperpos.x, paperpos.y); 
      rectMode(CENTER) 
      fill(255,0,255) 
      imageMode(CENTER); 
      image(this.image, 0,0,70,70) 
      pop()
    }
  };