import MenuComponent from './MenuComponent';
import SwitcherComponent from './SwitcherComponent';

export default class HeaderComponent {
  constructor(toggleTrainingMode) {
    this.toggleTrainingMode = toggleTrainingMode;
    this.root = document.createElement('header');
    this.menu = new MenuComponent();
    this.switcher = new SwitcherComponent(this.toggleTrainingMode);
  }

  init(currentPage) {
    const wrapper = `<div class="wrapper header__wrapper" id="header__wrapper">
                        </div>`;
    this.root.insertAdjacentHTML('beforeend', wrapper);

    this.root.querySelector('.header__wrapper').append(this.menu.init(currentPage));

    this.root.querySelector('.header__wrapper').append(this.switcher.init());

    return this.root;
  }

  changeCurrentPage(currentPage) {
    this.menu.changeCurrentPage(currentPage);
  }

  hide() {
    this.root.classList.add('hidden');
  }

  togglePlayMode() {
    this.menu.togglePlayMode();
  }
}
