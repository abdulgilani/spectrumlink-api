import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.uuid("id", {primaryKey: true}).defaultTo(knex.raw("uuid_generate_v4()"));
        
    });
}


export async function down(knex: Knex): Promise<void> {
}

