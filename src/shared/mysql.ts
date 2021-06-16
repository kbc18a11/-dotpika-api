import * as mysql from 'promise-mysql';

export default async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: 'dotpika',
    multipleStatements: true
  });

  return connection;
};
