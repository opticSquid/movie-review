import { useContext, useState } from "react";
import { Box, Header, Button, Text, Avatar, Menu } from "grommet";
import { Menu as MenuIcon, Video, Sun, Moon, User } from "grommet-icons";
import ThemeContext from "../context/ThemeContext";
import LoginContext from "../context/LoginContext";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const { isLightTheme, setIsLightTheme } = useContext(ThemeContext);
  const { isLoggedin, setisLoggedin, loginInfo, setLoginInfo } =
    useContext(LoginContext);
  const [thCounter, setThCounter] = useState(0);
  const changeTheme = () => {
    setThCounter((prevState) => prevState + 1);
    setIsLightTheme(!isLightTheme);
  };
  const handleLogout = () => {
    setisLoggedin(false);
    setLoginInfo({});
  };
  return (
    <Header background="background-front" fill="horizontal" pad="small" sticky>
      <Box
        direction="row"
        gap="medium"
        align="start"
        pad={{ vertical: "small" }}
        responsive={false}
      >
        <Button hoverIndicator>
          <MenuIcon />
        </Button>
        <Box direction="row" gap="xsmall" wrap>
          <Video color="brand" />
          <Text color="text-strong" weight="bold">
            Movie Meter
          </Text>
        </Box>
      </Box>
      <Box direction="row" gap="medium" align="end" pad={{ vertical: "small" }}>
        <Button onClick={changeTheme}>
          {thCounter % 2 === 0 ? <Sun color="brand" /> : <Moon />}
        </Button>
        {isLoggedin ? (
          <Menu
            label={<Avatar size="medium" src={loginInfo.photoURL} />}
            items={[{ label: <Button onClick={handleLogout}>Log Out</Button> }]}
          />
        ) : (
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Avatar
              background={isLightTheme === true ? "brand" : "background-front"}
            >
              <User color="white" />
            </Avatar>
          </Link>
        )}
      </Box>
    </Header>
  );
};

export default HeaderBar;
