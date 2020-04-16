import { HeaderComponent } from "./HeaderComponent";
import { CardState } from "./CardState"
import { CardContainerComponent } from "./CardContainerComponent";

export class PageComponent {
    constructor (state) {
        this.state = state;
    }

    draw() {
        new HeaderComponent(true).draw();
        new CardContainerComponent(true).draw();
        // new MainPageComponent(new CardState(true)).draw();
    }
}