export default class TrainingCardComponent {
  constructor(word, translation) {
    this.word = word;
    this.translation = translation;
    this.root = document.createElement('div');
  }

  init() {
    this.root.classList = 'col-md-3 col-sm-6';

    const trainingCard = this.createHtmlCard(this.word, this.translation)

    this.root.insertAdjacentHTML('afterbegin', trainingCard);

    this.root.querySelector('.card').onclick = () => {
      const audio = this.root.querySelector('.audio');
      audio.src = `audio/${this.word}.mp3`;
      audio.play();
    };

    this.root.querySelector('.icon').onclick = (ev) => {
      this.root.querySelector('.flip-card-inner').classList.add('rotate');
      ev.stopPropagation();
    };

    this.root.querySelector('.flip-card-back').onmouseleave = () => {
      this.root.querySelector('.flip-card-inner').classList.remove('rotate');
    };
    return this.root;
  }

  createHtmlCard(word, translation) {
    return `<div class="card" id="${word}">    
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img class="card-img-top" src="images/${word}.jpeg" alt="${word}">
                                    <div class="card-body card-game">
                                        <p class="card-text">${word[0].toUpperCase() + word.slice(1)}</p>
                                        <span class="icon"></span>
                                    </div>
                                </div>
                                <div class="flip-card-back rotate">
                                    <img class="card-img-top" src="images/${word}.jpeg" alt="${word}">
                                    <div class="card-body card-game">
                                        <p class="card-text">${translation[0].toUpperCase() + translation.slice(1)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <audio class="audio"></audio>
                    </div>`;
  }

  changeCardContent(word, translation) {
    this.word = word;
    
    this.root.innerHTML = this.createHtmlCard(word, translation);
    this.root.querySelector('.card').onclick = () => {
      const audio = this.root.querySelector('.audio');
      audio.src = `audio/${this.word}.mp3`;
      audio.play();
    };

    this.root.querySelector('.icon').onclick = (ev) => {
      this.root.querySelector('.flip-card-inner').classList.add('rotate');
      ev.stopPropagation();
    };

    this.root.querySelector('.flip-card-back').onmouseleave = () => {
      this.root.querySelector('.flip-card-inner').classList.remove('rotate');
    };
  }

}
