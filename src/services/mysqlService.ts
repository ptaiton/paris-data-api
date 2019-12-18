import { createConnection as createMysqlConnection } from 'mysql'

export default (() => {
  const connection = createMysqlConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
  });
 
  connection.connect()
  return connection
})()

