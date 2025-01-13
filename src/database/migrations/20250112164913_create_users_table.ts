import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("suggestion", (table) => {
            table.uuid('id', {primaryKey:true}).defaultTo(knex.fn.uuid());
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.specificType('neurodivergent_disorders', 'text ARRAY').notNullable;
            table.string('description');
            table.string('occupation');
            table.jsonb('location');
            table.string('photo');
        })
        .createTable("friends", (table) => {
            table.uuid('id', {primaryKey:true}).defaultTo(knex.fn.uuid());
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.specificType('neurodivergent_disorders', 'text ARRAY').notNullable;
            table.string('description');
            table.string('occupation');
            table.jsonb('location');
            table.string('photo');
        })
        .createTable("friendRequest", (table) => {
            table.uuid('id', {primaryKey:true}).defaultTo(knex.fn.uuid());
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.specificType('neurodivergent_disorders', 'text ARRAY').notNullable;
            table.string('description');
            table.string('occupation');
            table.jsonb('location');
            table.string('photo');
        });
};


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("suggestion").dropTable("friends").dropTable("friendRequest");
}

