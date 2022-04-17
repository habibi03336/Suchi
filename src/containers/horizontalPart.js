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
    //title, author, planner, writer,design, date, place, time, holder
    const imgSrc = window.model.poster;
    const title = window.model.title;
    const author = window.model.author;
    const planner = '주아명, 임재균';
    const writer = '주아명';
    const design = '곽나현, 이재석';
    const date = window.model.date;
    const place = '수치, 서울특별시 성북구 보문로 63 5층 503';
    const time = '11am ~ 6pm';
    const holder = '수치';
    return [imgSrc, title, author, planner, writer, design, date, place, time, holder];
  }

  update(){
    console.log('update');
    this.poster.update(...HorizontalPart.posterViewModel());
  }
}

export default HorizontalPart;
