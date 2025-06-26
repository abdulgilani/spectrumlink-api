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
router.get("/:id", (req, res) => {

});

export default router;