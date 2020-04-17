import { MenuComponent } from './MenuComponent';
import { MenuState } from './MenuComponent';
import { SwitcherComponent } from './SwitcherComponent';
import { SwitcherState } from './SwitcherComponent';

export class HeaderComponent {
    draw () {
        let menu = new MenuComponent(new MenuState(false));
        menu.draw();
        let switcher = new SwitcherComponent(new SwitcherState(true));
        switcher.draw();
    }
}