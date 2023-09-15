import pg from "pg";
import todoModel from "../model/todo.model.js";
import userModel from "../model/user.model.js";
const { Pool } = pg;
import 'dotenv/config'

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const port = process.env.PORT;

 

// establish connection
export const pool = new Pool({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port
});

// check for database health
export const dbInit = async () => {
  try {
    const data = await pool.query("SELECT NOW()");
    await todoModel();
    console.log("Database connected", data.rows[0].now);
    
    //await userModel();
    // more tables will follow here
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export const query = async (text, params) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log("executed query", { text, duration, rows: res.rowCount });
  return res;
};
