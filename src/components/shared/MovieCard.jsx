import { Card, CardHeader, CardBody, CardFooter, Box, Text } from "grommet";
import { Star } from "grommet-icons";

const MovieCard = ({ name, tagline, rating, genre, run_time }) => {
  return (
    <Card
      height="small"
      width="medium"
      background="background-contrast"
      margin="small"
    >
      <CardHeader pad="small">{name}</CardHeader>
      <CardBody pad="medium">{tagline}</CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="brand">
        <Box direction="row" align="start">
          {rating}&nbsp;
          <Star color="white" size="medium" />
        </Box>
        <Box direction="row" align="center">
          {genre}
        </Box>
        <Box direction="row" align="end">
          <Text>Duration: {run_time}</Text>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
