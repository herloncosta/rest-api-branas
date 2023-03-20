import { db } from '../infra/database.js';

async function getPosts() {
  return await db.query('select * from blog.posts order by date');
}

async function getPost(id) {
  return await db.oneOrNone('select * from blog.posts where id = $1', [id]);
}

async function getPostByTitle(title) {
  return await db.oneOrNone('select * from blog.posts where title = $1', [
    title,
  ]);
}

async function savePost(post) {
  return await db.one(
    'insert into blog.posts (title, content) values ($1, $2) returning *',
    [post.title, post.content]
  );
}

async function updatePost(id, title, content) {
  return await db.none(
    'update blog.posts set title = $1, content = $2 where id = $3',
    [title, content, id]
  );
}

async function deletePost(id) {
  return await db.none('delete from blog.posts where id = $1', [id]);
}

export { getPosts, getPost, getPostByTitle, savePost, deletePost, updatePost };
