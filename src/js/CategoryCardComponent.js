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
        const href = document.createElement('a');

        bootstrapCol.className = "col-md-3 col-sm-6";   

        href.setAttribute('href', `/#/${this.categoryName}`);
        this.categoryParent.append(bootstrapCol);

        card.className = 'card category-list-color';
        card.setAttribute('id', this.categoryName);
        bootstrapCol.append(href);
        href.append(card);

        cardImg.classList = 'card-img-top';
        cardImg.src = `images/${this.categoryName}.jpeg`;
        cardImg.setAttribute('alt', this.categoryName);
        card.append(cardImg);

        cardBody.className = 'card-body';
        card.append(cardBody);

        cardText.className = 'card-text';
        cardText.innerHTML = this.categoryName[0].toUpperCase() + this.categoryName.slice(1);
        cardBody.append(cardText);
    }
}