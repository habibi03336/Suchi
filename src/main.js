import HorizontalPart from './containers/horizontalPart.js';
import VerticalPart from './containers/verticalPart.js';
import COLOR from './constants/color.js'
import addClassStyle from '../lib/addClassStyle.js';
import itemFetch from './modules/itemFetch.js';


class Main {
  constructor(imgsSrc, buttonImgSrc, buttonSize, verticalData) {
    const horizontalPart = new HorizontalPart(imgsSrc, buttonImgSrc, buttonSize);
    const verticalPart = new VerticalPart(...verticalData);

    const $div = document.createElement('div');
    $div.style.display = 'flex';
    addClassStyle($div, {flexDirection:'column'});
    const $leftDiv = document.createElement('div');
    const $rightDiv = document.createElement('div');

    addClassStyle(verticalPart.$elem, {width: '100%', borderTop: `2px solid ${COLOR.MAIN}`, borderBottom: `2px solid ${COLOR.MAIN}`});
    addClassStyle($leftDiv, {overflow: 'scroll', marginRight: '3%', marginLeft: '3%', borderBottom : `2px solid ${COLOR.MAIN}`});

    $rightDiv.style.width = '50%';
    $rightDiv.style.borderRight = `2px solid ${COLOR.MAIN}`;
    $rightDiv.style.borderLeft = `2px solid ${COLOR.MAIN}`;

    const $header = document.createElement('div');
    const $logo = document.createElement('img');
    const $suchi = document.createElement('div');
    $suchi.appendChild(document.createTextNode('수치 [suchi]'));
    addClassStyle($header, { marginRight: '3%', marginLeft: '3%'});
    $header.append(
      $suchi
    );

    const $contact = document.createElement('div');
    addClassStyle($contact, {writingMode: 'vertical-rl'});
    $contact.appendChild(document.createTextNode('asdfasdf'));

    $leftDiv.append(verticalPart.$elem);
    $rightDiv.appendChild(horizontalPart.$elem);
    const $mainBody = document.createElement('div');
    $mainBody.append($leftDiv, $rightDiv, $contact);
    addClassStyle($mainBody, {display:'flex', flexDirection:'row', overflow:'scroll'});

    $div.append(
      $header,
      $mainBody
    );

    $div.style.height = `${window.innerHeight - window.innerWidth * 0.002 - 4 }px`;
    $div.style.margin = '0.1%';

    // window.addEventListener('resize', this.resize.bind(this));
    this.$elem = $div;


    window.addEventListener('click', (e) => {
      if (e.target.type === 'scroll'){
        itemFetch(e.target.id, (data) => {
          horizontalPart.poster.update(data.imgSrc, data.description);
          verticalPart.essay.update(data.title, data.author, data.date, data.description) ;
        })
      } 
    });
  }

  // resize() {
  //   this.$elem.maxHeight = `${window.innerHeight - window.innerWidth * 0.07 - 4}px`;
  // }
}

export default Main;
