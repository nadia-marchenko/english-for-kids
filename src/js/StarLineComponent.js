export class StarLineComponent {
    constructor(state) {
        this.state = state;
        this.root = document.createElement('div');
    }
    draw() {
        this.root.className = "rating";
        let string = '';

        for(let i = 0; i < this.state.answersArray.length; i += 1) {
            if(this.state.answersArray[i]) {
                const stars = `<div class = "star"></div>`;
                string += stars;
            } else {
                const stars = `<div class = "lose-star"></div>`;
                string += stars;
            }
            
        }
        this.root.insertAdjacentHTML('beforeend', string);

        return this.root;
    }
}

export class StarLineState {
    constructor(answersArray) {
        this.answersArray = answersArray;
    }
}