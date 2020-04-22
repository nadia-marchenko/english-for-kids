import PlayCardComponent from './PlayCardComponent';
import PlayButtonComponent from './PlayButtonComponent';
import StarLineComponent from './StarLineComponent';

export default class PlayComponent {
  constructor(category, wordsAndTranslations) {
    this.category = category;
    this.wordsAndTranslations = wordsAndTranslations;
    this.root = document.createElement('main');
    this.cards = [];
    // state
    this.playStatus = 'NOT_STARTED'; // NOT_STARTED, PLAYING, FINISHED
    this.answersArray = [];
    this.questionsArray = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7]);
    this.currentQuestionIndex = 0;
  }

  draw() {
    this.delete();
    const wrapper = `<div class="wrapper main__wrapper">
                            <ol class="breadcrumb play-mode">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    ${this.category[0].toUpperCase() + this.category.slice(1)}
                                </li>
                            </ol>
                            <h1 class="titleCategory">${this.category[0].toUpperCase() + this.category.slice(1)}</h1>
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                            <audio class="audio"></audio>
                        </div>`;
    this.root.insertAdjacentHTML('beforeend', wrapper);

    this.cards = [];

    if (this.playStatus === 'NOT_STARTED' || this.playStatus === 'PLAYING') {
      const isPlaying = this.playStatus === 'PLAYING';
      for (let i = 0; i < this.wordsAndTranslations.length; i += 1) {
        const wasAnswered = this.questionsArray.indexOf(i) < this.currentQuestionIndex;
        const card = new PlayCardComponent(
          i,
          this.wordsAndTranslations[i].word,
          (id) => this.verifyAnswer(id),
          isPlaying,
          wasAnswered, this.currentStarsArray,
        );
        this.cards.push(card);
        this.root.querySelector('.row').append(card.draw());
      }

      const button = new PlayButtonComponent(
        () => this.startPlay(),
        () => this.playCurrentAudio(),
        isPlaying,
      );
      this.root.querySelector('.main__wrapper').append(button.draw());

      this.root.querySelector('.titleCategory').after(new StarLineComponent(this.answersArray).draw());

      if (this.playStatus === 'PLAYING'
                && (this.answersArray.length === 0
                    || this.answersArray[this.answersArray.length - 1] === 1)) {
        this.playCurrentAudio();
      }
    }

    if (this.playStatus === 'FINISHED') {
      const audio = this.root.querySelector('.audio');
      const mainWrapper = this.root.querySelector('.main__wrapper');
      if (this.answersArray.includes(0)) {
        const numWrongs = this.answersArray.filter((answer) => answer === 0).length;
        mainWrapper.insertAdjacentHTML('beforeend', `<h2>Numbers of wrong answers: ${numWrongs}</h2>`);

        const fail = `<div>
                            <img class = 'fail img-fluid' src = 'images/fail.jpeg'>
                        </div>`;
        audio.src = 'audio/fail.mp3';
        mainWrapper.insertAdjacentHTML('beforeend', fail);
      } else {
        const success = `<div>
                                <img class = 'success img-fluid' src = 'images/success.jpeg'>
                            </div>`;
        audio.src = 'audio/success.mp3';
        mainWrapper.insertAdjacentHTML('beforeend', success);
      }

      audio.play();
      setTimeout(() => {
        window.location.replace('/#/main');
      }, 5000);
    }

    return this.root;
  }

  startPlay() {
    this.playStatus = 'PLAYING';
    this.draw();
  }

  playCurrentAudio() {
    this.cards[this.questionsArray[this.currentQuestionIndex]].playAudio();
  }

  verifyAnswer(clickedCardId) {
    const audio = this.root.querySelector('.audio');
    if (clickedCardId === this.questionsArray[this.currentQuestionIndex]) {
      audio.src = 'audio/correct-answer.mp3';
      audio.play();
      setTimeout(() => {
        this.recordCorrectAnswer();
      }, 1200);
    } else {
      audio.src = 'audio/wrong-answer.mp3';
      audio.play();
      setTimeout(() => {
        this.recordWrongAnswer();
      }, 2000);
    }
  }

  recordCorrectAnswer() {
    this.playStatus = this.currentQuestionIndex === 7 ? 'FINISHED' : 'PLAYING';
    this.currentQuestionIndex += 1;
    this.answersArray.push(1);
    this.draw();
  }

  recordWrongAnswer() {
    this.answersArray.push(0);
    this.draw();
  }

  delete() {
    if (this.root.querySelector('.main__wrapper')) {
      this.root.querySelector('.main__wrapper').remove();
    }
  }

  shuffle(a) {
    const res = a;
    let j; let x; let i;
    for (i = a.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      x = res[i];
      res[i] = res[j];
      res[j] = x;
    }
    return res;
  }
}
