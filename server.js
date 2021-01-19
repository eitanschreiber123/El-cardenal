const express = require('express');
const cors = require('cors')
const next = require('next');
const path = require('path');
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const mailer = require('./mailer')
const bodyParser = require('body-parser');
if (!dev && cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });
} else {
  const nextApp = next({ dir: '.', dev });
  const nextHandler = nextApp.getRequestHandler();
  nextApp.prepare().then(() => {
      const server = express();
      server.use(cors());
      app.use(bodyParser.urlencoded({extended: true}));
      app.use(bodyParser.json());
      server.post('/api/contact', (req, res) => {
    const { senderMail, sendTo, rooms, date, payment, price, people } = req.body
    mailer({ senderMail, sendTo, rooms, date, payment, price, people }).then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('badddd')
    })})
  server.post('/api/other', (req, res) => {
const { senderMail, name, origin, affair, message } = req.body
mailer({ senderMail, name, origin, affair, message }).then(() => {
  console.log('success')
  res.send('success')
}).catch((error) => {
  console.log('failed', error)
  res.send('badddd')})})
      if (!dev) {
        server.use(function(req, res, next) {
          var proto = req.headers["x-forwarded-proto"];
          if (proto === "https") {
            res.set({'Strict-Transport-Security': 'max-age=31557600'});
            return next();
          }
          res.redirect("https://" + req.headers.host + req.url);
        });
      }
      server.use('/static', express.static(path.join(__dirname, 'static'), {maxAge: dev ? '0' : '365d'}));
      server.get('*', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        nextHandler(req, res, parsedUrl);
      });
      server.listen(port, (err) => {if (err) throw err;});
    });
}
