import express from "express";
const app = express();
const PORT = 4000;

let counter = 0;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/counter", (req, res) => {
  counter++;
  res.send({ counter });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
});
