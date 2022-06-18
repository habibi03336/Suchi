import { STATE  } from "../constants.js";
import addClassStyle from "../../lib/addClassStyle.js";
import Button from "./button/button.js";
import ButtonStyle from "./button/buttonStyle.js";
import SigniturePaper from "./signature-paper.js";

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
        else addClassStyle(this.selectButton.$elem, {backgroundColor: 'gray'});
      }
    })
  }

  update(state){
    if (state === STATE.SIGN){
      const $div = document.createElement('div');
      addClassStyle($div, {position: 'fixed', width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, right:0, bottom:0, backgroundColor: 'black', opacity:'0.3'});
      const signaturePaper = new SigniturePaper();
      addClassStyle(signaturePaper.$elem, {position: 'fixed', width: '50%', height: `${window.innerHeight/2}px` , bottom: `${window.innerHeight/4}px`, right: '25%', border:'2px solid black', backgroundColor: 'white', opacity:1});

      document.body.append($div, signaturePaper.$elem);
    } else if (state === STATE.MODAL){

    } else if (state === STATE.CLOSE){

    }
  }
}
