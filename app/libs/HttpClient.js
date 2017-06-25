import defaults from 'superagent-defaults';
import nocache from 'superagent-no-cache';
import prefix from 'superagent-prefix';

import * as navigator from './../util/NavigationHelper';
import session from './../util/UserSession';

import AppStateActions from './../actions/AppStateActions';
import {ERROR_STATE} from './../util/Enumerations';
import {API_URL} from './../util/Constant';

const simpleRestClient = defaults();
const cachedRestClient = defaults();
const callPrefix = prefix(API_URL);

simpleRestClient.use(callPrefix) // Prefixes request
    .use(nocache) // Prevents caching
    .timeout(30000)
    .withCredentials()
    .set('domainUuid', '4340fe19-52e8-11e5-9b0a-f0761c68e636');

cachedRestClient.use(callPrefix) // Prefixes request
    .timeout(30000)
    .withCredentials()
    .set('domainUuid', '4340fe19-52e8-11e5-9b0a-f0761c68e636');

export var restClient = simpleRestClient;
export var cacheRestClient = cachedRestClient;

export function executeRequest(request, callback) {
    request.end(function (error, response) {
        let proceed = true;
        //HANDLE SESSION TIMEOUT / UNAUTHENTICATED USERS
        if (response && !response.ok && response.statusCode == 401) {
            //console.log('response:', response);
            proceed = false;
            navigator.navigateTo('login', true);
        } else if (!response && error && !error.status) {
            //IF THERE IS NO STATUS CODE THEN THE ERROR is related to Network failures, timeouts, and other errors
            console.error('Network Error:', error);
            //session.serverError = true;
            AppStateActions.setErrorState({errorState: ERROR_STATE.NETWORK});
        }
        if (proceed) {
            callback(error, response);
        }
    });
}