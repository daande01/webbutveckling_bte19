console.log("test");

var x=300;
var y=300;
var xSpeed=1
var ySpeed=2
var g=4;
var canvas =document.getElementById("canvas");

var ctx = canvas.getContext("2d");
var h=window.innerHeight;
var w=window.innerWidth;
canvas.width=w;
canvas.height=h;

var antalbollar=10;
var bollar =[];  // skapar arr   (radie , hastighet , färg, x , y)

for (var i = 0; i < antalbollar; i++) {
  
  bollar.push({
    x: Math.floor(Math.random()*w ) ,
    y:Math.floor(Math.random()*h )  ,
    r:Math.random()*100  ,
    c1:Math.random()*255,
    c2:Math.random()*255 , 
    c3:Math.random()*255  ,
     xv:Math.random()*5 ,
      yv:Math.random()*5 });
  
}






function update(){
  
  
  bollar.forEach((boll, bollar) => {
    
    
    boll.yv=boll.yv+g;
    
    //ySpeed=ySpeed+g;
    
    boll.y=boll.y+boll.yv;
  //  y=y+ySpeed;
  
  
  if(boll.y>(h-boll.r)){
    
    boll.yv=boll.yv*-1;
    boll.y=boll.y-(boll.r/5);
  
  
  
    //ySpeed=ySpeed*-1;
    
  }else if( boll.y<0+boll.r){
    
      boll.yv=boll.yv*-1;
    //ySpeed=ySpeed*-1;
    
    
  }
  
    
    
  });
  
  
  
  
  
  
  
}
function paint(){
  
  ctx.clearRect(0,0,w,h);
  
  for (var i = 0; i < antalbollar; i++) {

    var boll= bollar[i];  // plockar ut en array ur arrayen 
  
  ctx.fillStyle="rgb("+boll.c1+","+boll.c2+","+boll.c3+", 0.8)";
  ctx.beginPath();
  ctx.arc(boll.x, boll.y  ,boll.r,0,2*Math.PI); // x,y,r,startvinkel i radianer,slutvinkel i radianer
  ctx.fill();
}  
  update();
}





setInterval(paint,30);