export const PATH = {
  HOME: '/',
  COUNTER: '/',
  LOGIN: '/login/',
  GOOGLE_REDIRECT: '/login/google-redirect/',
  SETTING: '/setting/',
  ANALYSIS: '/analysis/',
  POSTS: '/posts/',
  USER: '/user/',
};

export const API_PATH = {
  // account
  REFRESH_LOGIN_OKEN: '/v1/token/refresh/',
  REGISTER_WITH_GOOGLE: '/v1/user/register/google/',
  LOGIN_WITH_GOOGLE: '/v1/user/login/google/',

  // duration
  DURATION: '/v1/durations/',

  // analysis
  ANALYSIS_DAY: '/v1/analysis/day',
  ANALYSIS_MONTH: '/v1/analysis/month',

  // posts
  POSTS: '/v1/posts/',
  LIKE_POST: '/v1/post/like/',

  // notification
  NOTIFICATION: '/v1/notification',

  // test
  LOGIN_TEST_ACCOUNT: '/v1/user/login/tester/',
  CREATE_TEST_DATA: '/v1/durations/test-data/',
};

export const COLORS = {
  MAIN_LIGHT: 'lightBlue',
  SUB_LIGHT: '#5abedf',
  SHADOW_LIGHT: '#81c2d8',
  BARCHART_CURRENT: 'green',
  BARCHART_LAST: 'lightgreen',
};
