import { write } from "../FireStore";
import data from "./data.json";
const upload = async () => {
  console.log("Data size: ", data.length);
  data.forEach((element) => {
    write(element);
  });
};
export { upload };
