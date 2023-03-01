var csv = require("csvtojson");
var fs = require("fs");
csv()
  .fromFile("./data.csv")
  .then((jsonArrayObj) => {
    try {
      fs.writeFile("./data.json", JSON.stringify(jsonArrayObj), () => {
        console.log("written", JSON.stringify(jsonArrayObj));
      });
    } catch (e) {
      console.log("could not write to file: ", e);
    }
  });
