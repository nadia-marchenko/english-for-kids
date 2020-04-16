export class SwitcherComponent {
    constructor(state) {
        this.state = state;
    }

    draw() {
        let switcher = document.createElement('div');
        switcher.className = 'switch';

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');

        document.getElementById('header__burger').after(switcher);
        switcher.append(input);
    }

    toggle() {
        this.changeState(new SwitcherState(!this.state.isTrain));
      }
        
}

class SwitcherState {
    constructor(isTrain) {
        this.isTrain = isTrain;
    }
}