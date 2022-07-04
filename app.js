import Main from './src/main.js';
import Model from './model.js';
import { STATE, EVENT } from './src/constants.js';

window.onload = async function(){
  window.initLayout = [];

  window.model = new Model();
  await window.model.initData();
  
  const main = new Main();
  main.update();

  document.body.append(
    main.$elem,
  );

  window.dispatchEvent(new Event('resize'));

  window.addEventListener('click', async(e) => {
    if (e.target.targetType === 'selectItem'){
      await window.model.updateSelectedItem(e.target.exhibitionId);
      main.update(EVENT.LOAD);
    } else if (e.target.targetType === 'logoOrSymbol') {
      window.model.updateModel(null, false);
      main.update(EVENT.LOAD);
    } else if (e.target.targetType === 'ticketSelect') {
      window.model.updateState(STATE.TICKETSIGN);
      main.update(EVENT.TICKETUI);
    } else if (e.target.targetType === 'signatureAdmit') {
      window.model.updateState(STATE.TICKETMODAL);
      main.update(EVENT.TICKETUI);
    } else if (e.target.targetType === 'signatureCancel') {
      window.model.updateState(STATE.DEFAULT);
      main.update(EVENT.TICKETUI);
    }
  });

  window.initLayout.forEach(func => func());
};