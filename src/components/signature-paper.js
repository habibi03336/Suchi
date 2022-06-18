export default class SigniturePaper{

    static state = {
        default : Symbol(),
        drawing : Symbol(),
    };

    constructor(){
        this.$elem = document.createElement('canvas');
        this.state = SigniturePaper.state.default;
        this.ctx = this.$elem.getContext('2d');

        const startDrawing = (e) => {  
            this.state = SigniturePaper.state.drawing;
            this.ctx.beginPath();
            this.ctx.moveTo(e.layerX / this.$elem.offsetWidth * 300, e.layerY / this.$elem.offsetHeight * 150);
        }
        const drawing =  (e) => {
            if(this.state === SigniturePaper.state.drawing) {
                console.log(e.layerX / this.$elem.offsetWidth, e.layerY / this.$elem.offsetHeight);
                this.ctx.lineTo(e.layerX / this.$elem.offsetWidth * 300, e.layerY / this.$elem.offsetHeight * 150);
                this.ctx.moveTo(e.layerX / this.$elem.offsetWidth * 300, e.layerY / this.$elem.offsetHeight * 150);
                this.ctx.stroke();
            }
        }

        const finishDrawing = () => { this.state = SigniturePaper.state.default; };

        this.$elem.addEventListener('mousedown', startDrawing);
        this.$elem.addEventListener('mousemove', drawing);
        this.$elem.addEventListener('mouseup', finishDrawing);
        this.$elem.addEventListener('touchstart', startDrawing);
        this.$elem.addEventListener('touchmove', drawing);
        this.$elem.addEventListener('touchend', finishDrawing);
    }
}