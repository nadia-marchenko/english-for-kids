import { MenuCardComponent } from "./MenuCardComponent";

export class MenuCardsComponent {
    constructor(categories, isTraining) {
        this.categories = categories;
        this.root = document.createElement('main');
        //state
        this.isTraining = isTraining;
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
            this.root.querySelector('.row').insertAdjacentHTML("beforeend", new MenuCardComponent(
                this.categories[i], 
                this.isTraining
            ).draw());
        }

        return this.root;
    }
}