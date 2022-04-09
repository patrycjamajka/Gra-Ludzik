class Player {
    constructor(x, y, w, h,){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.floor = y;
        this.maxJump = 0;
        this.wasItUp = false;
        this.speedY = 0;
        this.ctx = gamePlane.context;
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

    }

    update(){

        // Jeśli kolejne podniesienie nie wyjdzie za this.maxJump
        if(this.y - this.speedY >= this.maxJump && !this.wasItUp){
            //jesli jest miejsce nad kwadratem
        this.y -= this.speedY;
        //this.ctx.fillRect(this.x, this.y, this.w, this.h) 
        
    }
        else{
        this.wasItUp = true;

        if(this.floor <= this.y){
            console.log(this.floor, this.y)
            this.wasItUp = false;
            this.speedY = 0;
        }
        else{
            //jesli bylem na gorze, ale jeszcze nie jestem na dole
        this.y += this.speedY;
        }
    }
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
}
    changePos(key){
        //sprawdzanie wielu elementow w jednym 
        if(['ArrowUp',' '].includes(key)) {
            this.speedY = 2;
            console.log("CHECKING"+ key)
        }
}
}

class Rock {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = gamePlane.context;
        
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

    }
    update(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.x -= 5;
    }
}