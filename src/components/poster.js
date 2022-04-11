import addClassStyle from "../../lib/addClassStyle.js";

class Poster {

    static defaultContent = {
        symbol: 'asset/symbol.svg',
        description: '수치를 알자, 수치수치수치'
    };

    constructor(){
        this.$elem = document.createElement('div');
        addClassStyle(this.$elem, {display:'flex', justifyContent:'center', alignItems:'center', height: '70%'});
        const $img = document.createElement('img');
        addClassStyle($img, {maxHeight: '80px'});
        $img.src = Poster.defaultContent.symbol;
        const $description = document.createElement('div');
        addClassStyle($description, {padding: '3%'});
        $description.appendChild(document.createTextNode(Poster.defaultContent.description));
        this.$img = $img;
        this.$description = $description;
        this.$elem.append(
            $img,
            $description
        )
    }

    update(imgSrc ,description){
        this.$img.src = imgSrc;
        this.$description.textContent = '';
        this.$description.appendChild(document.createTextNode(description));
    }
}   

export default Poster;