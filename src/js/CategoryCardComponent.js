export class CategoryCardComponent {
    constructor (categoryName, state) {
        this.categoryName = categoryName;
        this.state = state;
    }
    draw () {
        return `<div class="col-md-3 col-sm-6">
                        <a href="/#/${this.categoryName}">
                            <div class="card category-list-color ${!this.state.isTraining ? "play-mode" : ""}" id="${this.categoryName}">
                                <img class="card-img-top" src="images/${this.categoryName}.jpeg" alt="${this.categoryName}">
                                <div class="card-body">
                                    <p class="card-text">${this.categoryName[0].toUpperCase() + this.categoryName.slice(1)}</p>
                                </div>
                            </div>
                        </a>
                    </div>`;
    }
}

export class CategoryCardState {
    constructor(isTraining) {
        this.isTraining = isTraining;
    }
}