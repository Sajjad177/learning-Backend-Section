import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";

const app = express();

// Setup parser ->
app.use(express.json());

app.use("/api/movies", MovieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Movie Review website server");
});

export default app;


//Interface -> schema -> Model -> 