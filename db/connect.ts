const oracledb = require("oracledb");
import { dbconfig } from "./dbconfig";

// type of clob to String
oracledb.fetchAsString = [oracledb.CLOB];

export async function getSelect(request: any, response: any) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbconfig);

    const resultFetch = await connection.execute("SELECT * FROM BOARD");

    const { rows } = resultFetch;

    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
    // return result;
  }
}

export async function getConnection() {
  let connection;
  try {
    connection = await oracledb.getConnection(dbconfig);
    connection.on("error", (error) => {
      console.error("error", error);
    });

    return connection;
  } catch (error) {
    console.log(error);
  }
}
