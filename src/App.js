import { useState } from "react";
import { Grommet } from "grommet";
import ThemeContext from "./context/ThemeContext";
import { theme } from "./theme/brandTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginContext from "./context/LoginContext";
function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isLoggedin, setisLoggedin] = useState(true);
  const [loginInfo, setLoginInfo] = useState({ name: "", email: "" });
  return (
    <Router>
      <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
        <LoginContext.Provider
          value={{ isLoggedin, loginInfo, setisLoggedin, setLoginInfo }}
        >
          <Grommet theme={theme} themeMode={isLightTheme ? "light" : "dark"}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Grommet>
        </LoginContext.Provider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
