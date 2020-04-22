export class MenuCardComponent {
    constructor (categoryName, isTraining) {
        this.categoryName = categoryName;
        //state
        this.isTraining = isTraining;
    }
    draw () {
        
        return `<div class="col-md-3 col-sm-6">
                        <a href="/#/${this.categoryName}">
                            <div class="card category-list-color ${!this.isTraining ? "play-mode" : ""}" id="${this.categoryName}">
                                <img class="card-img-top" src="images/${this.categoryName}.jpeg" alt="${this.categoryName}">
                                <div class="card-body">
                                    <p class="card-text">${this.categoryName[0].toUpperCase() + this.categoryName.slice(1)}</p>
                                </div>
                            </div>
                        </a>
                    </div>`;
    }
}
