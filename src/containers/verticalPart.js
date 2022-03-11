import Image from "../components/image.js";
import ImageCaption from "../components/imageCaption.js";
import Essay from "../components/essay.js";
import addClassStyle from "../../lib/addClassStyle.js";

class VerticalPart {
  constructor(imgSrc, title, date, description) {
    const $div = document.createElement('div');
    addClassStyle($div, VerticalPart.containerStyle);
    const image = new Image(imgSrc);
    const imageCaption = new ImageCaption(title, date);
    const $innerDiv = document.createElement('div');
    $innerDiv.append(image.$elem, imageCaption.$elem);
    addClassStyle($innerDiv, { margin: 'auto', width: '60%' });
    const essay = new Essay(description);
    addClassStyle(essay.$elem, { marginTop: '9%', marginBottom: '5%' });
    $div.append(
      $innerDiv,
      essay.$elem,
    );

    this.$elem = $div;
  }

  static containerStyle = {
    width: '80%',
    padding: '5%',
    paddingTop: '15%',
    borderTop: '2px solid gray',
    borderBottom: '2px solid gray',
  };
}

export default VerticalPart;
