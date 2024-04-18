import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;

let counter = 0;
app.get("/counter", (req, res) => {
  counter++;
  res.send({ counter });
});

// Simple logging middleware
app.use((req, res, next) => {
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log(`${time} ${req.method} ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`-----`);
  console.log(`Express server listening at localhost:${PORT}`);
});
