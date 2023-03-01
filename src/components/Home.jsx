import { Box } from "grommet";
import HeaderBar from "./HeaderBar";
import Trending from "./HomeDataGrid/Trending";
import AllTimeHits from "./HomeDataGrid/AllTimeHits";
const Home = () => {
  return (
    <Box>
      <HeaderBar />
      <Trending />
      <AllTimeHits />
    </Box>
  );
};

export default Home;
