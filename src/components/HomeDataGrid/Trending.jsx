import { Box, Heading, Grid } from "grommet";
import MovieCard from "../shared/MovieCard";
const Trending = () => {
  return (
    <Box>
      <Heading margin="medium">Trending</Heading>
      <Grid rows="small" columns="medium" gap="small">
        <MovieCard />
      </Grid>
    </Box>
  );
};

export default Trending;
