// Update with your config settings.
import "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
};

export default config;
