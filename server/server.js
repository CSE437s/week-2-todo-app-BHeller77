const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('../public'));

let todos = [];

// app.get('/', (req, res) => {
//   res.send("HI")
//   });


app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (text) {
    const newTodo = { id: Date.now(), text };
    todos.push(newTodo);
    res.json(newTodo);
  } else {
    res.status(400).json({ error: 'Text is required for a ToDo item' });
  }
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id !== parseInt(id));
    res.json({ message: 'ToDo item deleted successfully' });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});