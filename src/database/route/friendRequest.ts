import initKnex from "knex";
import configuration from "../knexfile";
const knex = initKnex(configuration.development);
import express from "express";
const router = express.Router();

// Get all friend requests
router.get("/", async(req, res) => {
    try{
        const friendRequests = await knex("friendRequest");
        res.status(200).json(friendRequests);
    } catch (error){
        res.status(400).json(`Error retrieving friend requests: ${error}`);
    }
});

// Delete a friend request 
router.delete("/:id", async(req, res): Promise<any> => {
    try{
        const friendRequestId = req.params.id;
        const friendRequest = await knex('friendRequest').where({id: friendRequestId});

        if(!friendRequest){
            return res.status(404).json({ message: `FriendRequest ${friendRequestId} not found.`});
        }

        await knex('friendRequest').where({id: friendRequestId}).del();
        return res.status(200).json(friendRequest);
    } catch (error){
        return res.status(500).json(error);
    }
});

export default router;