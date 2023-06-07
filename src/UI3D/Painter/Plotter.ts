import chroma from "chroma-js";
import { Painter } from "./Painter";

export class Plotter extends Painter {
    

    private samples: number;

    private buffer: number[] = [];

    constructor(canvas: HTMLCanvasElement) {

        super(canvas);

        this.samples = 500;
    }

    public add = (data: number, noDraw?: boolean) => {
        this.buffer.push(data);
        if(this.buffer.length > this.samples) {
            this.buffer.shift();
        }
        if(noDraw !== true) {
            this.redraw();
        }
    }

    public redraw = () => {
        this.fillBackground("black", 0.0);
        this.drawGrids();
        const offset = this.cY();

        const ctx = this.context;
        ctx.beginPath();
 
        // const gradient = ctx.createLinearGradient(0, this.canvas.height/2, 0, -this.canvas.height/2);
        // gradient.addColorStop(0,   "lime");//chroma.hsv(180,   1, 1).hex());
        // gradient.addColorStop(0.5, "blue");//chroma.hsv(0, 1, 1).hex());
        // gradient.addColorStop(1,   "red");//chroma.hsv(360, 1, 1).hex());
        ctx.strokeStyle = this.createLinearGradient("white", "yellow", "red", "y");


        ctx.lineWidth = 2.5;
        ctx.save();
        ctx.translate(0, offset);
        const sx = this.getSize().width / this.samples;
        // ctx.filter = 'blur(1px)';
        for(let i = 1; i < this.buffer.length; i++) {
            const y = this.buffer[i] * (-1);
            const x = i * sx;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.filter = '';
        ctx.restore();
    }


}