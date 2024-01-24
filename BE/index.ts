import cors from "cors";
import express, { Application, json } from "express";
import { dbConfig } from "./utils/dbConfig";
import user from "./router/userRouter";
import blogs from "./router/blogRouter";

const app: Application = express();

const port: number = 4000;

app.use(json());
app.use(cors());

app.use("/api", user);
app.use("/api", blogs);

app.listen(port, () => {
  dbConfig();
});
