import pgp from 'pg-promise';

export const db = pgp()({
  host: 'localhost',
  port: 5432,
  database: 'blog',
  user: 'postgres',
  password: 'root',
});
