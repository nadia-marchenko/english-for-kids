export class TrainingCardComponent {
    constructor(category, categoryElement, parentElement) {
        this.category = category;
        this.categoryElement = categoryElement;
        this.parentElement = parentElement;
    }
    draw() {
        const bootstrapCol = document.createElement('div');
        const card = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardBody = document.createElement('div');
        const cardText = document.createElement('p');

        bootstrapCol.className = "col-md-3 col-sm-6";   
        this.parentElement.append(bootstrapCol);

        card.className = 'card';
        card.setAttribute('id', this.categoryElement);
        card.setAttribute('onclick', 'playAudio()');
        bootstrapCol.append(card);

        cardImg.classList = 'card-img-top';
        cardImg.src = `../src/assets/categories/${this.category}/img/${this.categoryElement}.jpeg`;
        cardImg.setAttribute('alt',  this.categoryElement);
        card.append(cardImg);

        cardBody.className = 'card-body';
        card.append(cardBody);

        cardText.className = 'card-text';
        cardText.innerHTML = this.categoryElement[0].toUpperCase() + this.categoryElement.slice(1);
        cardBody.append(cardText);

        //Add audio
        card.onclick = () => {
            const audio = document.querySelector('.audio');
            audio.src = `../src/assets/categories/${this.category}/audio/${this.categoryElement}.mp3`;
            audio.play();
        }
    }

    playAudio() {
        const audio = document.querySelector('.audio');
        audio.play();
    }
}