import express from "express";
import fs from "fs";
import uuid from "uuid4";

const friendsPath = "./data/friends.json"

const router = express.Router();

const readFriendsData = () => {
    const friendsData = fs.readFileSync(friendsPath);
    const parsedFriendsData = JSON.parse(friendsData.toString());
    return parsedFriendsData;
};

interface Friend {
    id: string, 
}

// Get all friends
router.get("/", (req, res) => {
    const friendsData = readFriendsData();
    res.status(200).json(friendsData);
});


export default router;