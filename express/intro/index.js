import express from 'express';
const app = express()
const port = 3000

const aboutMe = [
  {
    name: "Tanvir",
    age: "27"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');

});

app.get('/about', (req, res) => res.send(aboutMe));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})