import { Box } from "grommet";
import HeaderBar from "./HeaderBar";
import Trending from "./HomeDataGrid/Trending";
const Home = () => {
  return (
    <Box>
      <HeaderBar />
      <Trending />
    </Box>
  );
};

export default Home;
