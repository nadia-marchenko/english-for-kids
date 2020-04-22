import { TrainingCardComponent } from "./TrainingCardComponent";

export class TrainingComponent {
    
    constructor (category, wordsAndTranslations) {
        this.category = category;
        this.wordsAndTranslations = wordsAndTranslations;
        this.root = document.createElement('main');
    }

    draw () {
        const wrapper = `<div class="wrapper main__wrapper">

                            <ol class="breadcrumb">
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
        return this.root;
    }
}