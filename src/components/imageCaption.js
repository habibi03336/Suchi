import addClassStyle from "../../lib/addClassStyle.js";

class ImageCaption {
  constructor(title, description) {
    const $subDiv = document.createElement('div');
    this.$title = document.createTextNode(title);
    $subDiv.appendChild(this.$title);
    addClassStyle($subDiv, ImageCaption.titleStyle);
    const $subDiv2 = document.createElement('div');
    this.$description = document.createTextNode(description);
    $subDiv2.appendChild(this.$description);
    addClassStyle($subDiv2, ImageCaption.descriptStyle);
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

  static titleStyle = {
    paddingTop: '6%',
    paddingBottom: '4%',
    fontWeight: '800',
  };

  static descriptStyle = {
    paddingBottom: '4%',
    fontWeight: '400',
  };
}

export default ImageCaption;
