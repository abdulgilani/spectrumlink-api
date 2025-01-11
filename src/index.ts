import "dotenv/config";

import cors from "cors";
import express from "express";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});