import { PageComponent, PageState } from './js/PageComponent';

function getCategoryFromURL() {
    if(window.location.hash === "") {
        return "main";
    } else {
        return window.location.hash.slice(2);
    }
}

const currentCategory = getCategoryFromURL();
const page = new PageComponent(new PageState(currentCategory));

page.draw();

window.onhashchange = function() { 
    page.changeCategory(getCategoryFromURL());
}