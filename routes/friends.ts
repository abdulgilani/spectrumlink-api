import express from "express";
import fs from "fs";
import uuid4 from "uuid4";

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

// Get a single friend
router.get("/:id", (req, res) => {
    const friendsData: Friend [] = readFriendsData();
    const { id } = req.params;

    const singleFriend = friendsData.find((friend: Friend) => friend.id === id);
    
    if(singleFriend){
        res.status(200).json(singleFriend);
    } else {
        res.status(404).json("Friend not found");
    }
});


// Add a friend
router.post("/", (req, res) => {
    const {name, email, neurodivergent_disorders, description, occupation, location, photo} = req.body;

    const newFriend = {
        id: uuid4(),
        name: name,
        email: email,
        neurodivergent_disorders,
        description,
        occupation,
        location,
        photo
    }

    const friendsData = readFriendsData();

    friendsData.push(newFriend);

    fs.writeFileSync(friendsPath, JSON.stringify(friendsData));

    res.status(201).json(newFriend);
});

export default router;