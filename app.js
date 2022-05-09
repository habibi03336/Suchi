import Main from './src/main.js';
import Model from './model.js';

window.onload = async function(){
  window.initLayout = [];

  window.model = new Model();
  await window.model.initData();

  const main = new Main();
  main.update();

  document.body.append(
    main.$elem,
  );

  window.addEventListener('click', async(e) => {
    if (e.target.targetType === 'selectItem'){
      await window.model.updateSelectedItem(e.target.exhibitionId);
      console.log(window.model);
      main.update();
    } 
  });

  window.initLayout.forEach(func => func());
};