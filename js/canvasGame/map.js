export class Map{

    constructor(nr,mobs) {
        this.nr = nr;
        this.canvas = document.querySelector('canvas');
        this.c = this.canvas.getContext('2d');
        this.nr1 = document.getElementById("lightningBolt");
        this.nr2 = document.getElementById("lightningBolt");
        this.mobs = mobs;
    }
}