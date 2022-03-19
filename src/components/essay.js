class Essay {
  constructor(description) {
    const $div = document.createElement('div');
    this.$essay = document.createTextNode(description);
    $div.appendChild(this.$essay);
    $div.style.lineBreak = 'anywhere';
    $div.style.padding = '10%';
    this.$elem = $div;
  }

  changeDescription(description) {
    this.$essay.textContent = description;
  }
}

export default Essay;
