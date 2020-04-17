import { HeaderComponent } from "./HeaderComponent";
import { CardContainerComponent } from "./CardContainerComponent";

export class PageComponent {
    constructor (state) {
        this.state = state;
    }

    draw() {
        new HeaderComponent().draw();
        new CardContainerComponent(true).draw();
    }
}