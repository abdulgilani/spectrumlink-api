import type {Knex} from "knex";
import "dotenv/config";

// Update with your config settings.

const config: {[key: string]: Knex.Config} = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
    }
  }
};

export default config;
