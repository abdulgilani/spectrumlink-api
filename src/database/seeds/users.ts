import { Knex } from "knex";
import friendsData from "../seeds-data/friends";
import friendRequestsData from "../seeds-data/friendRequest";
import suggestionData from "../seeds-data/suggestion";

export async function seed(knex: Knex): Promise<void> {
    await knex("suggestion").del();
    await knex("friends").del();
    await knex("friendRequest").del();
    await knex("suggestion").insert(suggestionData);
    await knex("friends").insert(friendsData);
    await knex("friendRequest").insert(friendRequestsData);
};
