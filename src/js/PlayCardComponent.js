export class PlayCardComponent {
    constructor(word, translation) {
        this.word = word;
        this.translation = translation;
    }
    draw() {
        const root = document.createElement('div');
        root.classList = 'col-md-3 col-sm-6';

        const playingCard = `<div class="card" id="${this.word}">    
                                <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                            </div>
                    <audio class="audio"></audio>
                </div>`;
        
        root.insertAdjacentHTML('afterbegin', playingCard);
        
        return root;
    }
}