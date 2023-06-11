import chroma from "chroma-js";
import { Painter } from "./Painter";

export class Plotter extends Painter {


    private samples: number;

    private buffer: number[] = [];

    private max = +1;
    private min = -1;

    private isAutoRange = true;

    private gainFactor = 1.0;

    constructor(canvas: HTMLCanvasElement) {

        super(canvas);

        this.samples = 250;

    }

    /**
     * Add data [-0, +1] to buffer and redraw.
     */
    private _counter = 0;
    public add = (data: number, noDraw?: boolean) => {
        this.buffer.push(data);
        if (this.buffer.length > this.samples) {
            this.buffer.shift();
        }

        // this.max = data > this.max ? data : this.max - 0.0001; //Math.abs(this.max * 0.002);
        // this.min = data < this.min ? data : this.min + 0.0001; //Math.abs(this.min * 0.002);

        // console.log([this.min, this.max]);

        if (this.isAutoRange) {
            if (data > this.max || data < this.min) {
                // console.log([data, this.min, this.max]);
                this._counter = 0;
                this.autoMinMax();
            }
            else {
                if (++this._counter >= this.canvas.width) {
                    this._counter = 0;
                    // this.autoMinMax();
                }
            }
        }


        if (noDraw !== true) {
            this.redraw();
        }
    }

    public redraw = () => {

        this.fillBackground("black", 0.0);

        this.drawGrids();

        const fullScaleGain = (this.canvas.height / (this.max - this.min));

        const offset = this.canvas.height / 2;// + this.min * autoGain;


        const ctx = this.context;
        ctx.beginPath();

        ctx.strokeStyle = this.createLinearGradient("cyan", "yellow", "red", "y");


        ctx.lineWidth = 2.5;
        // ctx.save();
        ctx.translate(0, 0);
        const sx = this.getSize().width / this.samples;
        // ctx.filter = 'blur(1px)';
        for (let i = 1; i < this.buffer.length; i++) {
            const amp = this.buffer[i];
            const y = amp * (-fullScaleGain * this.gainFactor) + offset;
            const x = i * sx;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        // ctx.filter = '';
        // ctx.restore();
    }

    public setMinMax = (min: number, max: number) => {
        this.min = min;
        this.max = max;
    }

    public autoMinMax = () => {
        let min = this.buffer[0];
        let max = min;
        for (let i = 1; i < this.buffer.length; i++) {
            const v = this.buffer[i];
            min = v < min ? v : min;
            max = v > max ? v : max;
        }
        this.min = min;
        this.max = max;
    }

    public enableAutoRange = (enabled: boolean) => {
        this.isAutoRange = enabled;
    }

    public setGainFactor = (gainFactor: number) => {
        this.gainFactor = gainFactor;
    }
}