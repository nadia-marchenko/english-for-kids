import { HeaderComponent, HeaderState } from "./HeaderComponent";
import { MenuCardsComponent } from "./MenuCardsComponent";
import { CategoryProvider } from "./CategoryProvider";
import { CategoryCardState } from "./CategoryCardComponent";
import { PlayCardsComponent, PlayCardsState } from "./PlayCardsComponent";

//Import images
function importAll (r) {
    r.keys().forEach(r);
  }
importAll(require.context('../assets/categories', true, /\.jpeg$/));
importAll(require.context('../assets/categories', true, /\.mp3$/));

export class PageComponent {
    constructor (state) {
        this.state = state;
    }

    draw() {
        this.delete();
        new HeaderComponent(new HeaderState(this.state.currentPage, this.state.isTraining)).draw();

        if(this.state.currentPage === 'main') {
            new MenuCardsComponent(
                new CategoryProvider().getCategories(),
                new CategoryCardState(this.state.isTraining)
                ).draw();
        } else {
            new PlayCardsComponent(
                this.state.currentPage, 
                new CategoryProvider().getCategoriesWordsAndTranslations(this.state.currentPage),
                new PlayCardsState(this.state.isTraining)
            ).draw();
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

    changeCategory(newCategory){
        this.changeState(new PageState(newCategory,this.state.isTraining));
    }

    changeState(newState) {
        this.state = newState;
        this.draw();
    }
}

export class PageState {
    constructor(currentPage, isTraining) {
        this.currentPage = currentPage;
        this.isTraining = isTraining;
    }
}