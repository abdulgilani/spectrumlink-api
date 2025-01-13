import initKnex from "knex";
import configuration from "../database/knexfile";
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

        const friend = await knex("friends").where(id).first();

        if(friend){
            res.status(200).json(friend);
        }
    } catch (error) {
        res.status(400).json(`Error retrieving a friend: ${error}`);
    }
});


export default router;