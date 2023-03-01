import { write } from "../FireStore";
import data from "./data.json";
const upload = async () => {
  console.log("Data size: ", data.length);
  data.forEach((element) => {
    // element.rank = parseInt(element.rank);
    element.ranking = parseInt(element.rank);
    element.rating = parseFloat(element.rating);
    element.year = parseInt(element.year);
    write(element);
  });
};
export { upload };
