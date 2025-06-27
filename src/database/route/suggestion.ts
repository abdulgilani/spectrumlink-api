import initKnex from "knex";
import configuration from "../knexfile";
const knex = initKnex(configuration.development);
import express from "express";
const router = express.Router();

// Get all suggestions
router.get("/", async(req, res) => {
    try{
        const suggestion = await knex('suggestion');
        res.status(200).json(suggestion);
    } catch(error){
        res.status(400).json(`Error retrieving data: ${error}`);
    }
});

// Get a single suggestion
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;

        const suggestion = await knex('suggestion').where('suggestion.id', id).first();

        if(suggestion){
            res.status(200).json(suggestion);
        } else {
            res.status(400).json("Suggestion is not found.");
        }
    } catch(error){
        res.status(400).json(`Error retrieving a suggestion: ${error}`);
    }
});

export default router;