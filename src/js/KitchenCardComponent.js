import { TrainingCardComponent } from "./TrainingCardComponent";

//Import images
function importAll (r) {
    r.keys().forEach(r);
  }
importAll(require.context('../assets/categories/kitchen', true, /\.jpeg$/));

//Import audios
importAll(require.context('../assets/categories/kitchen', true, /\.mp3$/));

export class KitchenCardComponent {
    
    constructor (state) {
        this.state = state;
    }

    draw () {
        // Remove main page
        document.querySelector('.row').remove();

        const h1 = document.createElement('h1');
        h1.className = 'titleCategory';
        h1.innerHTML = "Kitchen";
        document.querySelector('.cards__wrapper').before(h1);
        this.addBreadCrumbs('Kitchen');
        const cardWrapper = document.querySelector('.cards__wrapper');
        const row = document.createElement('div');

        row.className = 'row';
        cardWrapper.append(row);

 

        const kitchenCategory = ['bowl', 'grater', 'kettle', 'ladle', 'pan', 'plate', 'spoon', 'whisk'];

        for (let i = 0; i < kitchenCategory.length; i++) {
            new TrainingCardComponent('kitchen', kitchenCategory[i], row).draw();
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