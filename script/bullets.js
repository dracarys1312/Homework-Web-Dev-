class Bullet{
    constructor(x,y,direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.sprite = new Image();
        this.sprite.src = "images/bullet_up.png";
        this.spriteUp.src="images/bullet_up.png";
        this.spriteDown.src="images/bullet_down.png";
        this.spriteLeft.src="images/bullet_left.png";
        this.spriteRight.src="images/bullet_right.png";
        switch(direction){
            case 1://up
                this.speedY = -6;
                this.sprite = this.spriteUp;
                break;
            case 2://down
                this.speedY = 6;
                this.sprite = this.spriteDown;
                break;
            case 3://left
                this.speedX = -6;
                this.sprite = this.spriteLeft;
                break;
            case 4://right
                this.speedX = 6;
                this.sprite = this.spriteRight;
                break;
        }
    }
    checkCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }

    update(){
        var isShoot = true;
        var rect1 = {x:this.x, y:this.y,width:16,height:16};
        for(var i=0;i<arrBrick.length;i++)
        {
            var rect2 = {x:arrBrick[i].x, y: arrBrick[i].y, width:16,height:16};
            if(this.checkCollision(rect1,rect2)==true)
            {
                isShoot = false;
                arrBrick.splice(i,1);
                break;
            }
        }

        
        if (isShoot == true) {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }

    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
}