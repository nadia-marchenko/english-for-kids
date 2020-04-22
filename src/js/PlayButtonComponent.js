export default class PlayButtonComponent {
  constructor(startPlay, repeatAudio, isPlay) {
    this.root = document.createElement('div');
    this.startPlay = startPlay;
    this.repeatAudio = repeatAudio;
    // state
    this.isPlay = isPlay;
  }

  draw() {
    const button = '<button type="button" class="btn btn-primary btn-lg btn-block btn-danger">Play</button>';
    this.root.insertAdjacentHTML('beforeend', button);

    const playButton = this.root.querySelector('.btn');
    if (this.isPlay) {
      playButton.classList.add('repeat-button');
      playButton.innerHTML = '';
    }

    playButton.onclick = () => {
      if (!this.isPlay) {
        this.startPlay();
      } else {
        this.repeatAudio();
      }
    };
    return this.root;
  }
}
