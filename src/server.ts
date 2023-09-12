import express from "express"
import { categoriesRoutes } from "./routes/categories.routes";

// import "./database"

const app = express();

app.use(express.json());


app.use('/categories', categoriesRoutes);

app.listen(3000, () => console.log("server is runnung!"));