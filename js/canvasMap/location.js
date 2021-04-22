export class Location {
    constructor(x, y, radius,nr,name,locationMap) {
        this.x = x;
        this.y = y;
        this.nr = nr
        this.radius = radius;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.button = document.getElementById("button");
        this.locationMap = locationMap;
        this.alpha = 0.7;
        this.circle = new Path2D;
        this.name = name;
        this.splitedName = name.split(' ')
    }

    draw(){
        
        this.c.save();
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius,0, Math.PI * 2,);
        this.circle.arc(this.x, this.y, this.radius,0, Math.PI * 2,);
        this.c.fillStyle = 'rgba(255, 255, 255,0.7)';
        this.c.lineWidth = 2;
        this.c.strokeStyle = "black";
        this.c.stroke();
        this.c.fill();
        this.c.restore();
        if(this.radius===40){
            this.drawImageInCircle()
            this.drawLocationName()
        }
        
    }
    drawLocationName(){
        this.c.drawImage(
            this.button,
            290,
            290,
            410,
            160,
            this.x-this.radius-11,
            this.y-70,
            100,
            40,
            );
           
        this.c.textAlign = "center";
        this.c.fillStyle = "white"
        
            for(let i = 0; i<this.splitedName.length;i++){
                let offset
                if(this.splitedName.length===1){
                    offset = this.y-50
                }else if(this.splitedName.length===2){
                    offset = this.y-54
                }else if(this.splitedName.length===3){
                    offset = this.y-58
                }
                this.c.fillText(this.splitedName[i], this.x, (offset+(i*10)));
            }
            
           
        
       
    }

    drawImageInCircle(){
        this.c.save();
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius,0, Math.PI * 2,);
        this.c.closePath();
        this.c.clip();
    
        this.c.drawImage(this.locationMap, this.x-this.radius, this.y-this.radius, 150, 150);
    
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius,0, Math.PI * 2,);
        this.c.clip();
        this.c.closePath();
        this.c.restore();
    }
  
    isInPath(x,y){
        if(this.c.isPointInPath(this.circle ,x, y)){
            return true;
        }else return false;
    }
    update(){
       this.draw();
    }


}

