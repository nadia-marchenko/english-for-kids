export class SwitcherComponent {
    constructor(state, toggleTrainingMode) {
        this.state = state;
        this.toggleTrainingMode = toggleTrainingMode;
        this.root = document.createElement('div');
    }

    draw() {
        const newSwitcher = `<label class='switch'>
            <input class="switch-input" type="checkbox" />
            <span class="switch-label" data-on="Train" data-off="Play"></span> 
            <span class="switch-handle"></span>
        </label>`;
        this.root.insertAdjacentHTML("beforeend", newSwitcher);
        
        if (this.state.isTraining) {
            this.root.querySelector('.switch-input').checked = true;
        } 
        this.root.querySelector('.switch-input').onclick = () => {
            this.toggleTrainingMode();
        }

        return this.root;
    }   
}

export class SwitcherState {
    constructor(isTraining) {
        this.isTraining = isTraining;
    }
}