import { BASE_URL } from '../../../config';
import { PATH } from '../../../constants';
import StyledGoogleLoginButton from './GoogleLoginButton.styles';

const GoogleLoginButton = () => {
  const handleClick = () => {
    const SCOPE = 'email%20profile';
    const RESPONSE_TYPE = 'token';
    const STATE = 'state';
    const REDIRECT_URL = BASE_URL + PATH.GOOGLE_REDIRECT;
    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
    let url = 'https://accounts.google.com/o/oauth2/v2/auth?';
    url += `scope=${SCOPE}&`;
    url += `response_type=${RESPONSE_TYPE}&`;
    url += `state=${STATE}&`;
    url += `redirect_uri=${REDIRECT_URL}&`;
    url += `client_id=${CLIENT_ID}`;

    console.log('REDIRECT_URL', REDIRECT_URL);
    console.log('url', url);

    window.open(url, '_self');
  };

  return <StyledGoogleLoginButton onClick={handleClick} />;
};

export default GoogleLoginButton;
