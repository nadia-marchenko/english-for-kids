import { CategoryCardComponent, CategoryCardState } from "./CategoryCardComponent";

export class MenuCardsComponent {
    constructor(categories, state) {
        this.categories = categories;
        this.state = state;
    }
    draw() {
        const root = `<main>
                        <div class="wrapper main__wrapper">
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                        </div>
                    </main>`;
        document.body.insertAdjacentHTML("beforeend", root);

        for (let i = 0; i < this.categories.length; i++) {
            document.querySelector('.row').insertAdjacentHTML("beforeend", new CategoryCardComponent(this.categories[i], new CategoryCardState(this.state.isTraining)).draw());
        }
        
    }
}

export class MenuCardsState {
    constructor(isTraining) {
        this.isTraining = isTraining;
    }
}