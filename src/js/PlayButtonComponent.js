export default class PlayButtonComponent {
  constructor(startPlay, repeatAudio) {
    this.root = document.createElement('div');
    this.startPlay = startPlay;
    this.repeatAudio = repeatAudio;
    // state
    // this.isPlay = isPlay;
  }

  init() {
    const button = '<button type="button" class="btn btn-primary btn-lg btn-block btn-danger">Play</button>';
    this.root.insertAdjacentHTML('beforeend', button);

    const playButton = this.root.querySelector('.btn');

    playButton.onclick = () => {
      this.changeToRepeatButton();
    };
    
    // if (this.isPlay) {
    //   playButton.classList.add('repeat-button');
    //   playButton.innerHTML = '';
    // }

    // playButton.onclick = () => {
    //   if (!this.isPlay) {
    //     this.startPlay();
    //   } else {
    //     this.repeatAudio();
    //   }
    // };
    return this.root;
  }

  hide() {
    this.root.classList.add('hidden');
  }

  show() {
    this.root.classList.remove('hidden');
  }

  changeToPlayButton() {
    this.root.querySelector('.btn').classList.remove('repeat-button');
    this.root.querySelector('.btn').innerHTML = 'Play';

    const playButton = this.root.querySelector('.btn');

    playButton.onclick = () => {
      this.changeToRepeatButton();
    };
  }

  changeToRepeatButton() {
    const playButton = this.root.querySelector('.btn');
    playButton.classList.add('repeat-button');
    playButton.innerHTML = '';
    this.startPlay();
    playButton.onclick = () => {
      this.repeatAudio();
    };
  }

}
