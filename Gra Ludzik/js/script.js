const gamePlane = {
    canvas : document.createElement("canvas"),
    init(){
        this.canvas.width = 500;
            this.canvas.height = 250;
            this.context = this.canvas.getContext("2d");
            document.body.append(this.canvas);
            window.addEventListener("keydown", e => {
                //console.log(e.key)
                player.changePos(e.key)
            })
            window.addEventListener("keyup", e => {
                console.log(e.key)
            })
        
        
        },
        update(){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            
            player.update();
            for(const o of obstacles){
                o.update();
                //usuwanie przeszkody
                if(o,x <= 0 - o.w){
                    //obstacles.shift()
                    //console.log("wyszed")
                    o.x = 470;

                }
            }
        },

        interval : setInterval(()=>{ gamePlane.update() },50)

    }
gamePlane.init()



const player = new Player(50, 150, 50, 50);

const obstacles = [new Rock(250,150,20,50),new Rock(350,150,20,50)
];
