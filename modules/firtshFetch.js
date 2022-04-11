import config from '../config.js'

async function firstFetch(){
    const response = await fetch(config.address.back + 'exhibitions/1');
    const json = await response.json()
    const response2 = await fetch(config.address.back + 'scrollImgs');
    json['scrollImgs'] = await response2.json();


    for(let i = 0; i < json['imgSrc'].length; i++){
      json['imgSrc'][i] = config.address.back + json['imgSrc'][i];
    }

    json['poster'] = config.address.back + json['poster'];

    for(let i = 0; i < json['scrollImgs'].length; i++){
      json['scrollImgs'][i] = config.address.back + json['scrollImgs'][i];
    }

    return json;
}

export default firstFetch;
