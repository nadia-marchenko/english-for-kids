import PlayCardComponent from './PlayCardComponent';
import PlayButtonComponent from './PlayButtonComponent';
import StarLineComponent from './StarLineComponent';
import CategoryProvider from './CategoryProvider';

export default class PlayComponent {
  constructor() {
    this.category = undefined;
    this.root = document.createElement('main');
    this.categoryProvider = new CategoryProvider();
    //components
    this.cards = [];
    this.stars = new StarLineComponent();
    this.button = new PlayButtonComponent(
      () => this.startPlay(),
      () => this.playCurrentAudio()
    );
    // state
    this.isPlaying = false;
    this.playStatus = 'NOT_STARTED'; // NOT_STARTED, PLAYING, FINISHED
    this.answersArray = [];
    this.questionsArray = this.shuffle([0, 1, 2, 3, 4, 5, 6, 7]);
    this.currentQuestionIndex = 0;
  }

  init(category) {
    const wordsAndTranslations = this.categoryProvider.getCategoriesWordsAndTranslations(category);
    this.category = category;

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

    for (let i = 0; i < wordsAndTranslations.length; i += 1) {
        const wasAnswered = this.questionsArray.indexOf(i) < this.currentQuestionIndex;
        const card = new PlayCardComponent(
          i,
          wordsAndTranslations[i].word,
          (id) => this.verifyAnswer(id),
          this.isPlaying,
          wasAnswered, 
          this.currentStarsArray,
        );
        this.cards.push(card);
        this.root.querySelector('.row').append(card.draw());
    }

    this.root.querySelector('.main__wrapper').append(this.button.init());
    this.root.querySelector('.titleCategory').after(this.stars.init(this.answersArray));
    this.stars.hide()

    return this.root;
  }

  startPlay() {
    this.stars.show();
    this.playCurrentAudio();
    // this.isPlaying = !this.isPlaying;
    this.cards.forEach(card => {card.startPlay()});
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
      }, 600);
    } else {
      audio.src = 'audio/wrong-answer.mp3';
      audio.play();
      this.recordWrongAnswer();
    }
  }

  recordCorrectAnswer() {
    if (this.currentQuestionIndex === 7 && !this.answersArray.includes(0)) {
      this.showWin();
    }
    else if (this.currentQuestionIndex === 7 && this.answersArray.includes(0)) {
      this.showMistakes();
    }
    this.currentQuestionIndex += 1;
    this.answersArray.push(1);
    this.stars.recordCorrectAnswer();
    this.cards[this.questionsArray[this.currentQuestionIndex-1]].recordCorrectAnswer();
    if (this.currentQuestionIndex != 8) {
      this.playCurrentAudio();
    }
  }

  recordWrongAnswer() {
    if (this.currentQuestionIndex === 7 && this.answersArray.includes(0)) {
      this.showMistakes();
    }
    this.answersArray.push(0);
    this.stars.recordWrongAnswer();
  }

  showMistakes() {
    this.cards.forEach(card => card.hide());
    this.button.hide();
    const audio = this.root.querySelector('.audio');
    const mainWrapper = this.root.querySelector('.main__wrapper');
    const numWrongs = this.answersArray.filter((answer) => answer === 0).length;
    // mainWrapper.insertAdjacentHTML('beforeend', `<h2>Numbers of wrong answers: ${numWrongs}</h2>`);

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
    this.cards.forEach(card => card.hide());
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
    this.stars.delete();
    this.answersArray = [];
    this.cards.forEach(card => card.show());
    this.button.show();
    this.button.changeToPlayButton();
    this.currentQuestionIndex = 0;
    this.questionsArray = this.shuffle(this.questionsArray);
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

  hide() {
    this.root.classList.add('hidden');
  }

  show() {
    this.root.classList.remove('hidden');

  }

  changeCurrentPage(newPage) {
    const wordsAndTranslations = this.categoryProvider.getCategoriesWordsAndTranslations(newPage);
    for(let i = 0; i < wordsAndTranslations.length; i++) {
      this.cards[i].changeCardContent(wordsAndTranslations[i].word, wordsAndTranslations[i].translation);
    }

    this.stars.delete();
    this.answersArray = [];
    this.button.changeToPlayButton();
    this.currentQuestionIndex = 0;

    this.root.querySelector('.breadcrumb-item.active').innerHTML = newPage[0].toUpperCase() + newPage.slice(1);
    this.root.querySelector('.titleCategory').innerHTML = newPage[0].toUpperCase() + newPage.slice(1);

    this.questionsArray = this.shuffle(this.questionsArray);
  }

  hide() {
    this.root.classList.add('hidden');
  }

  show() {
    this.root.classList.remove('hidden');
  }
}
