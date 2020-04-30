import Helper from "./Helper";

export default class TrainingCardComponent {
  constructor(word, translation) {
    this.word = word;
    this.translation = translation;
    this.root = document.createElement('div');
  }

  init() {
    this.root.classList = 'col-md-3 col-sm-6';

    const trainingCard = `<div class="card">    
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                                        <div class="card-body card-game">
                                            <p class="card-text text-front">${Helper.createPageName(this.word)}</p>
                                            <span class="icon"></span>
                                        </div>
                                    </div>
                                    <div class="flip-card-back rotate">
                                        <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                                        <div class="card-body card-game">
                                            <p class="card-text text-back">${Helper.createPageName(this.translation)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <audio class="audio"></audio>
                          </div>`;

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

  changeCardContent(word, translation) {
    this.word = word;
    this.translation = translation;

    this.root.querySelectorAll('.card-img-top').forEach(img => img.src = `images/${word}.jpeg`);
    this.root.querySelectorAll('.card-img-top').forEach(img => img.setAttribute('alt', word));
    this.root.querySelector('.text-front').innerHTML = Helper.createPageName(word);
    this.root.querySelector('.text-back').innerHTML = Helper.createPageName(translation);
  }

}
