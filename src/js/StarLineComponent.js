export default class StarLineComponent {
  constructor() {
    this.root = document.createElement('div');
    // state
  }

  init() {
    this.root.className = 'rating';
    let string = '';

    this.root.insertAdjacentHTML('beforeend', string);

    return this.root;
  }

  hide() {
    this.root.classList.add('hidden');
  }

  show() {
    this.root.classList.remove('hidden');
  }

  delete() {
    this.root.innerHTML = '';
  }

  recordWrongAnswer() {
    const stars = '<div class = "lose-star"></div>';
    this.root.insertAdjacentHTML('beforeend', stars);
  }
  recordCorrectAnswer() {
    const stars = '<div class = "star"></div>';
    this.root.insertAdjacentHTML('beforeend', stars);
  }

}
