import express from "express";
import fs from "fs";

const friendRequestsPath = "./data/friendRequest.json"

const router = express.Router();

const readFriendRequestsData = () => {
    const friendRequestsData = fs.readFileSync(friendRequestsPath);
    const parsedFriendRequestsData = JSON.parse(friendRequestsData.toString());
    return parsedFriendRequestsData;
};

interface FriendRequest {
    id: string,
}

// Get all friends requests
router.get("/", (req, res) => {
    const friendRequestsData = readFriendRequestsData();
    res.status(200).json(friendRequestsData);
});

// Delete a friend request
router.delete("/:id", (req, res) => {
    const friendRequestsData: FriendRequest [] = readFriendRequestsData();
    const { id } = req.params;

    const newFriendRequests : FriendRequest[] = friendRequestsData.filter((friendRequest: FriendRequest) => friendRequest.id !== id);

    fs.writeFileSync(friendRequestsPath, JSON.stringify(newFriendRequests));

    res.status(200).json(newFriendRequests);
});

export default router;
