import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/get-ip", (req, res) => {
  const ipAddress = req.ip;
  res.json({ ip: ipAddress });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
