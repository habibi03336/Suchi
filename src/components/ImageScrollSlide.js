import COLOR from "../constants/color.js";
import addClassStyle from "../../lib/addClassStyle.js";
import { debounce } from "../../lib/scrooge.js";
import Image from "./image.js";

class ImageScrollSlide {
    #pivotX;
    #imgsCenterX;

    constructor($parentDiv, imgsSrc, ids){
        this.#imgsCenterX = [];
        this.$elem = document.createElement('div');
        const $centerLine  = document.createElement('hr');
        addClassStyle($centerLine, ImageScrollSlide.centerLineStyle);
       
        const $imgDiv = document.createElement('div'); 
        addClassStyle($imgDiv, ImageScrollSlide.imgDivStyle);
        $parentDiv.addEventListener('wheel', this.scrollHandler.bind(this));

        imgsSrc.forEach((elem, idx) => {
            const src = elem[0];
            const id = elem[1];
            const image = new Image(src, '25%', '25%');
            addClassStyle(image.$elem, {paddingRight: '5%', paddingLeft: '5%', verticalAlign: 'bottom',});
            image.$elem.targetType = 'selectItem';
            image.$elem.orderIdx = idx;
            image.$elem.exhibitionId = id;
            $imgDiv.appendChild(image.$elem);
        });
        
        const $inner = document.createElement('div');
        $inner.append(
            $centerLine, 
            $imgDiv);
        addClassStyle($inner, ImageScrollSlide.innerStyle);
        this.$elem.append(
            $inner
        );
        this.$imgDiv = $imgDiv;

        window.initLayout.push(this.initLayout.bind(this));

        this.$imgDiv.addEventListener('click', (e) => {
            if (e.target.targetType === 'selectItem'){
                this.$imgDiv.style.transition = 'transform 0.3s';
                this.$imgDiv.className = 'imageScrollSlideDiv';
                this.#pivotX = this.#imgsCenterX[e.target.orderIdx];
                this.translateX = 
                    this.$imgDiv.offsetWidth/2 -
                    this.#imgsCenterX[e.target.orderIdx];
                this.makeAnimation();
            }
        });

        window.addEventListener('resize', debounce(()=>{    
            this.#imgsCenterX = [];
            this.initLayout();
        }, 500));

    }

    initLayout(){
        let isLoaded = true;
        [...this.$imgDiv.children].forEach(($img) => {
            if ($img.complete === false) isLoaded = false;
        })
        if (isLoaded === false){
            setTimeout(this.initLayout.bind(this), 10)
            return;
        }
        const $firstImg = this.$imgDiv.children[0];
        this.translateX = (this.$imgDiv.offsetWidth-$firstImg.offsetWidth)/2;
        this.#pivotX = $firstImg.offsetWidth/2;
        const dummyEvent = {preventDefault: function(){}, deltaX:0, deltaY:0};
        this.scrollHandler(dummyEvent);
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
        
        this.$imgDiv.style.transition = 'transform 0s';
        this.translateX -= (e.deltaY + e.deltaX)/2;
        this.#pivotX += (e.deltaY + e.deltaX)/2;
        if (this.#pivotX < this.#imgsCenterX[0]){
            this.#pivotX = this.#imgsCenterX[0];
            this.translateX = (this.$imgDiv.offsetWidth - this.$imgDiv.children[0].offsetWidth)/2;
        } else if (this.#pivotX >= this.#imgsCenterX[this.#imgsCenterX.length-1]) {
            this.#pivotX = this.#imgsCenterX[this.#imgsCenterX.length-1];
            this.translateX = 
                this.$imgDiv.offsetWidth/2 -
                this.#imgsCenterX[this.#imgsCenterX.length-1];
        }
        this.makeAnimation();
    }

    makeAnimation(){
        this.$imgDiv.style.transform = `translateX(${this.translateX}px)`;
        [...this.$imgDiv.children].forEach(($elem, idx) => {
            const offset = Math.abs(this.#pivotX -  this.#imgsCenterX[idx]);
            let scaleSize = 1;
            if (offset < 150){
                scaleSize = 2 - offset/150;
            }
            $elem.style.zIndex = Math.ceil((1 - scaleSize) * 100);
            $elem.style.transform = `scale(${scaleSize}, ${scaleSize})`
        });
    }

    static innerStyle = {
        height: '100%',
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
        display: 'flex',
        whiteSpace: 'nowrap',
        alignItems: 'center',
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

