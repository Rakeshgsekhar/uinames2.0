const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const corsParser = require("cors");

const authRoutes = require("./src/index");
//portfolioEcom
/**Middleware */
app.use(bodyParser.json());
app.use(cookieParser());
app.use(corsParser());

//connection chaining

/**Routes */
app.use("/api/uinames", authRoutes);

const port = 9009;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
