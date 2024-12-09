import express from "express";
import fs from "fs";

const suggestionPath = "./data/suggestion.json"

const router = express.Router();

const readSuggestionData = () => {
    const suggestionData = fs.readFileSync(suggestionPath);
    const parsedSuggestionData = JSON.parse(suggestionData.toString());
    return parsedSuggestionData;
};

interface Suggestion {
    id: string, 
}

// Get all friends
router.get("/", (req, res) => {
    const suggestionData = readSuggestionData();
    res.status(200).json(suggestionData);
});


// Get a single friend
router.get("/:id", (req, res) => {
    const suggestionData: Suggestion [] = readSuggestionData();
    const { id } = req.params;

    const singleSuggestion = suggestionData.find((suggestion: Suggestion) => suggestion.id === id);

    if(singleSuggestion){
        res.status(200).json(singleSuggestion);
    } else {
        res.status(404).json("Suggestion not found");
    }
});


export default router;