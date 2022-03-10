import addClassStyle from '../../lib/addClassStyle.js';

class SlideControl {
  constructor() {
    this.$div = document.createElement('div');
    this.$button = document.createElement('div');
    const $centerLine = document.createElement('hr');
    addClassStyle(this.$div, SlideControl.sliderStyle);
    addClassStyle(this.$button, SlideControl.slider_buttonStyle);
    addClassStyle($centerLine, SlideControl.centerLineStyle);
    this.$button.addEventListener('mousedown', this.buttonControl.bind(this));
    document.addEventListener('mousemove', this.buttonControl.bind(this));
    document.addEventListener('mouseup', this.buttonControl.bind(this));
    this.clicked = false;
    this.xCoord = 0;
    this.$div.appendChild(this.$button);
    this.$div.appendChild($centerLine);
    this.$elem = this.$div;
  }

  setButtonPostion(relativePosition) {
    this.$button.style.left = `${relativePosition}%`;
  }

  getButtonPostion() {
    return Number(this.$button.style.left.slice(0, -1));
  }

  buttonControl(e) {
    if (e.type === 'mousedown') {
      if (!this.clicked) {
        this.clicked = true;
        this.xCoord = e.clientX;
      }
    } else if (e.type === 'mousemove' && this.clicked) {
      const newLeft = Number(this.$button.style.left.slice(0, -1))
        + (Number(e.clientX - this.xCoord) / this.$div.offsetWidth) * 100;
      if (newLeft > 98.5 || newLeft < 0) {
        return;
      }
      this.$button.style.left = `${newLeft}%`;
      this.xCoord = e.clientX;
    } else if (e.type === 'mouseup') {
      this.clicked = false;
    }
  }

  static centerLineStyle = {
    position: 'absolute',
    border: '2px solid gray',
    width: '100%',
    zIndex: '-1',
  };

  static sliderStyle = {
    position: 'relative',
    width: '100%',
    height: '20px',
  };

  static slider_buttonStyle = {
    position: 'absolute',
    display: 'inline-block',
    width: '20px',
    height: '100%',
    backgroundColor: 'gray',
    left: '0%',
    clipPath: 'circle(50%)',
  };
}

export default SlideControl;
