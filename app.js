const express = require('express')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = [
  { id: 1, name: 'Іван', email: 'ivan@example.com', age: 10 },
  { id: 2, name: 'Марія', email: 'maria@example.com' },
  { id: 3, name: 'Петро', email: 'petro@example.com' },
  { id: 4, name: 'Ольга', email: 'olga@example.com' },
  { id: 5, name: 'Андрій', email: 'andriy@example.com' },
  { id: 6, name: 'Наталія', email: 'natalia@example.com' },
  { id: 7, name: 'Максим', email: 'maxim@example.com' },
  { id: 8, name: 'Софія', email: 'sofia@example.com' },
  { id: 9, name: 'Анна', email: 'anna@example.com' },
  { id: 10, name: 'Олександр', email: 'oleksandr@example.com' }
];

app.get('/users', (req, res)=>{
  // fs -> read db.json -> res.json()
  res.status(200).json(users);
});

app.get('/users/:id', (req, res)=>{
  const { id } = req.params;

  res.json({
    data: users[+id-1],
  });
});

app.post('/users', (req, res)=>{
  const body = req.body;
  users.push(body);

  res.status(201).json({
    message: "User was created!"
  })
});

app.delete('/users/:id', (req, res)=>{
  const { id } = req.params;
  users.splice(+id-1, 1);

  res.sendStatus(204);
})

// CRUD: c - create, r - read, u - update, d - delete

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Server has started on PORT ${PORT}`);
})
