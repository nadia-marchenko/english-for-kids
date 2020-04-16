import { MenuComponent } from './MenuComponent';
import { SwitcherComponent } from './SwitcherComponent';

export class HeaderComponent {
    constructor (state) {
        this.state = state;
    }
    draw () {
        let menu = new MenuComponent(new MenuState(false));
        menu.draw();
        let switcher = new SwitcherComponent(new SwitcherState(true));
        switcher.draw();
    }
}

class MenuState {
    constructor (isOpened) {
        this.isOpened = isOpened;
    }
}

class SwitcherState {
    constructor(isTrain) {
        this.isTrain = isTrain;
    }
}