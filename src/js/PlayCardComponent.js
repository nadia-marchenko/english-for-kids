export class PlayCardComponent {
    constructor(id, word, state, tap) {
        this.id = id;
        this.word = word;
        this.state = state;
        this.tap = tap;
        this.root = document.createElement('div');
    }
    draw() {
        this.root.classList = 'col-md-3 col-sm-6';

        const playingCard = `<div class="card" id="${this.word}">    
                                <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                            </div>
                    <audio class="audio"></audio>
                </div>`;
        
        this.root.insertAdjacentHTML('afterbegin', playingCard);

        if(this.state.wasAnswered) {
            this.root.querySelector('.card-img-top').classList.add('correct-card');
        }

        this.root.querySelector('.card').onclick = () => {
            this.tap(this.id);
        }
        
        return this.root;
    }

    playAudio() {
        const audio = this.root.querySelector('.audio');
        audio.src = `audio/${this.word}.mp3`;
        audio.play();
    }
}

export class PlayCardState {
    constructor(wasAnswered, currentAudio, currentStarsArray) {
        this.wasAnswered = wasAnswered;
        this.currentAudio = currentAudio;
        this.currentStarsArray = currentStarsArray;
    }
}