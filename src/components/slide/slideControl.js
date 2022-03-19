import addClassStyle from '../../../lib/addClassStyle.js';

class SlideControl {
  constructor(buttonControlCallback) {
    this.buttonControlCallback = buttonControlCallback;
    this.$div = document.createElement('div');
    this.$div.style.margin = '0 auto';
    this.$button = document.createElement('div');
    const $centerLine = document.createElement('hr');
    addClassStyle(this.$div, SlideControl.sliderStyle);
    addClassStyle(this.$button, SlideControl.slider_buttonStyle);
    addClassStyle($centerLine, SlideControl.centerLineStyle);
    this.$button.addEventListener('mousedown', this.buttonControl.bind(this));
    document.addEventListener('mousemove', this.buttonControl.bind(this));
    document.addEventListener('mouseup', this.buttonControl.bind(this));
    this.$button.addEventListener('touchstart', this.buttonControl.bind(this));
    document.addEventListener('touchmove', this.buttonControl.bind(this));
    document.addEventListener('touchend', this.buttonControl.bind(this));
    document.addEventListener('touchcancel', this.buttonControl.bind(this));
    this.clicked = false;
    this.xCoord = 0;
    this.$div.appendChild(this.$button);
    this.$div.appendChild($centerLine);
    this.$elem = this.$div;
  }

  buttonControl(e) {
    if (['mousedown', 'touchstart'].includes(e.type)) {
      if (!this.clicked) {
        this.clicked = true;
        this.xCoord = e.clientX || (e.touches ? e.touches[0].clientX : 0);
      }
    } else if (['mousemove', 'touchmove'].includes(e.type) && this.clicked) {
      const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
      const newLeft = Number(this.$button.style.left.slice(0, -1))
        + (Number(clientX - this.xCoord) / this.$div.offsetWidth) * 100;
      if (newLeft > 100 || newLeft < 0) {
        return;
      }
      this.buttonControlCallback(newLeft);
      this.$button.style.left = `${newLeft}%`;
      this.xCoord = clientX;
    } else if (['mouseup', 'touchend', 'touchcancel'].includes(e.type)) {
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
