import { createContext } from "react";
const LoginContext = createContext({
  isLoggedin: false,
  loginInfo: {},
  setisLoggedin: () => {},
  setLoginInfo: () => {},
});
export default LoginContext;
