import { MenuComponent } from './MenuComponent';
import { MenuState } from './MenuComponent';
import { SwitcherComponent } from './SwitcherComponent';
import { SwitcherState } from './SwitcherComponent';

export class HeaderComponent {
    constructor(state, toggleTrainingMode) {
        this.state = state;
        this.toggleTrainingMode = toggleTrainingMode;
        this.root = document.createElement('header');
    }
    draw () {
        const wrapper = `<div class="wrapper header__wrapper" id="header__wrapper">
                        </div>`;
        this.root.insertAdjacentHTML("beforeend", wrapper);

        let menu = new MenuComponent(new MenuState(false, this.state.currentPage, this.state.isTraining));
        this.root.querySelector(".header__wrapper").append(menu.draw());
        
        let switcher = new SwitcherComponent(new SwitcherState(this.state.isTraining), this.toggleTrainingMode);
        this.root.querySelector(".header__wrapper").append(switcher.draw());

        return this.root;
    }
}

export class HeaderState {
    constructor(currentPage, isTraining) {
        this.currentPage = currentPage;
        this.isTraining = isTraining;
    }
}