import Alt from 'alt';
import chromeDebug from 'alt/utils/chromeDebug';

const alt = new Alt();
if (process.env.NODE_ENV === 'development') {
    chromeDebug(alt);
}

export default alt;