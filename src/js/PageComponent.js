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
  constructor() {
    this.root = document.body;
    this.header = new HeaderComponent(() => this.togglePlayMode());
    this.menuCards = new MenuCardsComponent(new CategoryProvider().getCategories(), true);
    this.trainingCards = new TrainingComponent();
    this.playingCards = new PlayComponent();
    this.currentPage = undefined;
    this.isPlayMode = undefined;
  }

  init(currentPage) {
    this.currentPage = currentPage;
    this.isPlayMode = false;

    this.root.prepend(this.header.init(currentPage));
    this.root.append(this.menuCards.draw());
    this.root.append(this.trainingCards.draw(currentPage));
    this.root.append(this.playingCards.init(currentPage));


    if(currentPage === 'main') {
      this.trainingCards.hide();
    } else {
      this.menuCards.hide();
    }

    if(!this.isPlayMode) {
      this.playingCards.hide();
    }
  }

  changeCurrentPage(newPage) {
    this.header.changeCurrentPage(newPage);

    if (this.currentPage == 'main') {
        this.menuCards.hide();
    } else {
      if(this.isPlayMode){
        this.playingCards.hide();
      } else {
        this.trainingCards.hide();
      }
    }

    this.currentPage = newPage;

    if(this.currentPage != 'main') {
      this.trainingCards.changeCurrentPage(newPage);
      this.playingCards.changeCurrentPage(newPage);
    }

    if (this.currentPage == 'main') {
      this.menuCards.show();
    } else {
      if(this.isPlayMode) {
        this.playingCards.show();
      } else {
        this.trainingCards.show();
      }
    }
  }

  togglePlayMode() {
    this.isPlayMode = !this.isPlayMode;
    this.header.togglePlayMode();
    this.menuCards.togglePlayMode();
    if(this.isPlayMode) {
      this.trainingCards.hide();
      this.playingCards.show();
    } else {
      this.playingCards.hide();
      this.trainingCards.show();
    }
  }
}
