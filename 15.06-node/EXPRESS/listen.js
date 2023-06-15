const express = require("express");
const app = express();
const chalk = require("chalk");

app.use(
  "/user",
  (req, res, next) => {
    console.log("first CB");
    req.user = { first: "yon", last: "vannucci" };
    next();
  },
  (req, res) => {
    console.log("second CB");
    res.send(req.user);
  }
);
/****** middleware method beside app.use *****/
app.get("/", (req, res, next) => {
  console.log(chalk.yellowBright("in get method!!!"));
  res.send("in get!");
});

// לעולם לא יגיע לכאן כי הוא כבר מיורת במטודה למעלה ויש החזרה של תשובה
app.get("/", (req, res, next) => {
  console.log(chalk.yellowBright("in get second method!!!"));
  res.send("in get second!");
});

app.post("/", (req, res, next) => {
  console.log(chalk.yellowBright("in post method!!!"));
  res.send("in post");
});

app.put("/", (req, res, next) => {
  console.log(chalk.yellowBright("in put method!!!"));
  res.send("in put");
});

app.patch("/", (req, res, next) => {
  console.log(chalk.yellowBright("in patch method!!!"));
  res.send("in patch");
});

app.delete("/", (req, res, next) => {
  console.log(chalk.yellowBright("in delete method!!!"));
  res.send("in delete");
});
const PORT = 9191;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on :http://localhost:${PORT}`));
});
