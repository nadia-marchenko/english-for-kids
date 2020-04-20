import { HeaderComponent, HeaderState } from "./HeaderComponent";
import { GameComponent, GameState } from "./GameComponent";

export class PageComponent {
    constructor (state) {
        this.state = state;
    }

    draw() {
        this.delete();
        new HeaderComponent(new HeaderState(this.state.currentPage, this.state.isTraining)).draw();
        new GameComponent(new GameState(this.state.currentPage, this.state.isTraining)).draw();
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