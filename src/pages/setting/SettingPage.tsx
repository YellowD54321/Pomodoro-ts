import { useContext } from 'react';
import ThemeContext, {
  darkTheme,
  lightTheme,
} from '../../contexts/themeContext/ThemeContext';

const SettingPage = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
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
