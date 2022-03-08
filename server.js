const makeApp = require("./app");
require("dotenv").config();

const app = makeApp();
const port = process.env.PORT || 3001;

app.listen(
  port,
  () => {}
  // console.log(`server is up and listening on port ${port}`)
);
