import fetch from 'auth/FetchInterceptor';

const AuthService = {};

AuthService.login = function (data) {
  return fetch({
    url: '/login',
    method: 'post',
    data,
  });
};

AuthService.register = function (data) {
  return fetch({
    url: '/auth/register',
    method: 'post',
    data,
  });
};

AuthService.logout = function () {
  return fetch({
    url: '/auth/logout',
    method: 'post',
  });
};

AuthService.loginInOAuth = function () {
  return fetch({
    url: '/auth/loginInOAuth',
    method: 'post',
  });
};

export default AuthService;
