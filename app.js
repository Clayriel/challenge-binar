const express = require("express");
const router = require("./routes");
const app = express();
const morgan = require("morgan");
const controller = require("./controllers");
require("dotenv").config();

const { HTTP_PORT } = process.env;

app.set("view engine", "ejs");
app.use(express.json());
app.use(morgan("dev"));
app.use("/test", router);
// app.get("/", (_req, res) => {
//   res.render("home");
// });

// app.get("/error", (_req, _res) => {
//   error;
// });
// app.use(controller.notFound);

// // server-error
// app.use(controller.exception);

// app.listen(HTTP_PORT, () => console.log("listening on port", HTTP_PORT));

module.exports = app;
