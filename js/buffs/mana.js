import { Buff } from "./buff.js";

export class Mana extends Buff{

    constructor(x, y, radius,nr) {

        super(x,y,radius,nr)
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.potion = document.getElementById("potion");
        this.potionHeight = 16;
        this.potionWidth = 16;
        this.potionFrameX = 2;
        this.potionFrameY = 0;
    }


    drawPotion(){
        this.c.drawImage(
            this.potion,
            this.potionWidth*this.potionFrameX,
            this.potionHeight*this.potionFrameY,
            this.potionWidth,
            this.potionHeight,
            this.x-this.potionWidth/2,
            this.y-this.potionHeight/2,
            this.potionWidth*1.5,
            this.potionHeight*1.5,
            );
    }

    update() {
        this.draw();
        this.drawPotion();
        
    }
}