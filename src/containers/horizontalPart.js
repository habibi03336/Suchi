import ImageScrollSlide from '../components/ImageScrollSlide.js';
import Poster from '../components/poster.js';
import addClassStyle from '../../lib/addClassStyle.js';
import { VIEWSIZE, EVENT } from '../constants.js';
import { debounce } from '../../lib/scrooge.js';

class HorizontalPart {
  constructor() {
    this.viewTypeMobile = false;
    const $div = document.createElement('div');
    addClassStyle($div, {height: '100%', userSelect: 'none'});

    const slide = new ImageScrollSlide($div, window.model.constant.scrollImgsUrl);
    slide.$elem.style.maxWidth = '100%';
    slide.$elem.style.height = '30%';

    const poster = new Poster()
    poster.$elem.style.transition = 'opacity 1s';
    $div.append(
      poster.$elem, 
      slide.$elem,
    );
    this.poster = poster;
    this.$elem = $div;

    window.addEventListener('resize', debounce(()=>{
      if (!this.viewTypeMobile && window.innerWidth < VIEWSIZE.REACTWIDTH) {
         poster.$elem.style.display = 'none';
         slide.$elem.style.height = '100%';
         this.viewTypeMobile = true;
      }
      else if (this.viewTypeMobile && window.innerWidth > VIEWSIZE.REACTWIDTH) {
        poster.$elem.style.display = 'flex';
        slide.$elem.style.height = '30%';
        this.viewTypeMobile = false;
      }
    }), 200);
  }

  update(eventType){
    if (eventType === EVENT.LOAD) {
      this.poster.$elem.style.opacity = '0';
      setTimeout(() => {
        this.poster.update( window.model.data.horizontalInfo );
        this.poster.$img.onload = () => { this.poster.$elem.style.opacity = '1'; }
      }, 1000)
    }
  }
}

export default HorizontalPart;
