import "dotenv/config";

import neurodivergentList from "./database/route/neurodivergent";
import friendsData from "./database/route/friends";
import cors from "cors";
import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use("/neurodivergent", neurodivergentList);
app.use("/friends", friendsData);

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});