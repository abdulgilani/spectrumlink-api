import initKnex from "knex";
import configuration from "../knexfile";
const knex = initKnex(configuration.development);
import express from "express";
const router = express.Router();

// Get all friends
router.get("/", async(req, res) => {
    try{
        const friends = await knex("friends");
        res.status(200).json(friends);
    } catch (error) {
        res.status(400).json(`Error retrieving friends: ${error}`);
    }
});

// Get a single friend 
router.get("/:id", async(req, res) => {
    try{
        const { id } = req.params;

        const friend = await knex("friends").where("friends.id", id).first();

        if(friend){
            res.status(200).json(friend);
        } else {
            res.status(400).json("Friend is not found.");
        }
    } catch (error) {
        res.status(400).json(`Error retrieving a friend: ${error}`);
    }
});

// Add a friend
router.post("/", async(req, res) => {
    try{
        const [ newFriendId ] = await knex('friends').insert(req.body);
        const newFriend = await knex('friends')
        .select('id', 
            'name',
            'email',
            'password',
            'neurodivergent_disorders',
            'description',
            'occupation',
            'location',
            'photo'
        )
        .where({id: newFriendId});

        res.status(201).json(newFriend[0]);
    } catch (error) {
        res.status(500).json({
            message: "Having trouble connecting you to that person",
            error
        })
    }
});


export default router;