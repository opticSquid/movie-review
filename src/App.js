import { useEffect, useState } from "react";
import { Grommet } from "grommet";
import ThemeContext from "./context/ThemeContext";
import { theme } from "./theme/brandTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginContext from "./context/LoginContext";
import Singin from "./components/Signin";
import { upload } from "./firebase/cron_jobs/dataUpload";
function App() {
  // useEffect(() => {
  //   upload();
  // }, []);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isLoggedin, setisLoggedin] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    uid: "",
    email: "",
    emailVerified: "",
    displayName: "",
    isAnonymous: "",
    photoURL: "",
    providerData: [
      {
        providerId: "",
        uid: "",
        displayName: "",
        email: "",
        phoneNumber: null,
        photoURL: "",
      },
    ],
    stsTokenManager: {
      refreshToken: "",
      accessToken: "",
      expirationTime: 0,
    },
    createdAt: "",
    lastLoginAt: "",
    apiKey: "",
    appName: "[DEFAULT]",
  });
  return (
    <Router>
      <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
        <LoginContext.Provider
          value={{ isLoggedin, loginInfo, setisLoggedin, setLoginInfo }}
        >
          <Grommet theme={theme} themeMode={isLightTheme ? "light" : "dark"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Singin />} />
            </Routes>
          </Grommet>
        </LoginContext.Provider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
