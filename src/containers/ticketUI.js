import { STATE  } from "../constants.js";
import addClassStyle from "../../lib/addClassStyle.js";
import Button from "../components/button/button.js";
import ButtonStyle from "../components/button/buttonStyle.js";
import SigniturePaper from "../components/signature-paper.js";
import Image from "../components/image.js";

export default class TicketUI {
  constructor(tickets){
    this.$elem = document.createElement('div');
    const $ticketButtonsDiv = document.createElement('div');
    addClassStyle($ticketButtonsDiv, {display: 'flex', justifyContent: 'flex-end', padding: '5% 10% 2% 10%'});
    this.ticketButtons = tickets.map(
      (elem)=> elem ? 
        new Button('ticketButton', '', ButtonStyle.ticket_avail) : 
        new Button('notAvail', '', ButtonStyle.ticket_unavail)
    )
    const $ticketButtons = this.ticketButtons.map((elem, idx) => {
      elem.$elem.idx = idx;
      return elem.$elem;
    });
    $ticketButtonsDiv.append(...$ticketButtons);
    
    this.ticketSelected = -1;

    const $selectButtonDiv = document.createElement('div');
    this.selectButton = new Button('ticketSelect', 'Select', ButtonStyle.ticket_select);
    $selectButtonDiv.append(this.selectButton.$elem);
    addClassStyle($selectButtonDiv, {display:'flex', justifyContent:'flex-end', padding: '1% 10% 2% 10%'});

    this.$elem.append(
      $ticketButtonsDiv,
      $selectButtonDiv,
    );

      
    $ticketButtonsDiv.addEventListener('click', (e)=>{
      if(e.target.targetType === 'ticketButton'){
        this.ticketButtons.forEach((element, idx) => {
          if (element.$elem.targetType === 'notAvail') return;

          if (e.target.idx === idx && idx !== this.ticketSelected) {
            element.update('select');
            this.ticketSelected = idx;
          } else {
            element.update('noselect');
            if (idx === this.ticketSelected) this.ticketSelected = -1;
          }
        });
        if (this.ticketSelected !== -1) addClassStyle(this.selectButton.$elem, {backgroundColor: 'cyan'});
        else addClassStyle(this.selectButton.$elem, {backgroundColor: 'white'});
      } 
    })
  }

  update(state){
    if (state === STATE.TICKETSIGN){
      console.log(STATE.SIGN);
      const $div = document.createElement('div');
      addClassStyle($div, {position: 'fixed', width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, right:0, bottom:0, backgroundColor: 'black', opacity:'0.3'});

      const signaturePaper = new SigniturePaper();
      addClassStyle(signaturePaper.$elem, {width: '100%', height: `${window.innerHeight/2}px`});
      const signatureDiv = document.createElement('div');
      const cancelButton = new Button('signatureCancel', 'Cancel');
      const admitButton = new Button('signatureAdmit', 'Admit');
      addClassStyle(signatureDiv, {position: 'fixed', width: '70%', bottom: `${window.innerHeight/4}px`, right: '15%', border:'2px solid black', backgroundColor: 'white', opacity:1});
      addClassStyle(cancelButton.$elem, {float: 'right', padding: '5px', border: '1px solid gray',margin: '3px', borderRadius: '3px', background: 'none'});
      addClassStyle(admitButton.$elem, {float: 'right', padding: '5px', border: '1px solid gray', margin: '3px', borderRadius: '3px', background: 'none'});
      signatureDiv.append( signaturePaper.$elem, cancelButton.$elem, admitButton.$elem );

      this.$modalElem = document.createElement('div');
      this.$modalElem.append($div, signatureDiv);
      document.body.append(this.$modalElem);
    } else if (state === STATE.TICKETMODAL){
      this.$modalElem.remove();
      
      addClassStyle(this.ticketButtons[this.ticketSelected].$elem, ButtonStyle.ticket_unavail);
      this.ticketButtons[this.ticketSelected].$elem.targetType = 'notAvail';
      this.ticketSelected = -1;
      addClassStyle(this.selectButton.$elem, {backgroundColor: 'white'})

      this.$modalElem = document.createElement('div');

      const $div = document.createElement('div');
      addClassStyle($div, {position: 'fixed', width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, right:0, bottom:0, backgroundColor: 'black', opacity:'0.3'});

      const $imgDiv = document.createElement('div');

      const cancelButton = new Button('signatureCancel', 'X');
      addClassStyle(cancelButton.$elem, { padding: 0, border: 'none', background: 'none'});
      $imgDiv.append(cancelButton.$elem);

      addClassStyle($imgDiv, {position: 'fixed', bottom: `${window.innerHeight/8}px`, height: `${window.innerHeight*6/8}px`,  width: '70%', left:'15%', border:'2px solid black', backgroundColor: 'white', display: 'flex', flexWrap:'wrap', flexDirection: 'row',  opacity:1, alignItems:'start', justifyContent:'space-around', overflow: 'scroll'});
      const { images } = window.model.data.verticalInfo;
      images.forEach(src => {
        const image = new Image(src, '80%', '80%', (e)=> e.target.style.opacity='1');
        addClassStyle(image.$elem, {padding:'2%', opacity: '0.1', transition: 'opacity 1s'});
        $imgDiv.append(image.$elem);
      });

      this.$modalElem.append($div, $imgDiv);
      document.body.append(this.$modalElem);
    } else if (state === STATE.DEFAULT){
      this.$modalElem.remove();
    }
  }
}
