import Image from '../image.js';
import addClassStyle from '../../../lib/addClassStyle.js';

class SlideShow {
  constructor(imagesSrc) {
    const images = imagesSrc.map((src) => new Image(src));
    this.images = images;
    const $div = document.createElement('div');
    const $innerDiv = document.createElement('div');
    $div.style.overflowX = 'hidden';
    $innerDiv.style.display = 'flex';
    this.totalImageWidth = 0;
    for (let i = 0; i < images.length; i++) {
      addClassStyle(images[i].$elem, SlideShow.imgStyle);
      $innerDiv.appendChild(images[i].$elem);
    }
    $div.append($innerDiv);
    this.$innerDiv = $innerDiv;
    this.$elem = $div;
  }

  slideByPercent(percent) {
    if (this.totalImageWidth === 0) {
      for (let i = 0; i < this.images.length; i++) {
        this.totalImageWidth += this.images[i].$elem.offsetWidth;
      }
    }
    this.$innerDiv.style.transform = `translateX(-${percent * (this.totalImageWidth / this.$elem.offsetWidth)}%)`;
  }

  static imgStyle = {
    margin: '10%',
  };
}

export default SlideShow;
