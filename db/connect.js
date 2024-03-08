"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = exports.getSelect = void 0;
const oracledb = require("oracledb");
const dbconfig_1 = require("./dbconfig");
// type of clob to String
oracledb.fetchAsString = [oracledb.CLOB];
function getSelect(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb.getConnection(dbconfig_1.dbconfig);
            const resultFetch = yield connection.execute("SELECT * FROM BOARD");
            const { rows } = resultFetch;
            return rows;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            if (connection) {
                try {
                    yield connection.close();
                }
                catch (error) {
                    console.log(error);
                }
            }
            // return result;
        }
    });
}
exports.getSelect = getSelect;
function getConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield oracledb.getConnection(dbconfig_1.dbconfig);
            connection.on("error", (error) => {
                console.error("error", error);
            });
            return connection;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getConnection = getConnection;
