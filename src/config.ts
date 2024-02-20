let baseUrl = 'http://localhost:3000';
let apiUrl = 'http://localhost:8888';
let webSocketUrl = 'ws://localhost:8888';

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://pomodiver.com';
  apiUrl = 'https://api.pomodiver.com';
  webSocketUrl = 'wss://api.pomodiver.com';
}
export const WEBSITE_NAME = 'Pomodoro';

export const BASE_URL = baseUrl;

export const API_URL = apiUrl;

export const WEB_SOCKET_URL = webSocketUrl;
