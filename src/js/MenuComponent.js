export class MenuComponent {
    constructor (state) {
        this.state = state;
    }
    draw () {
        const header = document.createElement('header');
        const wrapper = document.createElement('div');
        const headerBurger = document.createElement('div');
        const span = document.createElement('span');
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
        const switcher = document.createElement('div');
        const input = document.createElement('input');
        

        if (document.getElementById('header')) {
            document.getElementById('header').remove();
        }
        //Убрать дублирование в if
        if (this.state.isOpened) {
            header.className = 'header';
            header.setAttribute('id', 'header');
            document.body.prepend(header);
        
            wrapper.className = 'wrapper header__wrapper';
            wrapper.setAttribute('id', 'header__wrapper');
            header.prepend(wrapper);
        
            headerBurger.className = 'header__burger active';
            headerBurger.setAttribute('id', 'header__burger');
            headerBurger.append(span);
            wrapper.prepend(headerBurger);

            const burgerMenu = document.getElementById('header__burger');

            burgerMenu.addEventListener('click', () => {
                this.toggle();
            });
        
            nav.className = 'header__navigation active';
            nav.setAttribute('id', 'header__navigation');
            wrapper.append(nav);
        
            ul.className = 'navigation navbar-nav mr-auto';
            nav.append(ul);
            ul.append(this.getListContent());
        } else {
            header.className = 'header';
            document.body.prepend(header);
            header.setAttribute('id', 'header');
        
            wrapper.className = 'wrapper header__wrapper';
            header.prepend(wrapper);
        
            headerBurger.className = 'header__burger';
            headerBurger.setAttribute('id', 'header__burger');
            headerBurger.append(span);
            wrapper.prepend(headerBurger);
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