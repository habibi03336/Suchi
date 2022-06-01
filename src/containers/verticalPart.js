import Image from "../components/image.js";
import Essay from "../components/essay.js";
import addClassStyle from "../../lib/addClassStyle.js";

class VerticalPart {
  constructor() {
    const $div = document.createElement('div');
    addClassStyle($div, {height: '100%', width:'100%', overflow:'scroll', transition: 'opacity 1s'});
    const essay = new Essay(window.model.data.verticalInfo);
    addClassStyle(essay.$elem, 
      {
        padding: '3%', 
        paddingTop: '5%', 
        paddingBottom: '1%',
      });
    const { images } = window.model.data.verticalInfo;
    const $imageDiv = document.createElement('div');
    addClassStyle($imageDiv, {display:'flex', alignItems:'start' ,justifyContent:'space-around', flexWrap:'wrap', padding: '10%', paddingTop: '5%',});
    images.forEach(src => {
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

  update(){
    this.$elem.style.opacity = '0';
    setTimeout(() => {
      this.$elem.scrollTo(0, 0);
      this.essay.update(window.model.data.verticalInfo);
      this.$elem.style.opacity = '1';
    }, 1000)
  }
}

export default VerticalPart;
