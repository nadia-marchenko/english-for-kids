import MenuCardComponent from './MenuCardComponent';

export default class MenuCardsComponent {
  constructor(categories) {
    this.categories = categories;
    this.root = document.createElement('main');
    // state
    this.isPlayMode = false;
    this.cards =[];
  }

  init() {
    const wrapper = `<div class="wrapper main__wrapper">
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                        </div>`;
    this.root.insertAdjacentHTML('beforeend', wrapper);

    for (let i = 0; i < this.categories.length; i += 1) {
      const card = new MenuCardComponent(this.categories[i], this.isPlayMode);
      this.cards.push(card);
      this.root.querySelector('.row').append(card.init());
    }

    return this.root;
  }

  hide() {
    this.root.classList.add('hidden');
  }

  show() {
    this.root.classList.remove('hidden');
  }

  togglePlayMode() {
    this.cards.forEach(card => card.togglePlayMode());
  }
}
