let baseUrl = 'http://localhost:3000';
let apiUrl = 'http://localhost:8888';
let webSocketUrl = 'ws://localhost:8888';

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://master.d3vlltn13xlacs.amplifyapp.com';
  apiUrl =
    'http://ec2-54-206-114-250.ap-southeast-2.compute.amazonaws.com:8888';
  webSocketUrl =
    'wss://ec2-54-206-114-250.ap-southeast-2.compute.amazonaws.com:8888';
}
export const WEBSITE_NAME = 'Pomodoro';

export const BASE_URL = baseUrl;

export const API_URL = apiUrl;

export const WEB_SOCKET_URL = webSocketUrl;
