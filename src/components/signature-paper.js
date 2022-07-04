export default class SigniturePaper{

    static state = {
        default : Symbol(),
        drawing : Symbol(),
    };

    constructor(){
        this.$elem = document.createElement('canvas');
        this.$elem.style.width = '300px';
        this.$elem.style.height = '150px';
        this.state = SigniturePaper.state.default;
        this.ctx = this.$elem.getContext('2d');

        const startDrawing = (e) => {  
            this.state = SigniturePaper.state.drawing;
            this.ctx.beginPath();
            if(e.type === 'touchstart') {
                this.ctx.lineTo((e.targetTouches[0].clientX - rect.left) / this.$elem.offsetWidth * 300, (e.targetTouches[0].clientY - rect.top) / this.$elem.offsetHeight * 150);
            }
            else this.ctx.moveTo(e.layerX / this.$elem.offsetWidth * 300, e.layerY / this.$elem.offsetHeight * 150);
        }
        const drawing =  (e) => {
            if(this.state === SigniturePaper.state.drawing) {
                if(e.type === 'touchmove'){
                    const rect = this.$elem.getBoundingClientRect();
                    this.ctx.lineTo((e.targetTouches[0].clientX - rect.left) / this.$elem.offsetWidth * 300, (e.targetTouches[0].clientY - rect.top) / this.$elem.offsetHeight * 150);
                    this.ctx.moveTo((e.targetTouches[0].clientX - rect.left) / this.$elem.offsetWidth * 300, (e.targetTouches[0].clientY - rect.top)  / this.$elem.offsetHeight * 150);
                    this.ctx.stroke();
                } else {
                    this.ctx.lineTo(e.layerX / this.$elem.offsetWidth * 300, e.layerY / this.$elem.offsetHeight * 150);
                    this.ctx.moveTo(e.layerX / this.$elem.offsetWidth * 300, e.layerY / this.$elem.offsetHeight * 150);
                    this.ctx.stroke();
                }
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