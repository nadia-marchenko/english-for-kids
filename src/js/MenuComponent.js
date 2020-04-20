export class MenuComponent {
    constructor (state) {
        this.currentState = state;
        this.root = document.createElement('div');
    }
    draw () {
        if (this.root.querySelector('.header__burger')) {
            this.root.querySelector('.header__burger').remove();
            this.root.querySelector('.header__navigation').remove();
        }

        const menuItems = ['main', 'actions', 'adjectives', 'animals', 'clothes', 'emotions', 'flowers', 'food', 'kitchen'];

        const couple = `<div class="header__burger ${this.currentState.isOpened ? "active" : ""}" id="header__burger">
                            <span></span>
                        </div>
                        <nav class="header__navigation ${this.currentState.isOpened ? "active" : ""} 
                        ${this.currentState.isTraining ? "play-mode" : ""}" id="header__navigation">
                            <ul class="navigation navbar-nav mr-auto"> 
                                ${menuItems.map( category =>
                                    `<li class="nav-item">
                                        <a class="nav-link ${(this.currentState.currentPage === category) ? "active" : ""}" 
                                        href="/#/${category}">
                                            ${category[0].toUpperCase() + category.slice(1)}
                                        </a>
                                    </li>`
                                ).reduce( (a, b) => a + b) }
                            </ul>
                        </nav>`;

        this.root.insertAdjacentHTML('afterbegin', couple);

        this.root.querySelector('.header__burger').onclick = () => {
            this.toggle();
        };

        return this.root;
    }

    changeState(newState) {
        this.currentState = newState;
        this.draw();
    }

    toggle() {
        this.changeState(new MenuState(!this.currentState.isOpened, this.currentState.currentPage, this.currentState.isTraining));
    }
}

export class MenuState {
    constructor (isOpened, currentPage, isTraining) {
        this.isOpened = isOpened;
        this.currentPage = currentPage;
        this.isTraining = isTraining;
    }
}