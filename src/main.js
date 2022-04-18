import HorizontalPart from './containers/horizontalPart.js';
import VerticalPart from './containers/verticalPart.js';
import COLOR from './constants/color.js'
import addClassStyle from '../lib/addClassStyle.js';
import itemFetch from '../modules/itemFetch.js';
import Image from './components/image.js';


class Main {
  constructor() {
    const horizontalPart = new HorizontalPart();
    const verticalPart = new VerticalPart();

    const $div = document.createElement('div');
    $div.style.height = '100%';
    $div.style.display = 'flex';
    addClassStyle($div, {flexDirection:'column'});
    const $leftDiv = document.createElement('div');
    const $rightDiv = document.createElement('div');

    addClassStyle(verticalPart.$elem, {width: '100%'});
    addClassStyle($leftDiv, {overflow: 'scroll', marginRight: '3%', marginLeft: '3%', borderBottom : `2px solid ${COLOR.MAIN}`, borderTop: `2px solid ${COLOR.MAIN}`});

    $leftDiv.style.width = '50%';
    $rightDiv.style.width = '47%';
    $rightDiv.style.borderRight = `2px solid ${COLOR.MAIN}`;
    $rightDiv.style.borderLeft = `2px solid ${COLOR.MAIN}`;

    const $header = document.createElement('div');
    const symbol = new Image('./asset/symbol.svg', '60%', '60%');
    addClassStyle(symbol.$elem, {padding: '2%', paddingBottom:'1%'});
    const $suchi = document.createElement('div');
    addClassStyle($suchi, {paddingBottom:'0.5rem', paddingRight:'2%', fontWeight: 'lighter', fontSize:'0.8rem'});
    const $headerLeft = document.createElement('div');
    addClassStyle($headerLeft, {height: '100%', width: '50%', display: 'flex', justifyContent: 'space-between', alignItems:'end'});
    $headerLeft.append(
      symbol.$elem,
      $suchi
    );
    $suchi.appendChild(document.createTextNode('수치 [suchi]'));
    addClassStyle($header, {height: '5%' ,marginRight: '3%', marginLeft: '3%'});
    $header.append(
      $headerLeft
    );

    const $footer = document.createElement('footer');
    addClassStyle($footer, {})

    const $contact = document.createElement('div');
    addClassStyle($contact, {writingMode: 'vertical-rl', fontSize: '0.2rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', width: '3%', fontWeight:'lighter'});
    const $email = document.createElement('span');
    $email.appendChild(document.createTextNode('email_2022suchi@gmail.com'))
    const $insta = document.createElement('span');
    $insta.appendChild(document.createTextNode('instagram_suchi.info'));
    const $address = document.createElement('p');
    $address.appendChild(document.createTextNode('address_서울특별시 성북구 보문로63 동원빌딩 5F'));
    $contact.append($email, $insta, $address);

    $leftDiv.append(verticalPart.$elem);
    $rightDiv.appendChild(horizontalPart.$elem);
    const $mainBody = document.createElement('div');
    $mainBody.append($leftDiv, $rightDiv, $contact);
    addClassStyle($mainBody, {height:'91%', display:'flex', flexDirection:'row', overflow:'scroll'});

    $div.append(
      $header,
      $mainBody
    );
  
    $div.style.height = `${window.innerHeight - window.innerWidth * 0.002 - 4 }px`;
    $div.style.margin = '0.1%';

    this.$elem = $div;

    window.addEventListener('click', (e) => {
      if (e.target.type === 'scroll'){
        itemFetch(e.target.exhibitionId, () => {
          horizontalPart.update();
          verticalPart.update() ;
        })
      } 
    });
  }
}

export default Main;
