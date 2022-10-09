import { SetupServer } from './server';
import config from 'config';

const port = process.env.PORT || config.get('App.port');

(async (): Promise<void> => {
  const server = new SetupServer(port);
  await server.init();
  server.start();
})();
