import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error('DATABASE_URL not set');

const regex = /mysql:\/\/(.*):(.*)@(.*):(\d+)\/(.*)/;
const match = dbUrl.match(regex);
if (!match) throw new Error('Invalid DATABASE_URL format');

const [, username, encodedPassword, host, port, database] = match;
const password = decodeURIComponent(encodedPassword);

export default new DataSource({
  type: 'mysql',
  host,
  port: Number(port),
  username,
  password,
  database,
  entities: [join(__dirname, 'src/**/*.entity.{ts,js}')],
  migrations: [join(__dirname, 'migrations/*.{ts,js}')],
  synchronize: false,
});
