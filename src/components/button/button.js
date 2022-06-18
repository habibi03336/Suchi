import addClassStyle from "../../../lib/addClassStyle.js";

export default class Button{
    constructor(targetType, content, style){
        this.$elem = document.createElement('button');
        this.$elem.append(document.createTextNode(content));
        this.$elem.targetType = targetType;
        addClassStyle(this.$elem, style);
    }

    update(type){
        if (type === 'select'){
            addClassStyle(this.$elem, {backgroundColor: 'cyan'});
        } else if (type === 'noselect'){
            addClassStyle(this.$elem, {backgroundColor: 'gray'});
        }
    }
}

