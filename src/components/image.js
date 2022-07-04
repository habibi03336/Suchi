import addClassStyle from "../../lib/addClassStyle.js";

class Image {
  constructor(imgSrc, maxWidth, maxHeight, callback) {
    const $img = document.createElement('img');
    $img.src = imgSrc;
    $img.onload = callback;
    $img.style.maxWidth = maxWidth;
    $img.style.maxHeight = maxHeight;
    addClassStyle($img, Image.imageStyle);
    this.$elem = $img;
  }

  resize(width, height) {
    this.$elem.style.width = width;
    this.$elem.style.height = height;
  }

  static imageStyle = {
    display: 'inline-block',
    width: 'auto',
    height: 'auto',
  };
}
export default Image;
