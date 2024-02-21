import './App.css';
import CounterPage from './pages/counter/CounterPage';
import SettingPage from './pages/setting/SettingPage';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { PATH } from './constants';
import LoginPage from './pages/login/LoginPage';
import GoogleRedirectPage from './pages/login/google/GoogleRedirectPage';
import CustomProviders from './CustomProviders';
import ConfirmWindow from './components/window/confirm/ConfirmWindow';
import InformationWindow from './components/window/information/InformationWindow';
import AnalysisPage from './pages/analysis/AnalysisPage';
import Header from './components/header/Header';
import PostsPage from './pages/posts/PostsPage';
import UserInfoPage from './pages/user/UserInfoPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path={PATH.HOME}
        element={
          <>
            <Header />
            <CounterPage />
          </>
        }
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.COUNTER}
        element={
          <>
            <Header />
            <CounterPage />
          </>
        }
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.POSTS}
        element={
          <>
            <Header />
            <PostsPage />
          </>
        }
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.ANALYSIS}
        element={
          <>
            <Header />
            <AnalysisPage />
          </>
        }
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.LOGIN}
        element={
          <>
            <Header />
            <LoginPage />
          </>
        }
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.GOOGLE_REDIRECT}
        element={
          <>
            <Header />
            <GoogleRedirectPage />
          </>
        }
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.SETTING}
        element={
          <>
            <Header />
            <SettingPage />
          </>
        }
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.USER}
        element={
          <>
            <Header />
            <UserInfoPage />
          </>
        }
        errorElement={<div>Error Page</div>}
      />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <CustomProviders>
        <RouterProvider router={router} />
        <ConfirmWindow />
        <InformationWindow />
      </CustomProviders>
    </div>
  );
}

export default App;
