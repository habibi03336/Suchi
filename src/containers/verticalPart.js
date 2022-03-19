import Image from "../components/image.js";
import ImageCaption from "../components/imageCaption.js";
import Essay from "../components/essay.js";
import addClassStyle from "../../lib/addClassStyle.js";

class VerticalPart {
  constructor(imgSrc, title, date, description) {
    const $div = document.createElement('div');
    $div.style.paddingTop = '15%';
    const image = new Image(imgSrc, '100%', '100%');
    const imageCaption = new ImageCaption(title, date);
    const $innerDiv = document.createElement('div');
    $innerDiv.append(image.$elem, imageCaption.$elem);
    addClassStyle($innerDiv, { margin: 'auto', width: '42%'});
    const essay = new Essay(description);
    $div.append(
      $innerDiv,
      essay.$elem,
    );

    this.$elem = $div;
  }
}

export default VerticalPart;
