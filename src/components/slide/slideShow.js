import Image from '../image.js';

class SlideShow {
  constructor(imagesSrc) {
    const images = imagesSrc.map((src) => new Image(src, '200px', '200px'));
    this.images = images;
    const $div = document.createElement('div');
    $div.style.overflowX = 'hidden';
    $div.style.height = '40%';
    $div.style.paddingTop = '9%';
    $div.style.paddingBottom = '5%';
    const $innerDiv = document.createElement('div');
    $innerDiv.style.display = 'flex';
    $innerDiv.style.gap = '10%';
    this.currentImage = 0;
    if (this.images[this.currentImage]) {
      this.images[this.currentImage].$elem.style.boxShadow = '0px 0px 30px black';
    }
    this.totalImageWidth = 0;

    const $arrow = document.createElement('img');
    $arrow.src = '../../../asset/arrow.svg';
    $arrow.style.width = '2%';
    $arrow.style.marginLeft = '5%';
    $innerDiv.appendChild($arrow);
    for (let i = 0; i < images.length; i++) {
      $innerDiv.appendChild(images[i].$elem);
    }
    $div.append($innerDiv);
    this.$innerDiv = $innerDiv;
    this.$elem = $div;
  }

  slideByPercent(percent) {
    if (this.totalImageWidth === 0) {
      this.imagesWidthCum = [];
      let widthCum = 0;
      for (let i = 0; i < this.images.length; i++) {
        this.totalImageWidth += this.images[i].$elem.offsetWidth;
        widthCum += this.images[i].$elem.offsetWidth;
        this.imagesWidthCum.push(widthCum);
      }
      this.totalImageWidth += this.$innerDiv.offsetWidth * 0.1 * (this.images.length - 1);
      this.totalImageWidth -= this.$elem.offsetWidth;
    }
    const currentPosition = this.totalImageWidth * (percent / 100);
    if (currentPosition > this.imagesWidthCum[this.currentImage]) {
      this.currentImage += 1;
      this.images[this.currentImage].$elem.style.boxShadow = '0px 0px 30px black';
      this.images[this.currentImage - 1].$elem.style.boxShadow = '';
    } else if (currentPosition < this.imagesWidthCum[this.currentImage - 1]) {
      this.currentImage -= 1;
      this.images[this.currentImage].$elem.style.boxShadow = '0px 0px 30px black';
      this.images[this.currentImage + 1].$elem.style.boxShadow = '';
    }
    this.$innerDiv.style.transform = `translateX(-${percent * (this.totalImageWidth / this.$elem.offsetWidth)}%)`;
  }

  static imgStyle = {
    padding: '10%',
  };

  static divStyle = {
    margin: '10%',
  };
}

export default SlideShow;
