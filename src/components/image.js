class Image {
  constructor(imgSrc, width, height) {
    const $img = document.createElement('img');
    $img.style.width = width;
    $img.style.height = height;
    $img.src = imgSrc;
    this.$elem = $img;
  }

  resize(width, height) {
    this.$elem.style.width = width;
    this.$elem.style.height = height;
  }
}
export default Image;
