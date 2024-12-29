import { createConnection } from 'net';

const client = createConnection({port: 502, host: '45.8.248.56'}, () => {
    console.log('Connected.');
});