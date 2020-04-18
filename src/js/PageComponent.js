import { HeaderComponent, HeaderState } from "./HeaderComponent";
import { CardContainerComponent } from "./CardContainerComponent";
import { CardContainerState } from "./CardContainerComponent";

export class PageComponent {
    constructor (state) {
        this.state = state;
    }

    draw() {
        this.delete();
        new HeaderComponent(new HeaderState(this.state.currentPage)).draw();
        new CardContainerComponent(new CardContainerState(this.state.currentPage)).draw();
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
        this.changeState(new PageState(newCategory));
    }

    changeState(newState) {
        this.state = newState;
        this.draw();
    }
}

export class PageState {
    constructor(currentPage) {
        this.currentPage = currentPage;
    }
}