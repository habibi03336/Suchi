import addClassStyle from "../../lib/addClassStyle.js";

class Image {
  constructor(imgSrc, maxWidth, maxHeight) {
    const $img = document.createElement('img');
    $img.style.maxWidth = maxWidth;
    $img.style.maxHeight = maxHeight;
    addClassStyle($img, Image.imageStyle);
    $img.src = imgSrc;
    this.$elem = $img;
  }

  resize(width, height) {
    this.$elem.style.width = width;
    this.$elem.style.height = height;
  }

  static imageStyle = {
    width: 'auto',
    height: 'auto',
  };
}
export default Image;
