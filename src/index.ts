// http://localhost:8000/calculator?a=6&b=3
import http from 'http';
import { program } from 'commander';
import * as dotenv from 'dotenv';

const PORT = process.env.PORT || 2000;
const server = http.createServer((_request, response) => {
  response.write('hola');
});
server.listen(PORT);
