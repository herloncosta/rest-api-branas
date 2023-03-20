-- CREATE SCHEMA blog;

create table blog.posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  date TIMESTAMP DEFAULT NOW()
);
