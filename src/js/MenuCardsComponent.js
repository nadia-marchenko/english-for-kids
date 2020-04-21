import { MenuCardComponent, MenuCardState } from "./MenuCardComponent";

export class MenuCardsComponent {
    constructor(categories, state) {
        this.categories = categories;
        this.state = state;
        this.root = document.createElement('main');
    }
    draw() {
        const wrapper = `<div class="wrapper main__wrapper">
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                        </div>`;
        this.root.insertAdjacentHTML('beforeend', wrapper);

        for (let i = 0; i < this.categories.length; i++) {
            this.root.querySelector('.row').insertAdjacentHTML("beforeend", new MenuCardComponent(this.categories[i], new MenuCardState(this.state.isTraining)).draw());
        }

        return this.root;
    }
}

export class MenuCardsState {
    constructor(isTraining) {
        this.isTraining = isTraining;
    }
}