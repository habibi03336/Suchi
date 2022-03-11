class Essay {
  constructor(description) {
    const $div = document.createElement('div');
    this.$essay = document.createTextNode(description);
    $div.appendChild(this.$essay);
    $div.style.lineBreak = 'anywhere';
    this.$elem = $div;
  }

  changeDescription(description) {
    this.$essay.textContent = description;
  }
}

export default Essay;
