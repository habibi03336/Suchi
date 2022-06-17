import { STATE  } from "../constants.js";
import addClassStyle from "../../lib/addClassStyle.js";
import Button from "./button/button.js";
import ButtonStyle from "./button/buttonStyle.js";

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

    $ticketButtonsDiv.addEventListener('click', (e)=>{
      if(e.target.eventType === 'ticketButton'){
        this.ticketButtons.forEach((element, idx) => {
          if (element.$elem.eventType === 'notAvail') return;

          if (e.target.idx === idx && idx !== this.ticketSelected) {
            element.update('select');
            this.ticketSelected = idx;
          } else {
            element.update('noselect');
            if (idx === this.ticketSelected) this.ticketSelected = -1;
          }
        });
      }
    })
    
    const $selectButtonDiv = document.createElement('div');
    this.selectButton = new Button('ticketSelect', 'Select', ButtonStyle.ticket_select);
    $selectButtonDiv.append(this.selectButton.$elem);
    addClassStyle($selectButtonDiv, {display:'flex', justifyContent:'flex-end', padding: '1% 10% 2% 10%'});

    this.$elem.append(
      $ticketButtonsDiv,
      $selectButtonDiv,
    );
  }

  update(state){
    if (state === STATE.SIGN){
      this.$elem.innerHTML = '';
      const $div = document.createElement('div');
      addClassStyle($div, {position: 'fixed', width: '50%', bottom: `${window.innerHeight/2}px`, right: '25%', border:'2px solid black'});
      $div.append(document.createTextNode('hello'));
      this.$elem.append($div);
    } else if (state === STATE.MODAL){

    } else if (state === STATE.CLOSE){

    }
  }
}
