export class CategoryCardComponent {
    constructor (categoryName, categoryParent) {
        this.categoryName = categoryName;
        this.categoryParent = categoryParent;
    }
    draw () {
        const bootstrapCol = document.createElement('div');
        const card = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardBody = document.createElement('div');
        const cardText = document.createElement('p');

        bootstrapCol.className = "col-md-3 col-sm-6";   
        this.categoryParent.append(bootstrapCol);

        card.className = 'card train-color';
        bootstrapCol.append(card);

        cardImg.classList = 'card-img-top';
        cardImg.src = `../assets/categories/${this.categoryName}.jpeg`;
        cardImg.setAttribute('alt', this.categoryName);
        card.append(cardImg);

        cardBody.className = 'card-body';
        card.append(cardBody);

        cardText.className = 'card-text';
        cardText.innerHTML = this.categoryName[0].toUpperCase() + this.categoryName.slice(1);
        cardBody.append(cardText);
    }
}