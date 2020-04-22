import HeaderComponent from './HeaderComponent';
import MenuCardsComponent from './MenuCardsComponent';
import CategoryProvider from './CategoryProvider';
import TrainingComponent from './TrainingComponent';
import PlayComponent from './PlayComponent';

// Import images
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../assets', true, /\.jpeg$/));
importAll(require.context('../assets', true, /\.mp3$/));

export default class PageComponent {
  constructor(currentPage, isTraining) {
    this.root = document.body;
    // state
    this.currentPage = currentPage;
    this.isTraining = isTraining;
  }

  draw() {
    this.delete();
    const header = new HeaderComponent(
      () => this.toggleTrainingMode(),
      this.currentPage,
      this.isTraining,
    );
    this.root.prepend(header.draw());

    if (this.currentPage === 'main') {
      const menu = new MenuCardsComponent(
        new CategoryProvider().getCategories(),
        this.isTraining,
      );
      this.root.append(menu.draw());
    } else if (this.isTraining) {
      const cards = new TrainingComponent(
        this.currentPage,
        new CategoryProvider().getCategoriesWordsAndTranslations(this.currentPage),
      );
      this.root.append(cards.draw());
    } else {
      const cards = new PlayComponent(
        this.currentPage,
        new CategoryProvider().getCategoriesWordsAndTranslations(this.currentPage),
        'NOT_STARTED',
        [],
        [0, 1, 2, 3, 4, 5, 6, 7],
        0,
      );
      this.root.append(cards.draw());
    }
  }

  delete() {
    if (this.root.querySelector('header')) {
      this.root.querySelector('header').remove();
    }
    if (this.root.querySelector('main')) {
      this.root.querySelector('main').remove();
    }
  }

  changeCategory(newCategory) {
    this.currentPage = newCategory;
    this.draw();
  }

  toggleTrainingMode() {
    this.isTraining = !this.isTraining;
    this.draw();
  }
}
