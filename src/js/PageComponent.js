import { HeaderComponent, HeaderState } from "./HeaderComponent";
import { MenuCardsComponent, MenuCardsState } from "./MenuCardsComponent";
import { CategoryProvider } from "./CategoryProvider";
import { TrainingComponent, TrainingState } from "./TrainingComponent";
import { PlayState, PlayComponent } from "./PlayComponent";

//Import images
function importAll (r) {
    r.keys().forEach(r);
  }
importAll(require.context('../assets/categories', true, /\.jpeg$/));
importAll(require.context('../assets/categories', true, /\.mp3$/));

export class PageComponent {
    constructor (state) {
        this.state = state;
        this.root = document.body;
    }

    draw() {
        this.delete();
        let header = new HeaderComponent(new HeaderState(this.state.currentPage, this.state.isTraining), () => this.toggleTrainingMode());
        this.root.prepend(header.draw());

        if(this.state.currentPage === 'main') {
            let menu = new MenuCardsComponent(
                new CategoryProvider().getCategories(),
                new MenuCardsState(this.state.isTraining)
                );
            this.root.append(menu.draw());
        } else {
            if (this.state.isTraining) {
                let cards = new TrainingComponent(
                    this.state.currentPage, 
                    new CategoryProvider().getCategoriesWordsAndTranslations(this.state.currentPage),
                    new TrainingState(this.state.isTraining)
                );
                this.root.append(cards.draw());
            } else {
                let cards = new PlayComponent(
                    this.state.currentPage, 
                    new CategoryProvider().getCategoriesWordsAndTranslations(this.state.currentPage),
                    new PlayState(this.state.isTraining)
                );
                this.root.append(cards.draw());
            }
        } 
    }

    delete() {
        if (document.querySelector('header')) {
            document.querySelector('header').remove();
        }
        if(document.querySelector('main')) {
            document.querySelector('main').remove();
        }
    }

    changeCategory(newCategory) {
        this.changeState(new PageState(newCategory,this.state.isTraining));
    }

    changeState(newState) {
        this.state = newState;
        this.draw();
    }

    toggleTrainingMode() {
        this.changeState(new PageState(this.state.currentPage, !this.state.isTraining));
    }
}

export class PageState {
    constructor(currentPage, isTraining) {
        this.currentPage = currentPage;
        this.isTraining = isTraining;
    }
}