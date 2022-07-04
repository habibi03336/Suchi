import Essay from "../components/essay.js";
import addClassStyle from "../../lib/addClassStyle.js";
import { EVENT } from '../constants.js';

class VerticalPart {
  constructor($ticketUIDiv) {
    const $div = document.createElement('div');
    addClassStyle($div, {height: '100%', width:'100%', overflow:'scroll', transition: 'opacity 1s'});
    const essay = new Essay(window.model.data.verticalInfo);
    addClassStyle(essay.$elem, 
      {
        padding: '3%', 
        paddingTop: '5%', 
        paddingBottom: '1%',
      });

    $div.append(
      essay.$elem,
      $ticketUIDiv,
    );

    this.essay = essay;
    this.$elem = $div;
  }

  update(eventType){
    if (eventType === EVENT.LOAD){
      this.$elem.style.opacity = '0';
      setTimeout(() => {
        this.$elem.scrollTo(0, 0);
        this.essay.update(window.model.data.verticalInfo);
        this.$elem.style.opacity = '1';
      }, 1000)
    }
  }
}

export default VerticalPart;
