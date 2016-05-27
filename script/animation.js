class Animation{
    constructor(x,y,name,number,speed)
    {
        this.count = 0;
        this.speed = speed;
        this.countFrame = number;
        this.x = x;
        this.y = y;
        this.sprites = new Array();
        this.index = 0;
        for(var i = 1;i<=number;i++)
        {
            var image = new Image();
            var dir = "images/"+name+i+".png";
            image.src = dir;
            this.sprites.push(image);
        }
    }
    update(){
        this.count++;
        if(this.count>=this.speed)
        {
            this.index++;
            this.index = this.index % this.countFrame;
            this.count = 0;
        }
    }
    draw(context){
        context.drawImage(this.sprites[this.index],this.x,this.y);
    }
}
//**Tank animation
class tankAnimation{
    constructor(x,y,name,number,speed,end)
    {
        this.name = name;
        this.end = end;
        this.x = x;
        this.y = y;
        this.direction="down";
        this.count = 0;
        this.speed = speed;
        this.countFrame = number;
        this.sprites = [];
        this.index = 0;
        for (var i = 1; i <= number; i++) {
            var image = new Image();
            var dir = "images/" + this.name + this.direction+"_c0_t"+ i+ this.end+".png";
            image.src = dir;
            this.sprites.push(image);
        }
    }
    update(x,y,speedx,speedy){
        this.x=x;
        this.y=y;
        this.count++;
        if(this.count>=this.speed)
        {
            if(speedx != 0 || speedy !=0)
            {
                this.index++;
                this.index = this.index % this.countFrame;
            }
            this.count = 0;
        }
    }
    moveleft()
    {
        this.direction="left";
        for (var i = 0; i < this.countFrame; i++) {
            var image = new Image();
            var dir = "images/" + this.name + this.direction+"_c0_t"+(i+1)+ this.end+".png";
            image.src = dir;
            this.sprites[i]=image;
        }
    }
    moveright()
    {
        this.direction="right";
        for (var i = 0; i < this.countFrame; i++) {
            var image = new Image();
            var dir = "images/" + this.name + this.direction+"_c0_t"+ (i+1)+ this.end+".png";
            image.src = dir;
            this.sprites[i]=image;
        }
    }
    movedown()
    {
        this.direction="down";
        for (var i = 0; i < this.countFrame; i++) {
            var image = new Image();
            var dir = "images/" + this.name + this.direction+"_c0_t"+ (i+1)+ this.end+".png";
            image.src = dir;
            this.sprites[i]=image;
        }
    }
    moveup()
    {
        this.direction="up";
        for (var i = 0; i < this.countFrame; i++) {
            var image = new Image();
            var dir = "images/" + this.name + this.direction+"_c0_t"+ (i+1)+ this.end+".png";
            image.src = dir;
            this.sprites[i]=image;
        }
    }
    draw(context){
        context.drawImage(this.sprites[this.index],this.x,this.y);
    }
}