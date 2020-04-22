export default class MenuComponent {
  constructor(isOpened, currentPage, isTraining) {
    this.root = document.createElement('div');
    // state
    this.isOpened = isOpened;
    this.currentPage = currentPage;
    this.isTraining = isTraining;
  }

  draw() {
    if (this.root.querySelector('.header__burger')) {
      this.root.querySelector('.header__burger').remove();
      this.root.querySelector('.header__navigation').remove();
    }

    const menuItems = ['main', 'actions', 'adjectives', 'animals', 'clothes', 'emotions', 'flowers', 'food', 'kitchen'];

    const couple = `<div class="header__burger ${this.isOpened ? 'active' : ''}" id="header__burger">
                            <span></span>
                        </div>
                        <nav class="header__navigation ${this.isOpened ? 'active' : ''} 
                        ${!this.isTraining ? 'play-mode' : ''}" id="header__navigation">
                            <ul class="navigation navbar-nav mr-auto"> 
                                ${menuItems.map((category) => `<li class="nav-item">
                                        <a class="nav-link ${(this.currentPage === category) ? 'active' : ''}" 
                                        href="/#/${category}">
                                            ${category[0].toUpperCase() + category.slice(1)}
                                        </a>
                                    </li>`).reduce((a, b) => a + b)}
                            </ul>
                        </nav>`;

    this.root.insertAdjacentHTML('afterbegin', couple);

    this.root.querySelector('.header__burger').onclick = () => {
      this.toggle();
    };

    return this.root;
  }

  toggle() {
    this.isOpened = !this.isOpened;
    this.draw();
  }
}
