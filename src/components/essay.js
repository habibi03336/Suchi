import addClassStyle from "../../lib/addClassStyle.js";

class Essay {
  constructor(title, author, date, description) {
    const $div = document.createElement('div');
    this.$title = document.createElement('h1');
    addClassStyle(this.$title, {marginBottom:'3%'});
    this.$title.append(document.createTextNode(title));
    this.$author = document.createElement('h4');
    addClassStyle(this.$author, {marginTop:'0%'});
    this.$author.append(document.createTextNode(author));
    this.$date = document.createElement('h4');
    this.$date.append(document.createTextNode(date));
    this.$description = document.createElement('p');
    this.$description.append(document.createTextNode(description));
    addClassStyle(this.$description, {marginTop: '3rem',lineHeight: '1.8rem', fontWeight:'lighter', fontSize:'0.9rem'});
    $div.append(
      this.$title,
      this.$author,
      this.$date,
      this.$description,
    );
    $div.style.lineBreak = 'anywhere';
    this.$elem = $div;
  }

  update(title, author, date, description) {
    this.$title.textContent = '';
    this.$author.textContent = '';
    this.$date.textContent = '';
    this.$description.textContent = '';

    this.$title.append(document.createTextNode(title));
    this.$author.append(document.createTextNode(author));
    this.$date.append(document.createTextNode(date));
    this.$description.append(document.createTextNode(description));
  }
}

export default Essay;
