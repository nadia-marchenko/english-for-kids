export default class MenuComponent {
  constructor() {
    this.root = document.createElement('div');
  }

  init(currentPage) {
    if (this.root.querySelector('.header__burger')) {
      this.root.querySelector('.header__burger').remove();
      this.root.querySelector('.header__navigation').remove();
    }

    const menuItems = ['main', 'actions', 'adjectives', 'animals', 'clothes', 'emotions', 'flowers', 'food', 'kitchen'];

    const couple = `<div class="header__burger" id="header__burger">
                            <span></span>
                        </div>
                        <nav class="header__navigation" id="header__navigation">
                            <ul class="navigation navbar-nav mr-auto"> 
                                ${menuItems.map((category) => `<li class="nav-item">
                                        <a class="nav-link ${currentPage === category ? 'active' : ''}" href="/#/${category}">
                                            ${category[0].toUpperCase() + category.slice(1)}
                                        </a>
                                    </li>`).reduce((a, b) => a + b)}
                            </ul>
                        </nav>`;

    this.root.insertAdjacentHTML('afterbegin', couple);

    this.root.querySelector('.header__burger').onclick = () => {
      this.toggleMenu();
    };

    this.root.querySelectorAll('a').forEach(a => a.onclick = () => {
      this.toggleMenu();
    });

    return this.root;
  }

  toggleMenu() {

    if (this.root.querySelector('.header__navigation').classList.contains('active')) {
      this.root.querySelector('.header__navigation').classList.remove('active');
      this.root.querySelector('.header__burger').classList.remove('active');
    } else {
      this.root.querySelector('.header__navigation').classList.add('active');
      this.root.querySelector('.header__burger').classList.add('active');
    }
  }

  togglePlayMode() {
    if(this.root.querySelector('.header__navigation').classList.contains('play-mode')) {
      this.root.querySelector('.header__navigation').classList.remove('play-mode');
    } else {
      this.root.querySelector('.header__navigation').classList.add('play-mode');
    }
  }

  changeCurrentPage(currentPage) {
    this.root.querySelector('.nav-link.active').classList.remove('active');
    this.root.querySelector(`a[href*="${currentPage}"]`).classList.add('active');
  }
}
