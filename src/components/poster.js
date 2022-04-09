import addClassStyle from "../../lib/addClassStyle.js";

class Poster {
    constructor(imgSrc, description){
        this.$elem = document.createElement('div');
        addClassStyle(this.$elem, {display:'flex', justifyContent:'center', alignItems:'center', height: '70%'});
        const $img = document.createElement('img');
        addClassStyle($img, {maxHeight: '80px'});
        $img.src = imgSrc;
        const $description = document.createElement('div');
        addClassStyle($description, {padding: '3%'});
        $description.appendChild(document.createTextNode(description));
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