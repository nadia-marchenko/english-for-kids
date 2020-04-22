export default class StarLineComponent {
  constructor(answersArray) {
    this.root = document.createElement('div');
    // state
    this.answersArray = answersArray;
  }

  draw() {
    this.root.className = 'rating';
    let string = '';

    for (let i = 0; i < this.answersArray.length; i += 1) {
      if (this.answersArray[i]) {
        const stars = '<div class = "star"></div>';
        string += stars;
      } else {
        const stars = '<div class = "lose-star"></div>';
        string += stars;
      }
    }
    this.root.insertAdjacentHTML('beforeend', string);

    return this.root;
  }
}
