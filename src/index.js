import PageComponent from './js/PageComponent';

function getCategoryFromURL() {
  if (window.location.hash === '') {
    return 'main';
  }
  return window.location.hash.slice(2);
}

const currentCategory = getCategoryFromURL();
const page = new PageComponent(currentCategory, true);

page.draw();

window.onhashchange = function () {
  page.changeCategory(getCategoryFromURL());
};
