import http from 'http';
import url from 'url';
import { program } from 'commander';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 2000;
const version = '1.0.0';

program.option('-v, --version');
program.parse();
const options = program.opts();

if (options.version) {
  console.log('Version ' + version);
  process.exit(0);
}

const server = http.createServer((req, res) => {
  if (!req.url) {
    server.emit('error', new Error('No url in the request'));
    return;
  }

  const { pathname, query } = url.parse(req.url);

  const params = query;

  const addition = () => Number(a) + Number(b);
  const rest = () => Number(a) - Number(b);
  const div = () => Number(a) / Number(b);
  const mult = () => Number(a) * Number(b);

  if (req.method !== 'GET') {
    server.emit('error', new Error('Invalid method'));
    return;
  }

  if (pathname === '/calculator') {
    server.emit('addition', 'rest', 'mult', 'div');
    return;
  }

  if (pathname !== '/calculator') {
    server.emit('error', new Error('Path not found'));
    res.write(`<h1>ERROR 404</h1>`);
    return;
  }
  res.write(req.method);
  res.write(req.url);
  res.end();
});

server.listen(PORT);

server.on('listening', () => {
  console.log('Listening on port ' + PORT);
});

server.on('error', (error) => {
  console.log(error.message);
});
