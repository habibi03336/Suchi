import SlideShow from "./slideShow.js";
import SlideControl from "./slideControl.js";

class Slide {
  constructor(imgsSrc) {
    const $div = document.createElement('div');
    $div.style.display = 'flex';
    $div.style.flexDirection = 'column';
    this.slideShow = new SlideShow(imgsSrc);
    this.slideControl = new SlideControl(this.slideSync.bind(this));
    this.slideControl.$elem.style.width = '80%';
    this.slideControl.$elem.style.marginTop = '13%';
    $div.append(
      this.slideShow.$elem,
      this.slideControl.$elem,
    );
    this.$elem = $div;
  }

  slideSync(percent) {
    this.slideShow.slideByPercent(percent);
  }
}

export default Slide;
