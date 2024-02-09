import { useContext } from 'react';
import ThemeContext, {
  darkTheme,
  lightTheme,
} from '../../contexts/themeContext/ThemeContext';
import Navigation from '../../components/navigation/Navigation';

const SettingPage = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <Navigation />
      <button
        onClick={() =>
          setTheme((preTheme) =>
            preTheme === lightTheme ? darkTheme : lightTheme,
          )
        }
      >
        Switch Theme
      </button>
    </div>
  );
};

export default SettingPage;
