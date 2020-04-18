export class TrainingCardComponent {
    constructor(word, parentElement) {
        this.word = word;
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
        card.setAttribute('id', this.word);
        bootstrapCol.append(card);
        
        //Add image
        cardImg.classList = 'card-img-top';
        cardImg.src = `images/${this.word}.jpeg`;
        cardImg.setAttribute('alt', this.word);
        card.append(cardImg);

        cardBody.className = 'card-body';
        card.append(cardBody);

        //Add text
        cardText.className = 'card-text';
        cardText.innerHTML = this.word[0].toUpperCase() + this.word.slice(1);
        cardBody.append(cardText);

        //Add audio
        const audio = document.createElement('audio');
        audio.className = 'audio';
        bootstrapCol.append(audio);

        card.onclick = () => {
            const audio = bootstrapCol.querySelector('.audio');
            audio.src = `audio/${this.word}.mp3`;
            audio.play();
        }
    }
}