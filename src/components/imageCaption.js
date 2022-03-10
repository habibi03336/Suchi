class ImageCaption {
  constructor(title, description) {
    const $subDiv = document.createElement('div');
    this.$title = document.createTextNode(title);
    $subDiv.appendChild(this.$title);
    const $subDiv2 = document.createElement('div');
    this.$description = document.createTextNode(description);
    $subDiv2.appendChild(this.$description);
    this.$elem = document.createElement('div');
    this.$elem.appendChild($subDiv);
    this.$elem.appendChild($subDiv2);
  }

  changeTitle(title) {
    this.$title.textContent = title;
  }

  changeDescription(description) {
    this.$description.textContent = description;
  }
}

export default ImageCaption;
