import bodyParser from 'body-parser';
import express from 'express';
import next from 'next';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get('/api/*', (req, res) => {
    setTimeout(() => {
      res.json({
        sampleApi: {
          foo: 'foo',
          bar: [1, 2, 3],
          params: req.params['0'],
        },
      });
    }, 500);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    // tslint:disable-next-line
    console.log(`> Ready on http://localhost:${port}`);
  });
});
