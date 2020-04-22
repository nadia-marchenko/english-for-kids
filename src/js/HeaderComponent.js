import MenuComponent from './MenuComponent';
import SwitcherComponent from './SwitcherComponent';

export default class HeaderComponent {
  constructor(toggleTrainingMode, currentPage, isTraining) {
    this.toggleTrainingMode = toggleTrainingMode;
    this.root = document.createElement('header');
    // state
    this.currentPage = currentPage;
    this.isTraining = isTraining;
  }

  draw() {
    const wrapper = `<div class="wrapper header__wrapper" id="header__wrapper">
                        </div>`;
    this.root.insertAdjacentHTML('beforeend', wrapper);

    const menu = new MenuComponent(false, this.currentPage, this.isTraining);
    this.root.querySelector('.header__wrapper').append(menu.draw());

    const switcher = new SwitcherComponent(this.toggleTrainingMode, this.isTraining);
    this.root.querySelector('.header__wrapper').append(switcher.draw());

    return this.root;
  }
}
