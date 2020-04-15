const header = document.createElement('header');
const wrapper = document.createElement('div');
const headerBurger = document.createElement('div');
const span = document.createElement('span');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const switcher = document.createElement('div');
const input = document.createElement('input');
const menuItems = ['Main', 'Activities', 'Adjectives', 'Clothes'];
const menuLinks = ['/', '/activities', '/adjectives', '/cloths'];

class MenuComponent {
    constructor (state) {
        this.state = state;
    }
    draw () {
        if (this.state.isOpened) {
            header.className = 'header';
            document.body.prepend(header);
        
            wrapper.className = 'wrapper header__wrapper';
            header.prepend(wrapper);
        
            headerBurger.className = 'header__burger active';
            headerBurger.setAttribute('id', 'header__burger');
            headerBurger.append(span);
            wrapper.prepend(headerBurger);
        
            nav.className = 'header__navigation active';
            nav.setAttribute('id', 'header__navigation');
            wrapper.append(nav);
        
            ul.className = 'navigation navbar-nav mr-auto';
            nav.append(ul);
            ul.append(getListContent(activePage));
        } else {
            nav.classList.remove('active');
            headerBurger.remove('active');
        }
    }

    getListContent() {
        let fragment = new DocumentFragment();
      
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
}

class MenuState {
    constructor (isOpened) {
        this.isOpened = isOpened;
    }
}

let menu = new MenuComponent(new MenuState(true));



// function getListContent(activePage) {
//   let fragment = new DocumentFragment();

//   for (let i = 0; i < menuItems.length; i += 1) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     li.className = 'nav-item';
//     a.className = 'nav-link';
//     if (activePage === menuLinks[i]) {
//       li.classList.add('active');
//     }
//     a.setAttribute('href', menuLinks[i]);
//     li.append(a);
//     li.append(menuItems[i]);
//     fragment.append(li);
//   }
//   return fragment;
// }

// function showHeader(activePage) {
//   header.className = 'header';
//   document.body.prepend(header);

//   wrapper.className = 'wrapper header__wrapper';
//   header.prepend(wrapper);

//   headerBurger.className = 'header__burger';
//   headerBurger.setAttribute('id', 'header__burger');
//   headerBurger.append(span);
//   wrapper.prepend(headerBurger);

//   nav.className = 'header__navigation';
//   nav.setAttribute('id', 'header__navigation');
//   wrapper.append(nav);

//   ul.className = 'navigation navbar-nav mr-auto';
//   nav.append(ul);
//   ul.append(getListContent(activePage));

//   switcher.className = 'switch';
//   wrapper.append(switcher);

//   input.setAttribute('type', 'checkbox');
//   switcher.append(input);
// }

// showHeader('/');


//Burger menu
// const BURGER_MENU = document.getElementById('header__burger');

// BURGER_MENU.addEventListener('click', (event) => {
//   BURGER_MENU.querySelector('header__navigation'.forEach(el => el.classList.add('active')));
//   event.target.classList.add('active');
// });

// BURGER_MENU.addEventListener('click', () => {
//   if (document.getElementById('header__navigation').classList.contains('active')) {
//     document.getElementById('header__navigation').classList.remove('active');
//     document.getElementById('header__burger').classList.remove('active');
//   } else {
//     document.getElementById('header__navigation').classList.add('active');
//     document.getElementById('header__burger').classList.add('active');
//   }
// });
