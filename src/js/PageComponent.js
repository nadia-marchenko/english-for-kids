import { HeaderComponent, HeaderState } from "./HeaderComponent";
import { CardContainerComponent } from "./CardContainerComponent";
import { CardContainerState } from "./CardContainerComponent";

export class PageComponent {
    constructor (state) {
        this.state = state;
    }

    draw() {
        new HeaderComponent(new HeaderState(this.state.currentPage)).draw();
        new CardContainerComponent(new CardContainerState(this.state.currentPage)).draw();
    }
}

export class PageState {
    constructor(currentPage) {
        this.currentPage = currentPage;
    }
}