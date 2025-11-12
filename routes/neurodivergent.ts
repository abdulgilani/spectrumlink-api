import express from "express";
import fs from "fs";

const router = express.Router();

const neurodivergentPath = "./data/neurodivergent.json";

router.get("/", (req, res) => {
    const neurodivergentData = fs.readFileSync(neurodivergentPath);
    res.status(200).send(neurodivergentData);
});

export default router;