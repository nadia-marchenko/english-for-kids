export default class Helper {
  static createPageName(page) {
    return page[0].toUpperCase() + page.slice(1);
  }

  static shuffle(arr) {
    const res = arr;
    let j; let x; let i;
    for (i = arr.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      x = res[i];
      res[i] = res[j];
      res[j] = x;
    }
    return res;
  }
}
