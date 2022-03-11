class Image {
  constructor(imgSrc) {
    const $img = document.createElement('img');
    $img.style.maxWidth = '100%';
    $img.src = imgSrc;
    this.$elem = $img;
  }

  resize(width, height) {
    this.$elem.style.width = width;
    this.$elem.style.height = height;
  }
}
export default Image;
