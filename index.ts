import "dotenv/config";

import neurodivergentList from "./routes/neurodivergent";
import cors from "cors";
import express from "express";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(cors());

app.use(express.json());

app.use("/neurodivergent", neurodivergentList);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});