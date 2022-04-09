import config from '../config.js'

function itemFetch(id, callback){
    fetch(config.address.back + 'exhibitions/' + String(id))
    .then(res => res.json())
    .then(data => {
        data.imgSrc = config.address.back + 'img/' + data.imgSrc + '.png';
        callback(data)
    })
}

export default itemFetch;
