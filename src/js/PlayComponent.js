import PlayCardComponent from './PlayCardComponent';
import PlayButtonComponent from './PlayButtonComponent';
import StarLineComponent from './StarLineComponent';
import Helper from './Helper';
import * as CATEGORIES from '../Category.json';

export default class PlayComponent {
  constructor() {
    this.category = undefined;
    this.root = document.createElement('main');
    this.cardsNumbers = 8;
    this.data = CATEGORIES;
    // components
    this.cards = [];
    this.stars = new StarLineComponent();
    this.button = new PlayButtonComponent(
      () => this.startPlay(),
      () => this.playCurrentAudio(),
    );
    // state
    this.answersArray = [];
    this.questionsArray = Helper.shuffle([0, 1, 2, 3, 4, 5, 6, 7]);
    this.currentQuestionIndex = 0;
  }

  init(category) {
    const wordsAndTranslations = this.data.default[category];
    this.category = category;

    const wrapper = `<div class="wrapper main__wrapper">
                            <ol class="breadcrumb play-mode">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    ${Helper.createPageName(this.category)}
                                </li>
                            </ol>
                            <h1 class="titleCategory">${Helper.createPageName(this.category)}</h1>
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                            <audio class="audio"></audio>
                        </div>`;
    this.root.insertAdjacentHTML('beforeend', wrapper);

    this.cards = [];

    for (let i = 0; i < wordsAndTranslations.length; i += 1) {
      const card = new PlayCardComponent(
        i,
        wordsAndTranslations[i].word,
        (id) => this.verifyAnswer(id),
      );
      this.cards.push(card);
      this.root.querySelector('.row').append(card.draw());
    }

    this.root.querySelector('.main__wrapper').append(this.button.init());
    this.root.querySelector('.titleCategory').after(this.stars.init(this.answersArray));
    this.stars.hide();

    return this.root;
  }

  startPlay() {
    this.stars.show();
    this.playCurrentAudio();
    this.cards.forEach((card) => { card.startPlay(); });
  }

  playCurrentAudio() {
    this.cards[this.questionsArray[this.currentQuestionIndex]].playAudio();
  }

  verifyAnswer(clickedCardId) {
    const audio = this.root.querySelector('.audio');
    if (clickedCardId === this.questionsArray[this.currentQuestionIndex]) {
      audio.src = 'audio/correct-answer.mp3';
      audio.play();
      this.recordCorrectAnswer();
    } else {
      audio.src = 'audio/wrong-answer.mp3';
      audio.play();
      this.recordWrongAnswer();
    }
  }

  recordCorrectAnswer() {
    this.currentQuestionIndex += 1;
    this.answersArray.push(1);
    this.stars.recordCorrectAnswer();
    this.cards[this.questionsArray[this.currentQuestionIndex - 1]].recordCorrectAnswer();
    if (this.currentQuestionIndex !== this.cardsNumbers) {
      setTimeout(() => {
        this.playCurrentAudio();
      }, 600);
    }
    if (this.currentQuestionIndex === this.cardsNumbers && !this.answersArray.includes(0)) {
      this.showWin();
    } else if (this.currentQuestionIndex === this.cardsNumbers && this.answersArray.includes(0)) {
      this.showMistakes();
    }
  }

  recordWrongAnswer() {
    this.answersArray.push(0);
    this.stars.recordWrongAnswer();
  }

  showMistakes() {
    this.cards.forEach((card) => card.hide());
    this.button.hide();
    const audio = this.root.querySelector('.audio');
    const mainWrapper = this.root.querySelector('.main__wrapper');
    const numWrongs = this.answersArray.filter((answer) => answer === 0).length;

    const fail = `<div class = "fail-block">
                    <h2>Numbers of wrong answers: ${numWrongs}</h2>
                    <img class = 'fail img-fluid' src = 'images/fail.jpeg'>
                  </div>`;
    audio.src = 'audio/fail.mp3';
    mainWrapper.insertAdjacentHTML('beforeend', fail);
    audio.play();
    setTimeout(() => {
      audio.pause();
      this.root.querySelector('.fail-block').remove();
      this.finishGame();
    }, 5000);
  }

  showWin() {
    this.cards.forEach((card) => card.hide());
    this.button.hide();
    const audio = this.root.querySelector('.audio');
    const mainWrapper = this.root.querySelector('.main__wrapper');
    const success = `<div class = "success-block">
                                <img class = 'success img-fluid' src = 'images/success.jpeg'>
                            </div>`;
    audio.src = 'audio/success.mp3';
    mainWrapper.insertAdjacentHTML('beforeend', success);
    audio.play();
    setTimeout(() => {
      audio.pause();
      this.root.querySelector('.success-block').remove();
      this.finishGame();
    }, 5000);
  }

  finishGame() {
    window.location.replace('/#/main');
    this.stars.hide();
    this.resetGame();
    this.cards.forEach((card) => card.show());
    this.button.show();
  }

  hide() {
    this.root.classList.add('hidden');
  }

  show() {
    this.root.classList.remove('hidden');
  }

  changeCurrentPage(newPage) {
    const wordsAndTranslations = this.data.default[newPage];
    for (let i = 0; i < wordsAndTranslations.length; i += 1) {
      this.cards[i].changeCardContent(wordsAndTranslations[i].word,
        wordsAndTranslations[i].translation);
    }

    this.resetGame();

    this.root.querySelector('.breadcrumb-item.active').innerHTML = Helper.createPageName(newPage);
    this.root.querySelector('.titleCategory').innerHTML = Helper.createPageName(newPage);
  }

  resetGame() {
    this.stars.delete();
    this.answersArray = [];
    this.button.changeToPlayButton();
    this.currentQuestionIndex = 0;
    this.questionsArray = Helper.shuffle(this.questionsArray);
  }
}
