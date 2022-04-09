// import Slide from '../components/slide/slide.js';
import ImageScrollSlide from '../components/ImageScrollSlide.js';
import Poster from '../components/poster.js';
import MenuButton from '../components/menuButton.js';

class HorizontalPart {
  constructor(imgsSrc, menuButtonImgSrc, menuButtonsize) {
    const $div = document.createElement('div');
    $div.style.height = '100%';
    $div.style.userSelect = 'none';

    const slide = new ImageScrollSlide($div, imgsSrc);
    slide.$elem.style.maxWidth = '100%';
    slide.$elem.style.height = '30%';

    const poster = new Poster(imgsSrc[0], "내 지금이 수치다. 난 모든 걸  뒤엎고 싶다.")
    $div.append(
      poster.$elem, 
      slide.$elem,
    );
    this.poster = poster;
    this.$elem = $div;
  }
}

export default HorizontalPart;
