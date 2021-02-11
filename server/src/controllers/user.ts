import { pool } from '../db';

export const getUsers = async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    res.json(err.message);
  }
};
