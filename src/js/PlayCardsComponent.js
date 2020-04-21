import { TrainingCardComponent } from "./TrainingCardComponent";
import { PlayButtonComponent } from "./PlayButtonComponent";

export class PlayCardsComponent {
    
    constructor (category, wordsAndTranslations, state) {
        this.category = category;
        this.wordsAndTranslations = wordsAndTranslations;
        this.state = state;
    }

    draw () {
        const root = `<main>
                        <div class="wrapper main__wrapper">

                            <ol class="breadcrumb play-mode">
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
                        </div>
                    </main>`;
        
        document.body.insertAdjacentHTML("beforeend", root);

        for (let i = 0; i < this.wordsAndTranslations.length; i++) {
            document.querySelector('.row').append(new TrainingCardComponent(this.wordsAndTranslations[i].word, this.wordsAndTranslations[i].translation).draw());
            
        }
        if(!this.state.isTraining) {
            new PlayButtonComponent().draw();
        }
    }
}

export class PlayCardsState {
    constructor(isTraining) {
        this.isTraining = isTraining;
    }
}