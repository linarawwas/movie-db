const express = require('express')
const moviedb = express()

moviedb.get('/', (req, res) => {
  res.send(`
<h1> welcome to our awesome homepage!</h1>
  <h2> enter url: <h2>
  <form action="/result" method="POST">
  <input type="text" name="color">
  <button> submit </button>
  </form>
  `)})


moviedb.listen(3000)
moviedb.post('/result',(req,res)=> {
  res.send(`
  <h1> welcome to our awesome homepage!</h1>
    <h2> Okaayyyy! <h2>
    `)
})