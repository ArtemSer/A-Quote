// Terrain stuff.
let space = document.getElementById("terCanvas"),
    background = document.getElementById("bgCanvas"),
    bgCtx = background.getContext("2d"),
    width = window.innerWidth,
    height = document.body.offsetHeight;
(height < 400)?height = 400:height;

space.width = background.width = width;
space.height = background.height = height;


// Second canvas used for the stars
bgCtx.fillStyle = "#05004c";
bgCtx.fillRect(0,0,width,height);

// stars
function Star(options){
    this.size = Math.random()*2;
    this.speed = Math.random()*.1;
    this.x = options.x;
    this.y = options.y;
}

Star.prototype.reset = function(){
    this.size = Math.random()*2;
    this.speed = Math.random()*.1;
    this.x = width;
    this.y = Math.random()*height;
};

Star.prototype.update = function(){
    this.x -= this.speed;
    if(this.x<0)
        {this.reset();}
    else
        {bgCtx.fillRect(this.x,this.y,this.size,this.size);}

};

function ShootingStar(){
    this.reset();
}

ShootingStar.prototype.reset = function(){
    this.x = Math.random()*width;
    this.y = 0;
    this.len = (Math.random()*80)+10;
    this.speed = (Math.random()*10)+6;
    this.size = (Math.random())+0.1;
    // made so stars aren't constant
    this.waitTime =  new Date().getTime() + (Math.random()*3000)+500;
    this.active = false;
};

ShootingStar.prototype.update = function(){
    if(this.active){
        this.x-=this.speed;
        this.y+=this.speed;
        if(this.x<0 || this.y >= height)
            this.reset();
        else{
            bgCtx.lineWidth = this.size;
            bgCtx.beginPath();
            bgCtx.moveTo(this.x,this.y);
            bgCtx.lineTo(this.x+this.len, this.y-this.len);
            bgCtx.stroke();
        }
    }
    else{
        if(this.waitTime < new Date().getTime())
            this.active = true;
    }
};

const entities = [];

// init the stars
for(let i=0; i < height; i++)
    entities.push(new Star({x:Math.random()*width,
                            y:Math.random()*height}));


// Add 3 shooting stars.
entities.push(new ShootingStar());
entities.push(new ShootingStar());
entities.push(new ShootingStar());

//animate background
function animate(){
    bgCtx.fillStyle = '#05004c';
    bgCtx.fillRect(0,0,width,height);
    bgCtx.fillStyle = '#ffffff';
    bgCtx.strokeStyle = '#ffffff';

    let entLen = entities.length;

    while(entLen--) entities[entLen].update();

    requestAnimationFrame(animate);
}

animate();