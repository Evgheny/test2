const Tarantool = require('tarantool-driver');

const client = new Tarantool({
  host: '127.0.0.1',
  port: 3301,
  username: 'admin',
  password: ''
});

client.connect().then(() => {
  console.log('Connected to Tarantool');
  return client.sql('SELECT * FROM customers LIMIT 20');
}).then(result => {
  console.log(result);
}).catch(err => {
  console.error('Error:', err);
});
