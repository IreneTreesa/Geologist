class Rubber{
	constructor(x,y,r)
	{
	var options={
		restitution: 0.3,
		density:1,
		friction:5
	}
		
		this.body=Bodies.circle(x,y, (r-20)/2, options)
		this.r= r;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r,this.r);

			pop()
	}

}