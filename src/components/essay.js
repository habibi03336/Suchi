class Essay {
  constructor(title, author, date, description) {
    const $div = document.createElement('div');
    this.$title = document.createElement('div')
    this.$title.append(document.createTextNode(title));
    this.$author = document.createElement('div');
    this.$author.append(document.createTextNode(author));
    this.$date = document.createElement('div');
    this.$date.append(document.createTextNode(date));
    this.$description = document.createElement('div');
    this.$description.append(document.createTextNode(description));
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
