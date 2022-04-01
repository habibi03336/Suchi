import COLOR from "../constants/color.js";
import addClassStyle from "../../lib/addClassStyle.js";
import Image from "./image.js";

class ImageScrollSlide {
    #centerX;
    #imgsCenterX;

    constructor($parentDiv, imgsSrc, imgMaxHeight = '100px', imgMaxWidth = '100px'){
        this.#imgsCenterX = [];
        this.$elem = document.createElement('div');
        const $centerLine  = document.createElement('hr');
        addClassStyle($centerLine, ImageScrollSlide.centerLineStyle);
       
        const $imgDiv = document.createElement('div'); 
        addClassStyle($imgDiv, ImageScrollSlide.imgDivStyle);
        
        $parentDiv.addEventListener('wheel', this.scrollHandler.bind(this));
        
        imgsSrc.forEach((src, idx) => {
            const image = new Image(src, imgMaxWidth, imgMaxHeight);
            addClassStyle(image.$elem, {paddingRight: '10%', paddingLeft: '10%', verticalAlign: 'bottom',});
            $imgDiv.appendChild(image.$elem);
        });
        
        const $inner = document.createElement('div');
        $inner.append($centerLine, $imgDiv);
        addClassStyle($inner, ImageScrollSlide.innerStyle);
        this.$elem.append(
            $inner
        );
        this.$imgDiv = $imgDiv;

        window.initLayout.push(this.initLayout.bind(this));
    }

    initLayout(){
        const firstImg = this.$imgDiv.children[0];
        firstImg.onload = () => {
            this.initalCenterX = (this.$imgDiv.offsetWidth-firstImg.offsetWidth)/2;
            this.#centerX = this.initalCenterX;
            firstImg.style.transform = 'scale(1.3, 1.3)';
            this.$imgDiv.style.transform = `translateX(${this.#centerX}px)`;
        }
    }

    scrollHandler(e){
        e.preventDefault();
        if (this.#imgsCenterX[0] === undefined){
            let startX = 0;
            [...this.$imgDiv.children].forEach($elem => {
                this.#imgsCenterX.push(startX + $elem.offsetWidth/2);
                startX = startX + $elem.offsetWidth
            });
        }
      
        this.#centerX += (e.deltaY + e.deltaX)/2;
        if (this.#centerX < this.initalCenterX){
            this.#centerX = this.initalCenterX
        } else if (this.#centerX >= this.#imgsCenterX[this.#imgsCenterX.length-1] + 100) {
            this.#centerX = this.#imgsCenterX[this.#imgsCenterX.length-1] + 100;
        }
        this.$imgDiv.style.transform = `translateX(${2*this.initalCenterX - this.#centerX}px)`;

        [...this.$imgDiv.children].forEach(($elem, idx) => {
            const offset = Math.abs(this.#centerX -  this.#imgsCenterX[idx]);
            if (offset < 200){
                const scaleSize = 1.4 - offset/500;
                $elem.style.transform = `scale(${scaleSize}, ${scaleSize})`
            }
        });
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

