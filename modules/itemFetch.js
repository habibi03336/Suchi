import config from '../config.js'

function itemFetch(id, callback){
    fetch(config.address.back + 'exhibitions/' + String(id))
    .then(res => res.json())
    .then(data => {
        Object.keys(data).forEach((key) => {
            let newValue = data[key];
            if (key === 'poster'){
                newValue = config.address.back + newValue
            } else if (key === 'imgSrc'){
                for (let i = 0; i < newValue.length; i ++){
                    newValue[i] = config.address.back + newValue[i];
                }
            }
            window.model[key] = newValue;
        });
        callback()
    })
}

export default itemFetch;
