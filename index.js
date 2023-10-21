const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 5000;

app.use(express.json());

app.get('/api/posts', async (req, res) => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return res.status(200).send({
    status: 200,
    message: 'Success',
    data: posts.data
  });
})

app.post('/api/posts', async (req, res) => {
  const { id, title, body, userId } = req.body;

  const posts = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    id: id,
    title: title,
    body: body,
    userId: userId
  });

  return res.status(201).send({
    status: 201,
    message: 'Success',
    data: posts.data
  });
})

app.put('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  const postsUpdate = await axios.put('https://jsonplaceholder.typicode.com/posts/' +id, {
    title: title,
    body: body
  });

  return res.status(200).send({
    status: 200,
    message: 'Success',
    data: postsUpdate.data
  });
})

app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;

  const posts = axios.delete('https://jsonplaceholder.typicode.com/posts/' +id);

  return res.status(204).send({
    status: 204,
    message: 'Success',
    data: posts.data
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})