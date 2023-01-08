const { application } = require('express')
const express = require('express')
const moviedb = express()

const movies = [
  { id: 1, title: 'Jaws', year: 1975, rating: 8 },
  { id: 2, title: 'Avatar', year: 2009, rating: 7.8 },
  { id: 3, title: 'Brazil', year: 1985, rating: 8 },
  { id: 4, title: 'الإرهاب والكباب', year: 1992, rating: 6.2 },
];

moviedb.get('/', (req, res) => {
  res.send(`
<h1> welcome to our  homepage!</h1>
  <h2> enter url: <h2>
  <form action="/result" method="POST">
  <input type="text" name="URL">
</form>
<h2> Want to view some details? <h2>
<form action="/test" method="POST">
  <button> TEST </button>
</form>
<h2> WHAT TIME IS IT? <h2>
<form action="/time" method="POST">
  <button> GET TIME </button>
</form>
  `)})


moviedb.listen(3000)

moviedb.post('/result',(req,res)=> {
  res.send(`
  <h1> welcome to our awesome homepage!</h1>
    <h2> Okaayyyy! <h2>
    `)
})
moviedb.post('/test',(req,res)=> {
  res.send(`
  <h1> welcome to our awesome homepage!</h1>
<h2>   {status:200, message:"ok"}</h2>
    `)
})
moviedb.post('/time',(req,res)=> {
  res.send(`
  <h1> welcome to our homepage!</h1>
  <h2>{status:200, message:<nav id="time">get time</nav>}</h2>
  
<script>

function showTime() {
  document.getElementById("time").style.display = "inline-block";

  document.getElementById("time").innerHTML = Date().slice(16,23);
}
document.getElementById("time").addEventListener("click", showTime() );
 </script>
    `)
})
moviedb.get('/hello', (req, res) => {
  res.send({ status: 200, message: 'Hello' });
});
moviedb.get('/hello/:ID', (req, res) => {
  res.send({ status: 200, message: `Hello, ${req.params.ID}` });
});

moviedb.get('/search', (req, res) => {
  req.query.s
    ? res.send({ status: 200, message: 'ok', data: req.query.s })
    : res.send({ status: 500, error: true, message: 'you have to provide a search',
      });
});
moviedb.get('/movies/create', (req, res) => {
  res.send({ status: 200, message: '' });
});
moviedb.get('/movies/read', (req, res) => {
  res.send({ status: 200, data: movies });
});
moviedb.get('/movies/update', (req, res) => {
  res.send({ status: 200, message: '' });
});
moviedb.get('/movies/delete', (req, res) => {
  res.send({ status: 200, message: '' });
});
