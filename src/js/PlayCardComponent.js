export default class PlayCardComponent {
  constructor(id, word, tap, isPlaying, wasAnswered, currentStarsArray) {
    this.id = id;
    this.word = word;
    this.tap = tap;
    this.root = document.createElement('div');
    // state
    //this.isPlaying = isPlaying;
    this.wasAnswered = wasAnswered;
    this.currentStarsArray = currentStarsArray;
  }

  draw() {
    this.root.classList = 'col-md-3 col-sm-6';

    const playingCard = this.createHtmlCard(this.word);

    this.root.insertAdjacentHTML('afterbegin', playingCard);

    return this.root;
  }

  playAudio() {
    const audio = this.root.querySelector('.audio');
    audio.src = `audio/${this.word}.mp3`;
    audio.play();
  }

  createHtmlCard(word) {
    return `<div class="card" id="${word}">    
              <img class="card-img-top" src="images/${word}.jpeg" alt="${word}">
              <audio class="audio"></audio>`;
  }

  changeCardContent(word) {
    this.root.innerHTML = this.createHtmlCard(word);
    this.word = word;
  }

  hide() {
    this.root.classList.add('hidden');
  }

  show() {
    this.root.classList.remove('hidden');
  }

  startPlay() {
    this.root.querySelector('.card').onclick = () => {
      this.tap(this.id);
    };
  }

  recordCorrectAnswer() {
    this.root.querySelector('.card-img-top').classList.add('correct-card');
    this.root.querySelector('.card').onclick = () => {
      return false;
    };
  }

}
