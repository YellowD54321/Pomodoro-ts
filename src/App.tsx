import "./App.css";
import CounterPage from "./pages/counter/CounterPage";
import SettingPage from "./pages/setting/SettingPage";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PATH } from "./constants";
import LoginPage from "./pages/login/LoginPage";
import GoogleRedirectPage from "./pages/login/google/GoogleRedirectPage";
import CustomProviders from "./CustomProviders";
import ConfirmWindow from "./components/window/confirm/ConfirmWindow";
import InformationWindow from "./components/window/information/InformationWindow";
import AnalysisPage from "./pages/analysis/AnalysisPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path={PATH.HOME}
        element={<CounterPage />}
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.COUNTER}
        element={<CounterPage />}
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.ANALYSIS}
        element={<AnalysisPage />}
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.LOGIN}
        element={<LoginPage />}
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.GOOGLE_REDIRECT}
        element={<GoogleRedirectPage />}
        errorElement={<div>Error Page</div>}
      />
      <Route
        path={PATH.SETTING}
        element={<SettingPage />}
        errorElement={<div>Error Page</div>}
      />
    </Route>
  )
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
