import { useEffect, useState } from "react";
import { Box, Heading, Grid, Text, Layer } from "grommet";
import MovieCard from "../shared/MovieCard";
import { readPaginated } from "../../firebase/FireStore";
const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const res = async () => {
      const data = await readPaginated(1);
      setTrending(data);
      setLoading(false);
    };
    res();
  }, []);
  return (
    <Box>
      <Heading margin="medium">Trending</Heading>
      {loading === true ? (
        <Layer>
          <Text>Loading...</Text>
        </Layer>
      ) : (
        <Grid rows="small" columns="medium" gap="small">
          {trending.map((movie) => (
            <MovieCard
              key={movie.ranking}
              name={movie.name}
              tagline={movie.tagline}
              rating={movie.rating}
              genre={movie.genre}
              run_time={movie.run_time}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Trending;
