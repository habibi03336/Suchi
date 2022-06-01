import addClassStyle from "../../lib/addClassStyle.js";
import Image from "./image.js";

class Poster {

    static defaultContent = {
        symbol: '/src/asset/symbol.svg',
        title : '내지름이 이루어지는 공간에 수치를 무릅쓴 사랑이 있다.',
        description: '수치는 지금은 말하기 싫지만 언젠가 말하고 싶은 싸가지 없는 진심을 유심한다. 부끄러움이 영원히 부끄러움으로 남기를 원하며, 고개들이 않는 자들에게 환대도 적대도 아닌 초대의 장소가 되기를 숙원한다.'
    };

    constructor(){
        this.$elem = document.createElement('poster');
        addClassStyle(this.$elem, 
            {display:'flex', 
            justifyContent:'center', 
            alignItems:'center', 
            height: '70%',
            padding:'0 10% 0 10%'
        });
        const symbol = new Image(Poster.defaultContent.symbol, '18%', '18%');
        const $infoDiv = document.createElement('div');
        addClassStyle($infoDiv, {padding: '0 0 0 7%', fontSize: '0.6rem', fontWeight:'lighter'});
        const $title = document.createElement('p');
        $title.appendChild(document.createTextNode(Poster.defaultContent.title));
        const $description = document.createElement('p');
        $description.appendChild(document.createTextNode(Poster.defaultContent.description));
        addClassStyle($description, {lineHeight:'1rem', marginTop:'1.2rem'})
        $infoDiv.append($title, $description);


        this.$img = symbol.$elem;
        this.$infoDiv = $infoDiv;
        this.$elem.append(
            symbol.$elem,
            $infoDiv
        )
    }

    update(posterInfos){
        if (posterInfos === null) {
            this.$img.src = Poster.defaultContent.symbol;
            this.$img.style.maxHeight = '18%';
            this.$img.style.maxWidth = '18%';
            this.$infoDiv.textContent = '';
            const $title = document.createElement('p');
            $title.appendChild(document.createTextNode(Poster.defaultContent.title));
            addClassStyle($title, {marginTop: "5px", marginBottom: "5px"})
            const $description = document.createElement('p');
            $description.appendChild(document.createTextNode(Poster.defaultContent.description));
            addClassStyle($description, {lineHeight:'1rem', marginTop: "5px", marginBottom: "5px"})
            this.$infoDiv.append($title, $description);
            return;
        }
        this.$img.src = posterInfos.imgUrl;
        this.$img.style.maxHeight = '70%';
        this.$img.style.maxWidth = '70%';
        this.$infoDiv.textContent = '';
        const infoList = [];
        Object.entries(posterInfos).forEach(([key, value]) => {
            if (key.slice(0, 4) === '띄어쓰기' || Poster.infoNameTable[key] === '띄어쓰기'){
                infoList.push(document.createElement('br'));
            } else {
                infoList.push(this.posterLinegenerator(Poster.infoNameTable[key], value))
            }
        });

        this.$infoDiv.append(...infoList);
    }

    posterLinegenerator(name, data){
        const $p = document.createElement('div');
        $p.appendChild(document.createTextNode(name+'| '+data));
        return $p
    }


    static infoNameTable = {
        imgUrl: '띄어쓰기',
        title: '제목',
        artist: '작가',
        curator: '기획',
        text: '글',
        design: '디자인',
        date: '날짜',
        place: '장소',
        time: '시간',
        organize: '주최',
        titleEng: 'Title',
        artistEng: 'Artists',
        curatorEng: 'Curators',
        textEng: 'Text',
        designEng: 'Design',
        dateEng: 'Dates',
        placeEng: 'Site',
        timeEng: 'Hours',
        organizeEng: 'Organized by'
    };
}   

export default Poster;