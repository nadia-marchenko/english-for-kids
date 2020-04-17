export class MenuComponent {
    constructor (state, parentCategory) {
        this.state = state;
        this.parentCategory = parentCategory;
    
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
        this.parentCategory.prepend(headerBurger);

        nav.className = 'header__navigation';
        nav.setAttribute('id', 'header__navigation');
        this.parentCategory.append(nav);

        ul.className = 'navigation navbar-nav mr-auto';
        nav.append(ul);
        ul.append(this.getListContent());
        
        if (this.state.isOpened) {

            headerBurger.classList.add('active');
            nav.classList.add('active');

            const burgerMenu = document.getElementById('header__burger');

            burgerMenu.addEventListener('click', () => {
                this.toggle();
            });
        
        } else {
            const burgerMenu = document.getElementById('header__burger');
            burgerMenu.addEventListener('click', () => {
                this.toggle();
            });
        }
    }

    getListContent() {
        let fragment = new DocumentFragment();
        const menuItems = ['Main', 'Activities', 'Adjectives', 'Clothes'];
        const menuLinks = ['/', '/activities', '/adjectives', '/cloths'];
      
        for (let i = 0; i < menuItems.length; i += 1) {
          let li = document.createElement('li');
          let a = document.createElement('a');
          li.className = 'nav-item';
          a.className = 'nav-link';
          a.setAttribute('href', menuLinks[i]);
          li.append(a);
          li.append(menuItems[i]);
          fragment.append(li);
        }
        return fragment;
    }

    changeState(newState) {
        this.state = newState;
        this.draw();
    }

    toggle() {
        this.changeState(new MenuState(!this.state.isOpened));
      }
}

export class MenuState {
    constructor (isOpened) {
        this.isOpened = isOpened;
    }
}