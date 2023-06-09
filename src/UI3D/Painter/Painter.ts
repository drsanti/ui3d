
import chroma from "chroma-js";


export interface AlphaColor {
    color: string;
    alpha: number;
}

export interface GridProps {
    ngV?: number;
    ngH?: number;
    gColor?: AlphaColor;
    mColor?: AlphaColor;
    dash?: number[];
}

export class Painter {

    public context: CanvasRenderingContext2D;

    private isGridEnabled = true;

    constructor(public canvas: HTMLCanvasElement) {

        this.context = canvas.getContext("2d") as CanvasRenderingContext2D;

        if (this.context === null) {
            throw new Error(`Cannot can 2d context of the canvas "${canvas.id}".`);
        }
    }

    public clear = () => {
        this.canvas.width = 0 + this.canvas.width;
    }

    private ngV = 6;    // Vertical grids
    private ngH = 6;    // Horizontal grids

    public drawGrids = (props?: GridProps) => {

        if (this.isGridEnabled === false) {
            return;
        }

        this.ngV = props?.ngV === undefined ? this.ngV : props?.ngV;
        this.ngH = props?.ngH === undefined ? this.ngH : props?.ngH;

        // console.log(this.ngV, this.ngH)

        const cvs = this.canvas;
        const ctx = this.context;

        ctx.save();
        // ctx.filter = 'blur(0.2px)';

        const stX = cvs.width / this.ngV;
        const stY = cvs.height / this.ngH;

        ctx.strokeStyle = chroma("cyan").alpha(0.8).hex();
        ctx.lineWidth = 0.65;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();

        // Horizontal lines
        for (let n = 1; n <= this.ngH; n++) {
            const y = Math.round(n * stY);
            ctx.moveTo(0, y);
            ctx.lineTo(cvs.width, y);
        }
        // Vertical lines
        for (let n = 0; n < this.ngV; n++) {
            const x = Math.round(n * stX);
            ctx.moveTo(x, 0);
            ctx.lineTo(x, cvs.height);
        }

        ctx.stroke();


        // Marker
        ctx.strokeStyle = chroma("red").alpha(0.65).hex();
        ctx.lineWidth = 1.8;
        ctx.setLineDash([]);
        ctx.beginPath();


        ctx.translate(this.cX(), this.cY());
        ctx.rotate(0);
        const len = 7;
        ctx.moveTo(-len, 0); ctx.lineTo(len, 0);
        ctx.moveTo(0, -len); ctx.lineTo(0, len);
        ctx.stroke();

        ctx.restore();
    }

    public gX = () => Math.round(this.canvas.width / this.ngV);
    public gY = () => Math.round(this.canvas.height / this.ngH);
    public cX = () => Math.round(this.canvas.width / 2);
    public cY = () => Math.round(this.canvas.height / 2);
    public getCanvas = () => this.canvas;
    public getContext = () => this.context;
    public getWidth = () => this.canvas.width;
    public getHeight = () => this.canvas.height;


    public fillBackground = (color?: string, alpha?: number) => {
        this.canvas.width = 0 + this.canvas.width;
        const ctx = this.context;
        ctx.fillStyle = chroma(color === undefined ? 'black' : color).alpha(alpha === undefined ? 1 : alpha).hex();
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public setSize = (width: number, height: number) => {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    public getSize = () => {
        return { width: this.canvas.width, height: this.canvas.height };
    }

    public enableGrids = (enabled: boolean) => {
        this.isGridEnabled = enabled;
    }
    public showGrids = () => {
        this.isGridEnabled = true;
    }
    public hideGrids = () => {
        this.isGridEnabled = false;
    }

    public drawText = (text: string, x: number, y: number) => {
        const ctx = this.context;
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        ctx.font = '22px mono';
        ctx.textBaseline = "top";
        ctx.strokeStyle = chroma('red').alpha(0.7).hex();
        ctx.fillStyle = chroma('red').alpha(0.9).hex();
        // ctx.strokeText("hello", 0, 0);
        ctx.fillText(text, x, y);
        ctx.stroke();
        ctx.fill();
        ctx.restore();

    }

    public createLinearGradient = (colorLow: string, colorMid: string, colorHigh: string, direction: "x" | "y" | "xy") => {
        let gradient;
        if (direction === "y")
            gradient = this.context.createLinearGradient(0, this.canvas.height, 0, 0);
        else if (direction === "x") {
            gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);
        }
        else {
            gradient = this.context.createLinearGradient(0, this.canvas.height, this.canvas.width, 0);
        }

        gradient.addColorStop(0, colorLow);
        gradient.addColorStop(0.5, colorMid);
        gradient.addColorStop(1, colorHigh);
        return gradient;
    }

}