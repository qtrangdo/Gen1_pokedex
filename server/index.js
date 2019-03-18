const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
const { getAll, getOne } = require('./database/index');

const app = express();
const port = 3000;

// app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static('client/dist'));
// app.use('/', expressStaticGzip('client/dist', {
//   enableBrotli: true,
//   customCompressions: [{
//     encodingName: 'deflate',
//     fileExtension: 'zz',
//   }],
//   orderPreference: ['br', 'gz'],
//   setHeaders: (res) => {
//     res.setHeader('Cache-Control', 'public, max-age=31536000');
//   },
// }));

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.get('/api/pokemons', (req, res) => {
  getAll((err, data) => {
    if (err || data.length === 0) {
      res.status(400).send('Error in getting pokemon data');
    } else {
      res.status(200).send(JSON.stringify(data));
    }
  });
});

app.get('/api/pokemons/:id', (req, res) => {
  const {id} = req.params;
  getOne(id, (err, data) => {
    if (err || data.length === 0) {
      res.status(400).send('Error in getting pokemon data');
    } else {
      res.status(200).send(JSON.stringify(data));
    }
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});