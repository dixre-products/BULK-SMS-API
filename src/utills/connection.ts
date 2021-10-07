import config from 'config';
import { connect, connection } from 'mongoose';

connect(config.get('DB_CONNECTION_STRING'), {
  useNewUrlParser: true,
  useCreateIndex: true,
  autoReconnect: true,
  keepAlive: true,
  useUnifiedTopology: true,
  keepAliveInitialDelay: 450000,
})
  .then(() => {
    console.log('Database connected');
  })
  .catch(() => {
    console.log('Database not connected');
  });

const db = connection;

export default db;
