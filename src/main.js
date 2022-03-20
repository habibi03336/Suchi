import HorizontalPart from './containers/horizontalPart.js';
import VerticalPart from './containers/verticalPart.js';

class Main {
  constructor(imgsSrc, buttonImgSrc, buttonSize, verticalData) {
    const horizontalPart = new HorizontalPart(imgsSrc, buttonImgSrc, buttonSize);
    const verticalPart = new VerticalPart(...verticalData);

    const $div = document.createElement('div');
    $div.style.display = 'flex';
    const $leftDiv = document.createElement('div');
    const $rightDiv = document.createElement('div');
    $leftDiv.style.width = '47%';
    $leftDiv.style.overflow = 'scroll';
    $leftDiv.style.marginRight = '3%';
    $leftDiv.style.borderTop = '2px solid gray';
    $leftDiv.style.borderBottom = '2px solid gray';
    //$leftDiv.style.borderRight = '2px solid gray';

    $rightDiv.style.width = '50%';
    $rightDiv.style.borderRight = '2px solid gray';
    $rightDiv.style.borderLeft = '2px solid gray';

    $leftDiv.appendChild(verticalPart.$elem);
    $rightDiv.appendChild(horizontalPart.$elem);
    $div.append(
      $leftDiv,
      $rightDiv,
    );

    $div.style.height = `${window.innerHeight - window.innerWidth * 0.062 - 4}px`;
    $div.style.padding = '3%';
    $div.style.border = '2px solid black';
    $div.style.margin = '0.1%';

    // window.addEventListener('resize', this.resize.bind(this));
    this.$elem = $div;
  }

  // resize() {
  //   this.$elem.maxHeight = `${window.innerHeight - window.innerWidth * 0.07 - 4}px`;
  // }
}

export default Main;
