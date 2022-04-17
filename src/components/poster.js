import addClassStyle from "../../lib/addClassStyle.js";
import Image from "./image.js";

class Poster {

    static defaultContent = {
        symbol: 'asset/symbol.svg',
        title : '내지름이 이루어지는 공간에 수치를 무릅쓴 사랑이 있다.',
        description: '수치는 지금은 말하기 싫지만 언젠가 말하고 싶은 싸가지 없는 진심을 유심한다. 부끄러움이 영원히 부끄러움으로 남기를 원하며, 고개들이 않는 자들에게 환대도 적대도 아닌 초대의 장소가 되기를 숙원한다.'
    };

    constructor(){
        this.$elem = document.createElement('div');
        addClassStyle(this.$elem, {display:'flex', justifyContent:'center', alignItems:'center', height: '70%',padding:'0 10% 0 10%'});
        const symbol = new Image(Poster.defaultContent.symbol, '18%', '18%');
        const $infoDiv = document.createElement('div');
        addClassStyle($infoDiv, {padding: '0 3% 0 10%', fontSize: '0.8rem', fontWeight:'lighter'});
        const $title = document.createElement('p');
        $title.appendChild(document.createTextNode(Poster.defaultContent.title));
        const $description = document.createElement('p');
        $description.appendChild(document.createTextNode(Poster.defaultContent.description));
        addClassStyle($description, {lineHeight:'1.5rem', marginTop:'1.2rem'})
        $infoDiv.append($title, $description);


        this.$img = symbol.$elem;
        this.$infoDiv = $infoDiv;
        this.$elem.append(
            symbol.$elem,
            $infoDiv
        )
    }

    update(imgSrc, title, author, planner, writer,design, date, place, time, holder){
        this.$img.src = imgSrc;
        this.$img.style.maxHeight = '50%';
        this.$img.style.maxWidth = '50%';
        this.$infoDiv.textContent = '';
        const $title = document.createElement('p');
        $title.appendChild(document.createTextNode('전시명| '+title));
        const $author = document.createElement('p');
        $author.appendChild(document.createTextNode('작가| '+author));
        const $planner = document.createElement('p');
        $planner.appendChild(document.createTextNode('기획| '+planner));
        const $writer = document.createElement('p');
        $writer.appendChild(document.createTextNode('글| '+writer));
        const $design = document.createElement('p');
        $design.appendChild(document.createTextNode('디자인| ' + design));
        const $date = document.createElement('p');
        $date.appendChild(document.createTextNode('날짜| ' + date));
        const $place = document.createElement('p');
        $place.appendChild(document.createTextNode('장소| ' +place));
        const $time = document.createElement('p');
        $time.appendChild(document.createTextNode('시간| ' +time));
        const $holder = document.createElement('p');
        $holder.appendChild(document.createTextNode('주최| ' +holder));

        this.$infoDiv.append(
            $title,
            $author,
            $planner,
            $writer,
            $design,
            $date,
            $place,
            $time,
            $holder
        );
    }
}   

export default Poster;