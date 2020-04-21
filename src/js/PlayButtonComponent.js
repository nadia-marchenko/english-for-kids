export class PlayButtonComponent {
    constructor() {
        this.root = document.createElement('div');
    }
    draw() {
        let button = `<button type="button" class="btn btn-primary btn-lg btn-block btn-danger">Play</button>`;
        this.root.insertAdjacentHTML('beforeend', button);
        return this.root;
    }
}