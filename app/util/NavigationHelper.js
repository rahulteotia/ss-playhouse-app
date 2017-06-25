import RouterContainer from './../services/RouterContainer';
import {APP_BASE_PATH} from './Constant';


export function navigateToNextPath(defaultPath) {
    const history = RouterContainer.get();
    const location = RouterContainer.getLocation();
    if (location.state && location.state.nextPathname) {
        const path = location.state.nextPathname;
        console.log('Navigating to next Path:', path);
        history.replaceState(null, path);
        //history.pushState(null, path);
    } else {
        const fallback = defaultPath || APP_BASE_PATH;
        console.log('Navigating to fallback Path:', fallback);
        history.replaceState(null, fallback)
    }
}

export function navigateTo(path, relativeToRoot) {
    if (relativeToRoot) {
        path = APP_BASE_PATH + path;
    }
    const history = RouterContainer.get();
    //history.replaceState(null, path);
    history.pushState(null, path);
}

