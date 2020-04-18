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
        const menuItems = ['Main', 'Actions', 'Adjectives', 'Animals', 'Clothes', 'Emotions', 'Flowers', 'Food', 'Kitchen'];
        const menuLinks = ['/', '/activities', '/adjectives', '/cloths'];
      
        for (let i = 0; i < menuItems.length; i += 1) {
          let li = document.createElement('li');
          let p = document.createElement('p');
        //   let a = document.createElement('a');
          li.className = 'nav-item';
          
        //   a.className = 'nav-link';
        //   a.setAttribute('href', menuLinks[i]);
            p.className = 'lead';
            if (this.currentState.currentPage === menuItems[i]) {
                li.classList.add('active');
            }
        //   li.append(a);
            li.append(p);
          p.append(menuItems[i]);

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