class Bullet{
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.spriteUp.src = "images/bullet_up.png";
        this.spriteDown.src = "images/bullet_down.png";
        this.spriteLeft.src = "images/bullet_left.png";
        this.spriteRight.src = "images/bullet_right.png";
        if (direction == 1) {
            this.sprite = this.spriteUp;
            this.speedY = -3;
            this.speedX = 0;
        }
        if (direction == 2) {
            this.sprite = this.spriteDown;
            this.speedY = 3;
            this.speedX = 0;
        }
        if (direction == 3) {
            this.sprite = this.spriteLeft;
            this.speedX = -3;
            this.speedY = 0;
        }
        if (direction == 4) {
            this.sprite = this.spriteRight;
            this.speedX = 3;
            this.speedY = 0;
        }
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
}