const connectToMongo = require('./db');
const cors = require('cors');


connectToMongo();
const express = require('express')
const app = express()
const port = 7420

app.use(express.json())
app.use(cors());
//avilable routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/accomod', require('./routes/adeaccomod'))
app.use('/api/disaccomod', require('./routes/allaccomodations'))
app.use('/api/bookaccomodation', require('./routes/bookaccomod'))

app.get('/', (req, res) => {
  res.send('airstay')
})

app.listen(port, () => {
  console.log(`Airstay backend listening on http://localhost:${port}`)
})