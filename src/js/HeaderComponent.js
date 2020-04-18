import { MenuComponent } from './MenuComponent';
import { MenuState } from './MenuComponent';
import { SwitcherComponent } from './SwitcherComponent';
import { SwitcherState } from './SwitcherComponent';

export class HeaderComponent {
    constructor(state) {
        this.state = state;
    }
    draw () {
        const header = document.createElement('header');
        const wrapper = document.createElement('div');

        header.className = 'header';
        header.setAttribute('id', 'header');
        document.body.prepend(header);

        wrapper.className = 'wrapper header__wrapper';
        wrapper.setAttribute('id', 'header__wrapper');
        header.prepend(wrapper);

        let menu = new MenuComponent(new MenuState(false, this.state.currentPage), wrapper);
        menu.draw();
        let switcher = new SwitcherComponent(new SwitcherState(true));
        switcher.draw();
    }
}

export class HeaderState {
    constructor(currentPage) {
        this.currentPage = currentPage;
    }
}