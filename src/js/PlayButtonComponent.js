export class PlayButtonComponent {
    constructor() {

    }
    draw() {
        const root = `<button type="button" class="btn btn-primary btn-lg btn-block btn-danger">Play</button>`;
        document.querySelector('.main__wrapper').insertAdjacentHTML('beforeend', root);
    }
}