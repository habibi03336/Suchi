import config from './config.js';
import { STATE } from './src/constants.js';

class Model {
    constructor(){
        this.data = {};
        this.constant = {};
        this.state = STATE.DEFAULT;
    }

    async initData(){
        const [_data, _constants] = await Promise.all([fetch(config.address.back + 'exhibitions'), fetch(config.address.back + 'scrollImgs')]);
        const [data, constant] = await Promise.all([_data.json(), _constants.json()]);
        this.constant.scrollImgsUrl = constant.map((elem) => [config.address.back + elem[0], elem[1]]);
        this.updateModel(data[0], false);
    }

    async getItem(itemId){
        const _data = await fetch(config.address.back + 'exhibitions/' + String(itemId));
        const data = await _data.json()
        this.updateModel(data, true);
    }

    async updateSelectedItem(itemId) {
        await this.getItem(itemId);
    }

    updateState(state){
        this.state = state;
    }

    updateModel(data, isSelected){
        if (isSelected){
            this.data = {
                verticalInfo: {
                    title : data.title,
                    artist : data.artist,
                    date : data.date,
                    description: data.description,
                    images : data.images.map((elem) => config.address.back + elem),
                },
                horizontalInfo: {
                    imgUrl: config.address.back + data.imgUrl,
                    title: data.title,
                    artist: data.artist,
                    띄어쓰기1: '',
                    curator: data.curator,
                    text: data.text,
                    date: data.date,
                    design: data.design,
                    time: data.time,
                    place: data.place,
                    organize: data.organize,
                    띄어쓰기2: '',
                    띄어쓰기3: '',
                    titleEng: data.titleEng,
                    artistEng: data.artistEng,
                    curatorEng: data.curatorEng,
                    textEng: data.textEng,
                    designEng: data.designEng,
                    dateEng: data.dateEng,
                    timeEng: data.timeEng,
                    placeEng: data.placeEng,
                    organizeEng: data.organizeEng
                }
            };
        } else if (data === null){
            this.data.horizontalInfo = null;
        } else{
            this.data.verticalInfo = {
                title: data.title,
                artist: data.artist,
                date: data.date,
                description: data.description,
                images: data.images.map((elem) => config.address.back + elem),
            };
            this.data.horizontalInfo = null;
        }
    }
}

export default Model;
