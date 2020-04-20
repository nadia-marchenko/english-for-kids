import { TrainingCardComponent } from "./TrainingCardComponent";
import { PlayButtonComponent } from "./PlayButtonComponent";

export class PlayCardsComponent {
    
    constructor (category, words, translation, state) {
        this.category = category;
        this.words = words;
        this.translation = translation;
        this.state = state;
    }

    draw () {
        document.querySelector('.row').remove();

        const h1 = document.createElement('h1');
        h1.className = 'titleCategory';
        h1.innerHTML = this.category[0].toUpperCase() + this.category.slice(1);
        document.querySelector('.cards__wrapper').before(h1);

        this.addBreadCrumbs(this.category[0].toUpperCase() + this.category.slice(1));

        const cardWrapper = document.querySelector('.cards__wrapper');
        const row = document.createElement('div');

        row.className = 'row';
        cardWrapper.append(row);

        for (let i = 0; i < this.words.length; i++) {
            row.append(new TrainingCardComponent(this.words[i], this.translation[i]).draw());
            
        }
        if(!this.state.isTraining) {
            new PlayButtonComponent().draw();
        }
    }

    addBreadCrumbs(categoryName) {
        const root = `<ol class="breadcrumb ${!this.state.isTraining ? "play-mode" : ""}">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">
                            ${categoryName}
                        </li>
                    </ol>`;
        document.querySelector('.main__wrapper').insertAdjacentHTML("afterbegin", root);
    }
}

export class PlayCardsState {
    constructor(isTraining) {
        this.isTraining = isTraining;
    }
}