import { TrainingCardComponent } from "./TrainingCardComponent";

export class PlayCardsComponent {
    
    constructor (category, words) {
        this.category = category;
        this.words = words;
    }

    draw () {
        // Remove main page
        document.querySelector('.row').remove();

        const h1 = document.createElement('h1');
        h1.className = 'titleCategory';
        h1.innerHTML = this.category[0].toUpperCase() + this.category.slice(1);
        document.querySelector('.cards__wrapper').before(h1);
        this.addBreadCrumbs(this.category[0].toUpperCase() + this.category.slice(1));
        const cardWrapper = document.querySelector('.cards__wrapper');
        const row = document.createElement('div');

        row.className = 'row';
        cardWrapper.append(row);

        for (let i = 0; i < this.words.length; i++) {
            row.append(new TrainingCardComponent(this.words[i]).draw());
            
        }
    }

    addBreadCrumbs(categoryName) {
      let ol = document.createElement('ol');
      ol.className = 'breadcrumb';
      let liHome = document.createElement('li');
      liHome.className = 'breadcrumb-item';
      liHome.innerHTML = '<a href="#">Home</a>';
      let liCurrent = document.createElement('li');
      liCurrent.className = 'breadcrumb-item active';
      liCurrent.innerHTML = categoryName;
      ol.append(liHome);
      ol.append(liCurrent);
      document.querySelector('.titleCategory').before(ol);
    }
}