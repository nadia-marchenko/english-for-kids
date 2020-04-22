export class SwitcherComponent {
    constructor(toggleTrainingMode, isTraining) {
        this.toggleTrainingMode = toggleTrainingMode;
        this.root = document.createElement('div');
        //state
        this.isTraining = isTraining;
    }

    draw() {
        const newSwitcher = `<label class='switch'>
            <input class="switch-input" type="checkbox" />
            <span class="switch-label" data-on="Train" data-off="Play"></span> 
            <span class="switch-handle"></span>
        </label>`;
        this.root.insertAdjacentHTML("beforeend", newSwitcher);
        
        if (this.isTraining) {
            this.root.querySelector('.switch-input').checked = true;
        } 
        this.root.querySelector('.switch-input').onclick = () => {
            setTimeout( () => {
                this.toggleTrainingMode();
              }, 400);
            
        }

        return this.root;
    }   
}