export class TrainingCardComponent {
    constructor(word, translation) {
        this.word = word;
        this.translation = translation;
    }
    draw() {
        const root = document.createElement('div');
        root.classList = 'col-md-3 col-sm-6';

        const trainingCard = `<div class="card" id="${this.word}">    
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                                    <div class="card-body card-game">
                                        <p class="card-text">${this.word[0].toUpperCase() + this.word.slice(1)}</p>
                                        <span class="icon"></span>
                                    </div>
                                </div>
                                <div class="flip-card-back rotate">
                                    <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                                    <div class="card-body card-game">
                                        <p class="card-text">${this.translation[0].toUpperCase() + this.translation.slice(1)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <audio class="audio"></audio>
                    </div>`;

        const playingCard = `<div class="card" id="${this.word}">    
                                <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                            </div>
                    <audio class="audio"></audio>
                </div>`;
        
        root.insertAdjacentHTML('afterbegin', trainingCard);
        
        root.querySelector('.card').onclick = () => {
            const audio = root.querySelector('.audio');
            audio.src = `audio/${this.word}.mp3`;
            audio.play();
        }

        root.querySelector('.icon').onclick = (ev) => {
            console.log("click");
            root.querySelector('.flip-card-inner').classList.add('rotate');
            ev.stopPropagation();
        }

        root.querySelector('.flip-card-back').onmouseleave = () => {
            console.log('Mouse out!');
            root.querySelector('.flip-card-inner').classList.remove('rotate');
        }
        return root;
    }
}