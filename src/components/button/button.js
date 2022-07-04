import addClassStyle from "../../../lib/addClassStyle.js";
import buttonStyle from "./buttonStyle.js";

export default class Button{
    constructor(targetType, content, style){
        this.$elem = document.createElement('button');
        this.$elem.append(document.createTextNode(content));
        this.$elem.targetType = targetType;
        style ? 
            addClassStyle(this.$elem, style) :  
            addClassStyle(this.$elem, buttonStyle.defaultButton);
    }

    update(type){
        if (type === 'select'){
            addClassStyle(this.$elem, {backgroundColor: 'cyan'});
        } else if (type === 'noselect'){
            addClassStyle(this.$elem, {backgroundColor: 'gray'});
        }
    }
}

