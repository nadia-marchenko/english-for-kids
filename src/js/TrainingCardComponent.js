export class TrainingCardComponent {
    constructor(word) {
        this.word = word;
    }
    draw() {
        const root = document.createElement('div');
        root.classList = 'col-md-3 col-sm-6';

        const card = `<div class="card" id="${this.word}">    
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                                    <div class="card-body card-game">
                                        <p class="card-text">${this.word[0].toUpperCase() + this.word.slice(1)}</p>
                                        <span class="icon"></span>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <img class="card-img-top" src="images/${this.word}.jpeg" alt="${this.word}">
                                    <div class="card-body card-game">
                                        <p class="card-text">It works</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <audio class="audio"></audio>
                    </div>`;
        
        root.insertAdjacentHTML('afterbegin', card);

        root.querySelector('.card').onclick = () => {
            const audio = root.querySelector('.audio');
            audio.src = `audio/${this.word}.mp3`;
            audio.play();
        }

        root.querySelector('.icon').onclick = (ev) => {
            console.log("click");
            // root.querySelector('.front').classList.add('hidden');
            root.querySelector('.back').classList.add('flip-card-back');
            // root.querySelector('.flipper').classList.add('rotate');
            ev.stopPropagation();
        }

        return root;
    }
}