import Image from "../components/image.js";
import Essay from "../components/essay.js";
import COLOR from "../constants/color.js";
import addClassStyle from "../../lib/addClassStyle.js";

class VerticalPart {
  constructor() {
    const $div = document.createElement('div');
  
    const essay = new Essay(...VerticalPart.EssayViewModel());
    addClassStyle(essay.$elem, {padding: '10%', paddingTop: '5%', paddingBottom: '1%'});
    const imgsSrc = VerticalPart.ImgsViewModel();
    const $imageDiv = document.createElement('div');
    addClassStyle($imageDiv, {display:'flex', alignItems:'start' ,justifyContent:'space-around', flexWrap:'wrap', padding: '10%', paddingTop: '5%',});
    imgsSrc.forEach(src => {
      const image = new Image(src, '45%', '45%');
      addClassStyle(image.$elem, {padding:'2%'});
      $imageDiv.append(image.$elem);
    });

    $div.append(
      essay.$elem,
      $imageDiv,
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

  static ImgsViewModel(){
    const imgs = window.model.scrollImgs;
    return imgs
  }

  update(){
    this.essay.update(...VerticalPart.EssayViewModel());
  }
}

export default VerticalPart;
