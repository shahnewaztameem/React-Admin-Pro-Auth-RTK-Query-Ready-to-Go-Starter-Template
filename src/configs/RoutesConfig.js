import React from 'react';
import NProgress from 'nprogress';
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig';

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: 'ease-in-out',
  speed: 500,
  trickle: true,
  trickleRate: 0.02,
});

// Custom loader with incremental progress
const withProgress = promise => {
  NProgress.start();
  const progressInterval = setInterval(() => {
    if (NProgress.status < 0.9) {
      NProgress.inc(0.1);
    }
  }, 300);

  return promise.finally(() => {
    clearInterval(progressInterval);
    NProgress.done();
  });
};

export const publicRoutes = [
  {
    key: 'login',
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() => withProgress(import('views/auth-views/authentication/login'))),
  },
  {
    key: 'register',
    path: `${AUTH_PREFIX_PATH}/register`,
    component: React.lazy(() => withProgress(import('views/auth-views/authentication/register'))),
  },
  {
    key: 'forgot-password',
    path: `${AUTH_PREFIX_PATH}/forgot-password`,
    component: React.lazy(() => withProgress(import('views/auth-views/authentication/forgot-password'))),
  },
];

export const protectedRoutes = [
  {
    key: 'dashboard.default',
    path: `${APP_PREFIX_PATH}/dashboards/default`,
    component: React.lazy(() => withProgress(import('views/app-views/dashboards/default'))),
  },
];
