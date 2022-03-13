import SlideShow from "./slideShow.js";
import SlideControl from "./slideControl.js";

class Slide {
  constructor(imgsSrc) {
    const $div = document.createElement('div');
    this.slideShow = new SlideShow(imgsSrc);
    this.slideControl = new SlideControl(this.slideSync.bind(this));
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
