class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:100,
            stiffness:0.2
        }
this.Chain = Constraint.create(options)
World.add(world,this.Chain)
}
display(){
    var pointa = this.Chain.bodyA.position
    var pointb = this.Chain.bodyB.position
    stroke("red")
    strokeWeight(5)
    line(pointa.x,pointa.y,pointb.x,pointb.y)
    
}

}