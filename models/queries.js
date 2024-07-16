import { pool } from "../config/db.js";

const register = async ({
  name,
  email,
  experience,
  especialty,
  password,
  image,
}) => {
  try {
    const sql = {
      text: "INSERT INTO skaters (name, email, experience, especialty, password, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      values: [name, email, experience, especialty, password, image],
    };

    const response = await pool.query(sql);
    if (response.rowCount > 0) {
      return response.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  }
};

const findOneByEmail = async (email) => {
  try {
    const sql = {
      text: "SELECT * FROM skaters WHERE email = $1",
      values: [email],
    };
    const response = await pool.query(sql);
    if (response.rowCount > 0) {
      return response.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  }
};

const getUsers = async () => {
    try {
      const sql = {
        text: "SELECT * FROM skaters",
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) {
        
        return response.rows;
      }else {
        return null
      }
      
    } catch (error) {
      console.log("Error code: ", error.code, "Error message: ", error.message);
    }
  };

  const updateUser = async (name, experience, especialty, password, id) => {
    try {
      const sql = {
        text: "UPDATE skaters SET name = $1,  experience = $2, especialty = $3, password = $4  WHERE id = $5 RETURNING *",
        values: [name, experience, especialty, password, id],
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) {
        return response.rows[0];
  };
    } catch (error) {
      console.log("Error code: ", error.code, "Error message: ", error.message);
    }
  };
  
  const deleteUser = async (id) => {
    try {
      const sql = {
        text: "DELETE FROM skaters WHERE id = $1 RETURNING *",
        values: [id],
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) {
        return response.rows[0];
      }
      return null;
    } catch (error) {
      console.log("Error code: ", error.code, "Error message: ", error.message);
    }
  };
  
  const setSkaterStatus = async (id, status) => {
    try {
      const sql = {
        text: "UPDATE skaters SET status = $1 WHERE id = $2 RETURNING *",
        values: [status, id],
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) {
        return response.rows[0];
      }
      return null;
    } catch (error) {
      console.log("Error code: ", error.code, "Error message: ", error.message);
    }
  };


export const models = {
  register,
  findOneByEmail,
  getUsers,
  updateUser,
  deleteUser,
  setSkaterStatus
}