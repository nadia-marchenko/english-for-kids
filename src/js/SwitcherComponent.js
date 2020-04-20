export class SwitcherComponent {
    constructor(state) {
        this.state = state;
    }

    draw() {
        // let switcher = document.createElement('div');
        // switcher.className = 'switch';

        // let input = document.createElement('input');
        // input.setAttribute('type', 'checkbox');
        
        // document.querySelector('.header__wrapper').append(switcher);
        // switcher.append(input);

        const newSwitcher = `<label class="switch">
                                <input class="switch-input" type="checkbox" />
                                <span class="switch-label" data-on="Train" data-off="Play"></span> 
                                <span class="switch-handle"></span> 
                            </label>`;
        document.querySelector('.header__wrapper').insertAdjacentHTML('beforeend', newSwitcher);
        if (this.state.isTraining) {
            document.querySelector(".switch").click();
        } 
    }

    toggle() {
        this.changeState(new SwitcherState(!this.state.isTraining));
      }

    changeState (newState) {
        this.state = newState;
        this.draw();
    }
        
}

export class SwitcherState {
    constructor(isTraining) {
        this.isTraining = isTraining;
    }
}