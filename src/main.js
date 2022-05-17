import HorizontalPart from './containers/horizontalPart.js';
import VerticalPart from './containers/verticalPart.js';
import { COLOR, VIEWSIZE } from './constants.js'
import addClassStyle from '../lib/addClassStyle.js';
import Image from './components/image.js';
import { debounce } from '../lib/scrooge.js';


class Main {
  
  constructor(model) {
    this.viewTypeMobile = false;
    this.model = model;
    this.horizontalPart = new HorizontalPart();
    this.verticalPart = new VerticalPart();

    const $div = document.createElement('div');
    const $leftDiv = document.createElement('div');
    const $rightDiv = document.createElement('div');
    
    addClassStyle($div, {flexDirection:'column', display:'flex'});
    addClassStyle($leftDiv, {width: '50%', marginRight: '3%', marginLeft: '3%', borderBottom : `2px solid ${COLOR.MAIN}`, borderTop: `2px solid ${COLOR.MAIN}`});
    addClassStyle($rightDiv, {width:'47%', borderRight: `2px solid ${COLOR.MAIN}`, borderLeft: `2px solid ${COLOR.MAIN}`});

    const $header = document.createElement('div');
    const symbol = new Image('./src/asset/symbol.svg', '60%', '60%');
    addClassStyle(symbol.$elem, {padding: '2%', paddingBottom:'1%'});
    const $suchi = document.createElement('div');
    symbol.$elem.targetType = 'logoOrSymbol';
    $suchi.targetType = 'logoOrSymbol';
    addClassStyle($suchi, {paddingBottom:'0.5rem', paddingRight:'2%', fontWeight: 'lighter', fontSize:'0.8rem'});
    const $headerLeft = document.createElement('div');
    addClassStyle($headerLeft, {height: '100%', width: '50%', display: 'flex', justifyContent: 'space-between', alignItems:'flex-end'});
    $headerLeft.append(
      symbol.$elem,
      $suchi
    );
    $suchi.appendChild(document.createTextNode('수치 [suchi]'));
    addClassStyle($header, {height: '5%' ,marginRight: '3%', marginLeft: '3%'});
    $header.append(
      $headerLeft
    );

    const $contact = document.createElement('div');
    addClassStyle($contact, {writingMode: 'vertical-rl', fontSize: '0.2rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', width: '3%', fontWeight:'lighter'});
    const $email = document.createElement('p');
    $email.appendChild(document.createTextNode('email_2022suchi@gmail.com'))
    const $insta = document.createElement('p');
    $insta.appendChild(document.createTextNode('instagram_suchi.info'));
    const $address = document.createElement('p');
    $address.appendChild(document.createTextNode('address_서울특별시 성북구 보문로63 동원빌딩 5F'));
    $contact.append($email, $insta, $address);

    $leftDiv.append(this.verticalPart.$elem);
    $rightDiv.appendChild(this.horizontalPart.$elem);
    const $mainBody = document.createElement('div');
    $mainBody.append($leftDiv, $rightDiv, $contact);
    addClassStyle($mainBody, {height:'93%', display:'flex', flexDirection:'row', overflow:'scroll'});

    $div.append(
      $header,
      $mainBody
    );
  
    $div.style.height = `${window.innerHeight - window.innerWidth * 0.002 - 4 }px`;
    $div.style.margin = '0.1%';

    this.$elem = $div;

    window.addEventListener('resize', debounce(()=>{
      $div.style.height = `${window.innerHeight - window.innerWidth * 0.002 - 4 }px`;
      if (!this.viewTypeMobile && window.innerWidth < VIEWSIZE.REACTWIDTH) {
         addClassStyle($mainBody, {flexDirection:'column', marginRight : '3%'});
         addClassStyle($leftDiv, {height: '77%', width: '100%'});
         addClassStyle($rightDiv, {height: '20%', width: '100%'});
         addClassStyle($headerLeft, {width: '100%'});
         addClassStyle($contact, {writingMode: 'horizontal-tb', width: '100%', height: '3%'});
         this.viewTypeMobile = true;
      }
      else if (this.viewTypeMobile && window.innerWidth > VIEWSIZE.REACTWIDTH) {
        addClassStyle($mainBody, {flexDirection:'row',  marginRight : ''});
        addClassStyle($leftDiv, {height: '', width: '50%'});
        addClassStyle($rightDiv, {height: '', width: '47%'});
        addClassStyle($headerLeft, {width: '50%'});
        addClassStyle($contact, {writingMode: 'vertical-rl', width: '3%', height: ''});
        this.viewTypeMobile = false;
      }
    }, 400));
  }

  update(){
    this.horizontalPart.update();
    this.verticalPart.update() ;
  }
}

export default Main;
