import { CategoryCardComponent } from "./CategoryCardComponent";
import { ActionsCardComponent } from "./ActionsCardComponent";
import { AdjectivesCardComponent } from "./AdjectivesCardComponent";

export class CardContainerComponent {
    constructor(category) {
        this.category = category;
    }

    draw() {
        const main = document.createElement('main');
        const wrapper = document.createElement('div');
        const cardWrapper = document.createElement('div');
        const row = document.createElement('div');
        
        const header = document.getElementById('header');
        header.after(main);

        wrapper.className = 'wrapper';
        main.append(wrapper);

        cardWrapper.className = 'cards__wrapper';
        wrapper.append(cardWrapper);

        row.className = 'row';
        cardWrapper.append(row);

        const MainPage = ['actions', 'adjectives', 'animals', 'clothes', 'emotions', 'flowers', 'food', 'kitchen'];

        // for (let i = 0; i < MainPage.length; i++) {
        //     new CategoryCardComponent(MainPage[i], row).draw();
        // }

        new ActionsCardComponent(true).draw();
        // new AdjectivesCardComponent(true).draw();

        // const card = document.getElementById('actions');
        // card.addEventListener('click', () => {
        //     new CardContainerComponent(true).draw();
        // });
    }
}