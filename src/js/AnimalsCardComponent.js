import { TrainingCardComponent } from "./TrainingCardComponent";

//Import images
function importAll (r) {
    r.keys().forEach(r);
  }
importAll(require.context('../assets/categories/animals', true, /\.jpeg$/));

//Import audios
importAll(require.context('../assets/categories/animals', true, /\.mp3$/));

export class AnimalsCardComponent {
    
    constructor (state) {
        this.state = state;
    }

    draw () {
        // Remove main page
        document.querySelector('.row').remove();

        const h1 = document.createElement('h1');
        h1.className = 'titleCategory';
        h1.innerHTML = "Animals";
        document.querySelector('.cards__wrapper').before(h1);
        this.addBreadCrumbs('Animals');
        const cardWrapper = document.querySelector('.cards__wrapper');
        const row = document.createElement('div');

        row.className = 'row';
        cardWrapper.append(row);

 

        const actionsCategory = ['deer', 'giraffe', 'hamster', 'ostrich', 'panda', 'shark', 'squirrel', 'turtle'];

        for (let i = 0; i < actionsCategory.length; i++) {
            new TrainingCardComponent('animals', actionsCategory[i], row).draw();
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