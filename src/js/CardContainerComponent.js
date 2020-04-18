import { CategoryCardComponent } from "./CategoryCardComponent";
import { ActionCardsComponent } from "./ActionCardsComponent";
import { AdjectivesCardsComponent } from "./AdjectiveCardsComponent";
import { AnimalsCardsComponent } from "./AnimalCardsComponent";
import { ClothesCardsComponent } from "./ClothCardsComponent";
import { EmotionsCardsComponent } from "./EmotionCardsComponent";
import { FlowersCardsComponent } from "./FlowerCardsComponent";
import { FoodCardsComponent } from "./FoodCardsComponent";
import { KitchenCardsComponent } from "./KitchenCardsComponent";

export class CardContainerComponent {
    constructor(state) {
        this.state = state;
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

        switch(this.state.currentPage) {
            case 'Actions':
                new ActionCardsComponent(true).draw();
                break;
            case 'Adjectives':
                new AdjectiveCardsComponent(true).draw();
                break;
            case 'Animals':
                new AnimalCardsComponent(true).draw(); 
                break;
            case 'Clothes':
                new ClothCardsComponent(true).draw();
                break;
            case 'Emotions':
                new EmotionCardsComponent(true).draw();
                break;
            case 'Flowers':
                new FlowerCardsComponent(true).draw(); 
                break;
            case 'Food':
                new FoodCardsComponent(true).draw();
                break;
            case 'Kitchen':
                new KitchenCardsComponent(true).draw();
                break;
            default:
                for (let i = 0; i < MainPage.length; i++) {
                    new CategoryCardComponent(MainPage[i], row).draw();
                }
        }

        // new KitchenCardsComponent(true).draw();
        // new FoodCardsComponent(true).draw();
        // new FlowersCardsComponent(true).draw();
        // new EmotionsCardsComponent(true).draw();
        // new ClothesCardsComponent(true).draw();
        // new AnimalsCardsComponent(true).draw();        
        // 
        // new AdjectivesCardsComponent(true).draw();

        // const card = document.getElementById('actions');
        // card.addEventListener('click', () => {
        //     new CardContainerComponent(true).draw();
        // });
    }
}

export class CardContainerState {
    constructor (currentPage) {  
        this.currentPage = currentPage;
    }
}