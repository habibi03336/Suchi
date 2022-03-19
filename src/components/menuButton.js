import Image from './image.js';
import addClassStyle from '../../lib/addClassStyle.js';

class MenuButton extends Image {
  constructor(imgSrc) {
    super(imgSrc);
    addClassStyle(this.$elem, MenuButton.buttonStyle);
  }

  static buttonStyle = {
    display: 'inline-block',
    border: '5px solid gray',
  };
}

export default MenuButton;
