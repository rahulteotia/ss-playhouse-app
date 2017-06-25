var _userInfo = null;
export default {
    setUserInfo: (userInfo) => _userInfo = userInfo,
    getUserInfo: () => _userInfo,
    serverError: false
}