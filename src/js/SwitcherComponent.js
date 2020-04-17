export class SwitcherComponent {
    constructor(state) {
        this.state = state;
    }

    draw() {
        let switcher = document.createElement('div');
        switcher.className = 'switch';

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        
        document.querySelector('.header__wrapper').append(switcher);
        switcher.append(input);
    }

    toggle() {
        this.changeState(new SwitcherState(!this.state.isTrain));
      }

    changeState (newState) {
        this.state = newState;
        this.draw();
    }
        
}

export class SwitcherState {
    constructor(isTrain) {
        this.isTrain = isTrain;
    }
}