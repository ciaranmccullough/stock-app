import { Pool } from 'pg';

export const pool = new Pool({
  user: 'ciaranmccullough',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});
