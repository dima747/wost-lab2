const { port, host } = require('../configuration');
const { connectDB } = require('../utils/db.js');
const { User } = require('./models/users.js');

const express = require('express');
const app = express();
app.use(express.json());

connectDB()
  .on('error', console.log)
  .on('disconnected', connectDB)
  .once('open', startServer);

function startServer() {
  app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
  });
}

// App
app.get('/', (req, res) => {
  res.send('Hello World _Updated');
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json({users});
})

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
})
