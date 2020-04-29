import TrainingCardComponent from './TrainingCardComponent';
import CategoryProvider from './CategoryProvider';

export default class TrainingComponent {
  constructor() {
    this.root = document.createElement('main');
    this.categoryProvider = new CategoryProvider();
    this.cards = [];
  }

  draw(currentPage) {
    const wordsAndTranslations = this.categoryProvider.getCategoriesWordsAndTranslations(currentPage);
    const wrapper = `<div class="wrapper main__wrapper">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    ${currentPage[0].toUpperCase() + currentPage.slice(1)}
                                </li>
                            </ol>
                            <h1 class="titleCategory">${currentPage[0].toUpperCase() + currentPage.slice(1)}</h1>
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                        </div>`;
    this.root.insertAdjacentHTML('beforeend', wrapper);

    for (let i = 0; i < wordsAndTranslations.length; i += 1) {
      const card = new TrainingCardComponent(wordsAndTranslations[i].word, wordsAndTranslations[i].translation);
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
    const wordsAndTranslations = this.categoryProvider.getCategoriesWordsAndTranslations(newPage);
    for(let i = 0; i < wordsAndTranslations.length; i++) {
      this.cards[i].changeCardContent(wordsAndTranslations[i].word, wordsAndTranslations[i].translation);
    }

    this.root.querySelector('.breadcrumb-item.active').innerHTML = newPage[0].toUpperCase() + newPage.slice(1);
    this.root.querySelector('.titleCategory').innerHTML = newPage[0].toUpperCase() + newPage.slice(1);

  }
}
