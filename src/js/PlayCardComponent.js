export default class PlayCardComponent {
  constructor(id, word, tap, isPlaying, wasAnswered, currentStarsArray) {
    this.id = id;
    this.word = word;
    this.tap = tap;
    this.root = document.createElement('div');
    // state
    this.isPlaying = isPlaying;
    this.wasAnswered = wasAnswered;
    this.currentStarsArray = currentStarsArray;
  }

  draw() {
    this.root.classList = 'col-md-3 col-sm-6';

    const playingCard = `<div class="card" id="${this.word}">    
                                <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                            </div>
                    <audio class="audio"></audio>
                </div>`;

    this.root.insertAdjacentHTML('afterbegin', playingCard);

    if (this.wasAnswered) {
      this.root.querySelector('.card-img-top').classList.add('correct-card');
    }

    if (this.isPlaying && !this.wasAnswered) {
      this.root.querySelector('.card').onclick = () => {
        this.tap(this.id);
      };
    }

    return this.root;
  }

  playAudio() {
    const audio = this.root.querySelector('.audio');
    audio.src = `audio/${this.word}.mp3`;
    audio.play();
  }
}
