import { useContext } from "react";
import LoginContext from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/Authentication";
import { signInWithPopup } from "firebase/auth";
import { Box, Button, Text } from "grommet";
import { Google } from "grommet-icons";
const Singin = () => {
  const { isLoggedin, setisLoggedin, loginInfo, setLoginInfo } =
    useContext(LoginContext);
  const navigate = useNavigate();
  const handleGoogleAuth = async () => {
    const data = await signInWithPopup(auth, provider);
    console.log("signin data: ", data);
    setLoginInfo(data.user);
    setisLoggedin(true);
    navigate("/");
  };
  return (
    <Box fill align="center" justify="center">
      <Button
        primary
        size="large"
        color="brand"
        style={{ padding: "0.7%" }}
        onClick={handleGoogleAuth}
      >
        <Box direction="row" pad="xsmall" gap="small">
          <Google color="white" />
          <Text size="medium"> sign-in with Google</Text>
        </Box>
      </Button>
    </Box>
  );
};

export default Singin;
