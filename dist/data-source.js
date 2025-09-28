"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
const path_1 = require("path");
dotenv.config();
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl)
    throw new Error('DATABASE_URL not set');
const regex = /mysql:\/\/(.*):(.*)@(.*):(\d+)\/(.*)/;
const match = dbUrl.match(regex);
if (!match)
    throw new Error('Invalid DATABASE_URL format');
const [, username, encodedPassword, host, port, database] = match;
const password = decodeURIComponent(encodedPassword);
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host,
    port: Number(port),
    username,
    password,
    database,
    entities: [(0, path_1.join)(__dirname, 'src/**/*.entity.{ts,js}')],
    migrations: [(0, path_1.join)(__dirname, 'migrations/*.{ts,js}')],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map