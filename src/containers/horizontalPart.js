import ImageScrollSlide from '../components/ImageScrollSlide.js';
import Poster from '../components/poster.js';

class HorizontalPart {
  constructor() {
    const $div = document.createElement('div');
    $div.style.height = '100%';
    $div.style.userSelect = 'none';

    const slide = new ImageScrollSlide($div, ...HorizontalPart.imageScrollSlideViewModel());
    slide.$elem.style.maxWidth = '100%';
    slide.$elem.style.height = '30%';

    const poster = new Poster()
    $div.append(
      poster.$elem, 
      slide.$elem,
    );
    this.poster = poster;
    this.$elem = $div;
  }

  static imageScrollSlideViewModel(){
    const imgsSrc = window.model.scrollImgs;
    const ids = []
    for (let i = 0; i < imgsSrc.length; i++) {
      ids.push(imgsSrc[i].slice(-5,-4));
    } 
    return [imgsSrc, ids]
  }

  static posterViewModel(){
    const imgSrc = window.model.poster;
    const description = window.model.description;

    return [imgSrc, description];
  }

  update(){
    console.log('update');
    this.poster.update(...HorizontalPart.posterViewModel());
  }
}

export default HorizontalPart;
