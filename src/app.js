import 'dotenv/config';
import express from 'express';
import db from './prisma-client.js'
import usersRoute from './router/user-route.js'
import moviesRoute from './router/movie-route.js'

const PORT = process.env.PORT;
const app = express();

// if content type is application/json, put the json in req.body
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Hi' });
});

app.use('/movies', moviesRoute)
app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log('server running at port', PORT);
});
