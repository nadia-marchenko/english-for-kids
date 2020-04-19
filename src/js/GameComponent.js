import { CategoryCardComponent } from "./CategoryCardComponent";
import { PlayCardsComponent } from "./PlayCardsComponent";

//Import images
function importAll (r) {
    r.keys().forEach(r);
  }
importAll(require.context('../assets/categories', true, /\.jpeg$/));
importAll(require.context('../assets/categories', true, /\.mp3$/));

export class GameComponent {
    constructor(state) {
        this.state = state;
    }

    draw() {
        const main = document.createElement('main');
        const wrapper = document.createElement('div');
        const cardWrapper = document.createElement('div');
        const row = document.createElement('div');
        const header = document.getElementById('header');
        const MainPage = ['actions', 'adjectives', 'animals', 'clothes', 'emotions', 'flowers', 'food', 'kitchen'];
        const actionsWords = ['dance', 'eat', 'help', 'jump', 'push', 'read', 'smile', 'swim'];
        const adjectivesWords = ['anxious', 'bossy', 'cheerful', 'grumpy', 'pleased', 'rapid', 'shy', 'stubborn'];
        const animalsWords = ['deer', 'giraffe', 'hamster', 'ostrich', 'panda', 'shark', 'squirrel', 'turtle'];
        const clothesWords = ['blouse', 'dress', 'hat', 'scarf', 'skirt', 'suit', 't-shirt', 'tie'];
        const emotionsWords = ['angry', 'calm', 'embarrassed', 'excited', 'exhausted', 'lonely', 'nervous', 'scared'];
        const flowersWords = ['chamomile', 'daffodils', 'jasmine', 'lotus', 'peony', 'rose', 'sunflower', 'tulip'];
        const foodWords = ['cheese', 'croissant', 'egg', 'ham', 'lettuce', 'pancake', 'sandwich', 'soup'];
        const kitchenWords = ['bowl', 'grater', 'kettle', 'ladle', 'pan', 'plate', 'spoon', 'whisk'];

        const actionsWordsTranslations = ['танцевать', 'кушать', 'помогать', 'прыгать', 'толкать', 'читать', 'улыбаться', 'плавать'];
        const adjectivesWordsTranslations = ['тревожный', 'занятый', 'веселый', 'сердитый', 'довольный', 'быстрый', 'стеснительный', 'упрямый'];
        const animalsWordsTranslations = ['олень', 'жираф', 'хомяк', 'страус', 'панда', 'акула', 'белка', 'черепаха'];
        const clothesWordsTranslations = ['блузка', 'платье', 'шапка', 'шарф', 'юбка', 'костюм', 'футболка', 'галстук'];
        const emotionsWordsTranslations = ['сердитый', 'спокойный', 'смущенный', 'возбужденный', 'измученный', 'одинокий', 'нервный', 'испуганный'];
        const flowersWordsTranslations = ['ромашка', 'нарцисы', 'жасмин', 'лотос', 'пион', 'роза', 'подсолнух', 'тюльпан'];
        const foodWordsTranslations = ['сыр', 'круассан', 'яйцо', 'ветчина', 'салат', 'блин', 'бутерброд', 'суп'];
        const kitchenWordsTranslations = ['миска', 'терка', 'чайник', 'черпак', 'сковорода', 'тарелка', 'ложка', 'венчик'];

        header.after(main);

        wrapper.className = 'wrapper';
        main.append(wrapper);

        cardWrapper.className = 'cards__wrapper';
        wrapper.append(cardWrapper);

        row.className = 'row';
        cardWrapper.append(row);

        switch(this.state.currentPage) {
            case 'actions':
                new PlayCardsComponent("actions", actionsWords, actionsWordsTranslations).draw();
                break;
            case 'adjectives':
                new PlayCardsComponent("adjectives", adjectivesWords, adjectivesWordsTranslations).draw();
                break;
            case 'animals':
                new PlayCardsComponent("animals", animalsWords, animalsWordsTranslations).draw(); 
                break;
            case 'clothes':
                new PlayCardsComponent("clothes", clothesWords, clothesWordsTranslations).draw();
                break;
            case 'emotions':
                new PlayCardsComponent("emotions", emotionsWords, emotionsWordsTranslations).draw();
                break;
            case 'flowers':
                new PlayCardsComponent("flowers", flowersWords, flowersWordsTranslations).draw(); 
                break;
            case 'food':
                new PlayCardsComponent("food", foodWords, foodWordsTranslations).draw();
                break;
            case 'kitchen':
                new PlayCardsComponent("kitchen", kitchenWords, kitchenWordsTranslations).draw();
                break;
            default:
                for (let i = 0; i < MainPage.length; i++) {
                    new CategoryCardComponent(MainPage[i], row).draw();
                }
        }

    }
}

export class GameState {
    constructor (currentPage) {  
        this.currentPage = currentPage;
    }
}