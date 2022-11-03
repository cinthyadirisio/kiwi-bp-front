import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from './pages/welcome'
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((e) => (e === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className="App" id={theme}>
      <Welcome/>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    



    </ThemeContext.Provider>
  );
}

export default App;
