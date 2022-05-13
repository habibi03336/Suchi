import addClassStyle from "../../lib/addClassStyle.js";

class Essay {
  constructor({ title, artist, date, description }) {
    const $div = document.createElement('div');
    this.$title = document.createElement('h1');
    addClassStyle(this.$title, {marginBottom:'3%'});
    this.$title.append(document.createTextNode(title));
    this.$artist = document.createElement('h4');
    addClassStyle(this.$artist, {marginTop:'0%'});
    this.$artist.append(document.createTextNode(artist));
    this.$date = document.createElement('h4');
    this.$date.append(document.createTextNode(date));
    this.$description = document.createElement('p');
    this.$description.append(document.createTextNode(description));
    addClassStyle(this.$description, {marginTop: '3rem',lineHeight: '1.8rem', fontWeight:'lighter', fontSize:'0.9rem'});
    $div.append(
      this.$title,
      this.$artist,
      this.$date,
      this.$description,
    );
    $div.style.lineBreak = 'anywhere';
    this.$elem = $div;
  }

  update({ title, artist, date, description }) {
    this.$title.textContent = '';
    this.$artist.textContent = '';
    this.$date.textContent = '';
    this.$description.textContent = '';

    this.$title.append(document.createTextNode(title));
    this.$artist.append(document.createTextNode(artist));
    this.$date.append(document.createTextNode(date));
    this.$description.append(document.createTextNode(description));
  }
}

export default Essay;
