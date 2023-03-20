import * as postsData from '../data/postsData.js';

async function getPosts() {
  return await postsData.getPosts();
}

async function getPost(id) {
  const post = await postsData.getPost(id);
  if (!post) throw new Error('Post not found');
  return post;
}

async function savePost(post) {
  const existingPost = await postsData.getPostByTitle(post.title);
  if (existingPost) throw new Error('Post already exists');
  return await postsData.savePost(post);
}

async function updatePost(id, title, content) {
  await getPost(id);
  return await postsData.updatePost(id, title, content);
}

async function deletePost(id) {
  const post = await postsData.getPost(id);
  if (!post) throw new Error('Post not found');
  return await postsData.deletePost(id);
}

export { getPosts, getPost, savePost, deletePost, updatePost };
