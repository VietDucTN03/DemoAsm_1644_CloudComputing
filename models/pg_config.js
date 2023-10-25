const Pool = require('pg').Pool

const pg_conn = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Demo1644',
    password: '281103',
    port: 5432,
})

pg_conn.connect()
   .then(() => {
    console.log("thanh cong");
   })
   .catch((error) => {
    console.error("that bai", error);
   })

module.exports = pg_conn