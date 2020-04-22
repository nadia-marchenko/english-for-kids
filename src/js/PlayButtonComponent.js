import { StarLineComponent } from "./StarLineComponent";

export class PlayButtonComponent {
    constructor(state, startPlay, repeatAudio) {
        this.root = document.createElement('div');
        this.state = state;
        this.startPlay = startPlay;
        this.repeatAudio = repeatAudio;
    }
    draw() {
        let button = `<button type="button" class="btn btn-primary btn-lg btn-block btn-danger">Play</button>`;
        this.root.insertAdjacentHTML('beforeend', button);

        let playButton = this.root.querySelector('.btn');
        if(this.state.isPlay) {
            playButton.classList.add('repeat-button');
            playButton.innerHTML = "";
        }

        playButton.onclick = () => {
            if(!this.state.isPlay) {
                this.startPlay();
            } else {
                this.repeatAudio();
            }
            
        };
        return this.root;
    }
}

export class PlayButtonState {
    constructor(isPlay, currentAudio) {
        this.isPlay = isPlay;
        this.currentAudio = currentAudio;
    }
}