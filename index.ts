import "dotenv/config";

import neurodivergentList from "./routes/neurodivergent";
import friendsList from "./routes/friends";
import suggestionList from "./routes/suggestion";
import friendRequestList from "./routes/friendRequest";
import cors from "cors";
import express from "express";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(cors());

app.use(express.json());

app.use("/neurodivergent", neurodivergentList);
app.use("/friends", friendsList);
app.use("/suggestion", suggestionList);
app.use("/friendRequestList", friendRequestList);

app.listen(PORT, () => {
    console.log(`Listening on url http://localhost:${PORT}`);
});