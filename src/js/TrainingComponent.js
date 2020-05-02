import TrainingCardComponent from './TrainingCardComponent';
import Helper from './Helper';

import * as CATEGORIES from '../Category.json';
// let name = require('./Category.json');

export default class TrainingComponent {
  constructor() {
    this.root = document.createElement('main');
    this.cards = [];
    this.data = CATEGORIES;
  }

  init(currentPage) {
    const wordsAndTranslations = this.data.default[currentPage];
    const wrapper = `<div class="wrapper main__wrapper">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    ${Helper.createPageName(currentPage)}
                                </li>
                            </ol>
                            <h1 class="titleCategory">${Helper.createPageName(currentPage)}</h1>
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                        </div>`;
    this.root.insertAdjacentHTML('beforeend', wrapper);

    for (let i = 0; i < wordsAndTranslations.length; i += 1) {
      const card = new TrainingCardComponent(wordsAndTranslations[i].word,
        wordsAndTranslations[i].translation);
      this.cards.push(card);
      this.root.querySelector('.row').append(card.init());
    }
    return this.root;
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

    this.root.querySelector('.breadcrumb-item.active').innerHTML = Helper.createPageName(newPage);
    this.root.querySelector('.titleCategory').innerHTML = Helper.createPageName(newPage);
  }
}
