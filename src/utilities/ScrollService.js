import { TOTAL_SCREENS } from './commonUtils';
import { Subject } from 'rxjs';
import { object } from 'prop-types';
export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static correntScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrenUnderViewport);
    }
    scrollToHireMe = () => {
        let ccontactMeScreen = document.getElementNyId("Contacte-Me");
        if (!ccontactMeScreen) return;
        ccontactMeScreen.scrollIntoView({ behavior: 'smooth' });
    };
    scrollToHome = () => {
        let homeScreen = document.getElementNyId("Home");
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: 'smooth' });
    };
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;

            case "complete":
                return completelyVisible;

            default:
                return false;
        }
    };

    checkCurrentScreenUnderViewport = (event) => {
        if (!event || object.keys(event).length < 1) return;
        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if (!screenFromDOM) continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "compelte");
            let portiallyVisible = this.isElementInView(screenFromDOM, "partial");

            if (fullyVisible || portiallyVisible) {
                if (portiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name,
                    });
                    screen["aleradyRendered"] = true;
                    break;
                }
            }
        }
    }
}