import Image from "../components/image.js";
import Essay from "../components/essay.js";
import COLOR from "../constants/color.js";
import addClassStyle from "../../lib/addClassStyle.js";

class VerticalPart {
  constructor() {
    const $div = document.createElement('div');
  
    const essay = new Essay(...VerticalPart.EssayViewModel());
    // const $imageDiv = document.createElement('div');
    // data.src.forEach(src => {
    //   const image = new Image(src, '100%', '100%');
    //   $imageDiv.append(image.$elem);
    // });
    $div.append(
      essay.$elem,
      // $imageDiv,
    );
    this.essay = essay;
    this.$elem = $div;
  }

  static EssayViewModel(){
    const title = window.model.title;
    const author = window.model.author;
    const date = window.model.date;
    const description = window.model.description;

    return [title, author, date, description];
  }

  update(){
    this.essay.update(...VerticalPart.EssayViewModel());
  }
}

export default VerticalPart;
