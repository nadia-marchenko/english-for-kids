import { TrainingCardComponent } from "./TrainingCardComponent";
import { PlayButtonComponent } from "./PlayButtonComponent";

export class TrainingCardsComponent {
    
    constructor (category, wordsAndTranslations, state) {
        this.category = category;
        this.wordsAndTranslations = wordsAndTranslations;
        this.state = state;
        this.root = document.createElement('main');
    }

    draw () {
        const wrapper = `<div class="wrapper main__wrapper">

                            <ol class="breadcrumb ${!this.state.isTraining ? 'play-mode' : ""}">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    ${this.category[0].toUpperCase() + this.category.slice(1)}
                                </li>
                            </ol>
                            <h1 class="titleCategory">${this.category[0].toUpperCase() + this.category.slice(1)}</h1>
                            <div class="cards__wrapper">
                                <div class="row">
                                </div>
                            </div>
                        </div>`;
        this.root.insertAdjacentHTML("beforeend", wrapper);

        for (let i = 0; i < this.wordsAndTranslations.length; i++) {
            this.root.querySelector('.row').append(new TrainingCardComponent(this.wordsAndTranslations[i].word, this.wordsAndTranslations[i].translation).draw());
            
        }
        if(!this.state.isTraining) {
            let button = new PlayButtonComponent();
            this.root.querySelector('.main__wrapper').append(button.draw());
        }
        return this.root;
    }
}

export class TrainingCardsState {
    constructor(isTraining) {
        this.isTraining = isTraining;
    }
}