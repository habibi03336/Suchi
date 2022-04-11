import Main from './src/main.js';
import firstFetch from "./modules/firtshFetch.js";

window.onload = async function(){
  window.initLayout = [];

  window.model = await firstFetch();
  const main = new Main();
  document.body.append(
    main.$elem,
  );

  window.initLayout.forEach(func => func());
};
