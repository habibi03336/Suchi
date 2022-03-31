import COLOR from "../constants/color.js";
import addClassStyle from "../../lib/addClassStyle.js";
import Image from "./image.js";

class ImageScrollSlide {
    constructor($parentDiv, imgsSrc, imgMaxHeight = '100px', imgMaxWidth = '100px'){
        this.$elem = document.createElement('div');
        this.translate = 0;
        const $centerLine  = document.createElement('hr');
        addClassStyle($centerLine, ImageScrollSlide.centerLineStyle);
       
        const $imgDiv = document.createElement('div'); 
        addClassStyle($imgDiv, ImageScrollSlide.imgDivStyle);
        
        $parentDiv.addEventListener('wheel', this.scrollHandler.bind(this));
        
        imgsSrc.forEach(src => {
            const image = new Image(src, imgMaxWidth, imgMaxHeight);
            addClassStyle(image.$elem, {marginRight: '2.5%', marginLeft: '2.5%', verticalAlign: 'bottom',});
            $imgDiv.appendChild(image.$elem);
        });
        
        const $inner = document.createElement('div');
        $inner.append($centerLine, $imgDiv);
        addClassStyle($inner, ImageScrollSlide.innerStyle);
        this.$elem.append(
            $inner
        );
        this.$imgDiv = $imgDiv;
    }

    scrollHandler(e){
        e.preventDefault();
        this.translate -= (e.deltaY + e.deltaX)/2;
        if (this.translate > 0){
            this.translate = 0;
        }
        this.$imgDiv.style.transform = `translateX(${this.translate}px)`;
    }

    static innerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginRight: '10%',
        marginLeft: '10%',
        width: '80%',
    }

    static imgDivStyle = {
        display: 'block',
        whiteSpace: 'nowrap',
    }

    static centerLineStyle = {
        position: 'absolute',
        margin: '0%',
        border: `1px solid ${COLOR.MAIN}`,
        width: '100%',
        zIndex: '-1',
    };
}

export default ImageScrollSlide;

