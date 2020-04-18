export class MenuComponent {
    constructor (state, parentElement) {
        this.currentState = state;
        this.parentElement = parentElement;
    
    }
    draw () {
        const headerBurger = document.createElement('div');
        const span = document.createElement('span');
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        if (document.getElementById('header__burger')) {
            document.getElementById('header__burger').remove();
            document.getElementById('header__navigation').remove();
        }

        headerBurger.className = 'header__burger';
        headerBurger.setAttribute('id', 'header__burger');
        headerBurger.append(span);
        this.parentElement.prepend(headerBurger);

        nav.className = 'header__navigation';
        nav.setAttribute('id', 'header__navigation');
        this.parentElement.append(nav);

        ul.className = 'navigation navbar-nav mr-auto';
        nav.append(ul);
        ul.append(this.getListContent());
        const burgerMenu = document.getElementById('header__burger');

        burgerMenu.addEventListener('click', () => {
            this.toggle();
        });
        
        if (this.currentState.isOpened) {
            
            headerBurger.classList.add('active');
            nav.classList.add('active');
        } 
    }

    getListContent() {
        let fragment = new DocumentFragment();
        const menuItems = ['main', 'actions', 'adjectives', 'animals', 'clothes', 'emotions', 'flowers', 'food', 'kitchen'];
        const menuLinks = ['/#/main', '/#/actions', '/#/adjectives', '/#/animals', '/#/clothes', '/#/emotions', '/#/flowers', '/#/food', '/#/kitchen'];
      
        for (let i = 0; i < menuItems.length; i += 1) {
          let li = document.createElement('li');
          let a = document.createElement('a');
          li.className = 'nav-item';
          
          a.className = 'nav-link';
          a.setAttribute('href', menuLinks[i]);
            if (this.currentState.currentPage === menuItems[i]) {
                a.classList.add('active');
            }
          li.append(a);
          a.append(menuItems[i][0].toUpperCase() + menuItems[i].slice(1));

          li.onclick = () => {
            this.changePage(event.target.textContent);
          }
          fragment.append(li);
        }
        return fragment;
    }

    changeState(newState) {
        this.currentState = newState;
        this.draw();
    }

    toggle() {
        this.changeState(new MenuState(!this.currentState.isOpened, this.currentState.currentPage));
    }

    changePage(currentPage) {
        this.changeState(new MenuState(false, currentPage));
    }
}

export class MenuState {
    constructor (isOpened, currentPage) {
        this.isOpened = isOpened;
        this.currentPage = currentPage;
    }
}