import Image from "../components/image.js";
import Essay from "../components/essay.js";
import COLOR from "../constants/color.js";
import addClassStyle from "../../lib/addClassStyle.js";

class VerticalPart {
  constructor(title, author, date, description, imgsSrc) {
    const $div = document.createElement('div');

    const essay = new Essay(title, author, date, description);
    const $imageDiv = document.createElement('div');
    imgsSrc.forEach(src => {
      const image = new Image(src, '100%', '100%');
      $imageDiv.append(image.$elem);
    });
    $div.append(
      essay.$elem,
      $imageDiv,
    );
    this.essay = essay;
    this.$elem = $div;
  }
}

export default VerticalPart;
