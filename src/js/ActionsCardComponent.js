import { TrainingCardComponent } from "./TrainingCardComponent";

//Import images
function importAll (r) {
    r.keys().forEach(r);
  }
importAll(require.context('../assets/categories/actions', true, /\.jpeg$/));

//Import audios
importAll(require.context('../assets/categories/actions', true, /\.mp3$/));

export class ActionsCardComponent {
    
    constructor (state) {
        this.state = state;
    }

    draw () {
        // Remove main page
        document.querySelector('.row').remove();

        const h1 = document.createElement('h1');
        h1.className = 'titleCategory';
        h1.innerHTML = "Actions";
        document.querySelector('.cards__wrapper').before(h1);
        this.addBreadCrumbs('Actions');
        // new CategoryCardComponent('Actions', "").addBreadCrumbs();

        // const main = document.createElement('main');
        // const wrapper = document.createElement('div');
        const cardWrapper = document.querySelector('.cards__wrapper');
        const row = document.createElement('div');
        
        // const header = document.getElementById('header');
        // header.after(main);

        // wrapper.className = 'wrapper';
        // main.append(wrapper);

        // cardWrapper.className = 'cards__wrapper';
        // wrapper.append(cardWrapper);

        row.className = 'row';
        cardWrapper.append(row);

        //Add audio
        const audio = document.createElement('audio');
        audio.className = 'audio';
        row.append(audio);

        const actionsCategory = ['dance', 'eat', 'help', 'jump', 'push', 'read', 'smile', 'swim'];

        for (let i = 0; i < actionsCategory.length; i++) {
            new TrainingCardComponent('actions', actionsCategory[i], row).draw();
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