import PageComponent from './js/PageComponent';

function getCategoryFromURL() {
  if (window.location.hash === '') {
    return 'main';
  }
  return window.location.hash.slice(2);
}

const currentPage = getCategoryFromURL();
const page = new PageComponent();

page.init(currentPage);

window.onhashchange = () => {
  page.changeCurrentPage(getCategoryFromURL());
};
