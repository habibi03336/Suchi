import Slide from '../components/slide/slide.js';
import MenuButton from '../components/menuButton.js';

class HorizontalPart {
  constructor(imgsSrc, menuButtonImgSrc, menuButtonsize) {
    const $div = document.createElement('div');
    $div.style.height = '100%';
    $div.style.userSelect = 'none';

    const menuButton = new MenuButton(menuButtonImgSrc);
    const $topInnerDiv = document.createElement('div');
    $topInnerDiv.style.display = 'flex';
    $topInnerDiv.style.justifyContent = 'center';
    $topInnerDiv.style.gap = '50%';
    $topInnerDiv.style.alignItems = 'center';
    $topInnerDiv.style.height = '22%';
    menuButton.$elem.style.width = menuButtonsize;
    menuButton.$elem.style.height = menuButtonsize;
    const $logo = document.createElement('img');
    $logo.src = '../../asset/logo.svg';
    $logo.style.width = '10%';
    $topInnerDiv.append($logo, menuButton.$elem);

    const slide = new Slide(imgsSrc);
    slide.$elem.style.maxWidth = '100%';
    slide.$elem.style.height = '74%';

    const $footerDiv = document.createElement('footer');
    $footerDiv.style.height = '4%';
    $footerDiv.style.display = 'flex';
    $footerDiv.style.justifyContent = 'center';
    $footerDiv.style.alignItems = 'end';
    $footerDiv.style.gap = '5%';
    $footerDiv.style.fontSize = '14px';
    const $email = document.createElement('div');
    $email.textContent = 'email_2022suchi@gmail.com';
    const $insta = document.createElement('div');
    $insta.textContent = 'instagram_suchi.info';
    const $address = document.createElement('div');
    $address.textContent = 'address_서울특별시 성북구 보문로 63 동원빌딩 5F';
    $footerDiv.append(
      $email,
      $insta,
      $address,
    );

    $div.append(
      $topInnerDiv,
      slide.$elem,
      $footerDiv,
    );

    this.$elem = $div;
  }
}

export default HorizontalPart;
