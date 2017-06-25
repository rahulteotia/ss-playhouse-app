import {History} from 'react-router';

var _router = null;
var _location = null;
var _routes = null;
export default {
    set: (router) => _router = router,
    get: () => _router,
    setLocation: (location) => _location = location,
    getLocation: () => _location,
    setRoutes: (routes) => _routes = routes,
    getRoutes: () => _routes
}