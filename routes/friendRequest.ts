import express from "express";
import fs from "fs";

const friendRequestsPath = "./data/friendRequest.json"

const router = express.Router();

const readFriendRequestsData = () => {
    const friendRequestsData = fs.readFileSync(friendRequestsPath);
    const parsedFriendRequestsData = JSON.parse(friendRequestsData.toString());
    return parsedFriendRequestsData;
};

// Get all friends
router.get("/", (req, res) => {
    const friendRequestsData = readFriendRequestsData();
    res.status(200).json(friendRequestsData);
});

export default router;
