export default class CategoryProvider {
  constructor() {
    this.words = {
      actions: [
        { word: 'dance', translation: 'танцевать' },
        { word: 'eat', translation: 'кушать' },
        { word: 'help', translation: 'помогать' },
        { word: 'jump', translation: 'прыгать' },
        { word: 'push', translation: 'толкать' },
        { word: 'read', translation: 'читать' },
        { word: 'smile', translation: 'улыбаться' },
        { word: 'swim', translation: 'плавать' },
      ],
      adjectives: [
        { word: 'anxious', translation: 'тревожный' },
        { word: 'bossy', translation: 'занятый' },
        { word: 'cheerful', translation: 'веселый' },
        { word: 'grumpy', translation: 'сердитый' },
        { word: 'pleased', translation: 'довольный' },
        { word: 'rapid', translation: 'быстрый' },
        { word: 'shy', translation: 'стеснительный' },
        { word: 'stubborn', translation: 'упрямый' },
      ],
      animals: [
        { word: 'deer', translation: 'олень' },
        { word: 'giraffe', translation: 'жираф' },
        { word: 'hamster', translation: 'хомяк' },
        { word: 'ostrich', translation: 'страус' },
        { word: 'panda', translation: 'панда' },
        { word: 'shark', translation: 'акула' },
        { word: 'squirrel', translation: 'белка' },
        { word: 'turtle', translation: 'черепаха' },
      ],
      clothes: [
        { word: 'blouse', translation: 'блузка' },
        { word: 'dress', translation: 'платье' },
        { word: 'hat', translation: 'шапка' },
        { word: 'scarf', translation: 'шарф' },
        { word: 'skirt', translation: 'юбка' },
        { word: 'suit', translation: 'костюм' },
        { word: 't-shirt', translation: 'футболка' },
        { word: 'tie', translation: 'галстук' },
      ],
      emotions: [
        { word: 'angry', translation: 'сердитый' },
        { word: 'calm', translation: 'спокойный' },
        { word: 'embarrassed', translation: 'смущенный' },
        { word: 'excited', translation: 'возбужденный' },
        { word: 'exhausted', translation: 'измученный' },
        { word: 'lonely', translation: 'одинокий' },
        { word: 'nervous', translation: 'нервный' },
        { word: 'scared', translation: 'испуганный' },
      ],
      flowers: [
        { word: 'chamomile', translation: 'ромашка' },
        { word: 'daffodils', translation: 'нарциссы' },
        { word: 'jasmine', translation: 'жасмин' },
        { word: 'lotus', translation: 'лотос' },
        { word: 'peony', translation: 'пион' },
        { word: 'rose', translation: 'роза' },
        { word: 'sunflower', translation: 'подсолнух' },
        { word: 'tulip', translation: 'тюльпан' },
      ],
      food: [
        { word: 'cheese', translation: 'сыр' },
        { word: 'croissant', translation: 'круассан' },
        { word: 'egg', translation: 'яйцо' },
        { word: 'ham', translation: 'ветчина' },
        { word: 'lettuce', translation: 'салат' },
        { word: 'pancake', translation: 'блин' },
        { word: 'sandwich', translation: 'бутерброд' },
        { word: 'soup', translation: 'суп' },
      ],
      kitchen: [
        { word: 'bowl', translation: 'миска' },
        { word: 'grater', translation: 'терка' },
        { word: 'kettle', translation: 'чайник' },
        { word: 'ladle', translation: 'черпак' },
        { word: 'pan', translation: 'сковорода' },
        { word: 'plate', translation: 'тарелка' },
        { word: 'spoon', translation: 'ложка' },
        { word: 'whisk', translation: 'венчик' },
      ],
    };
  }

  getCategories() {
    return Object.keys(this.words);
  }

  getCategoriesWords(category) {
    const arr = [];
    let i = '';
    for (i in this.words[category]) {
      arr.push(this.words[category][i].word);
    }
    return arr;
  }

  getCategoriesTranslations(category) {
    const arr = [];
    let i = '';
    for (i in this.words[category]) {
      arr.push(this.words[category][i].translation);
    }
    return arr;
  }

  getCategoriesWordsAndTranslations(category) {
    return this.words[category];
  }
}
