let w=410,h=728; //not scale 200 
let z=0;
let img=[];
let m;
let angle=0;
let q=51;
let mn=51;
let mx=147;
let canvas;

function setup() {  
	canvas=createCanvas(w,h);
	canvas.parent('canvas');
	for(let i=0;i<25;i++){
		//console.log(q);
		img[i] = loadImage("data/picture1/Movie"+q+".jpg");
		q+=4;
	}
}

function draw() {
  background(200);
  if(mouseX>=0 && mouseX<=w){
  	m=map(mouseX,z,w,mn,mx);
	m=Math.round(m);
	if((m%4) == 0){
		m--;
	}else if((m%4) == 1){
		m-=2;
	}else if((m%4) == 2){
		m-=3;
	}

  }
	//console.log(m);
  createTarget();
}

function createTarget(){
	for(let i=1; i<=25; i++){
		if( m == ((i*4)+47) ){
		push();
			image(img[25-i], 0, 0, w, h); 
		pop();
		}
	}
}
