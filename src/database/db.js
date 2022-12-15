const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
// db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   const query = `
//     INSERT INTO places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//     ) VALUES (?,?,?,?,?,?,?);
//   `

//   const values = [
//     'https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVjaWNsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
//     'Colectoria',
//     'Guilherme Genballa, Jardim América',
//     'Número',
//     'Santa Catarina',
//     'Rio do Sul',
//     'Resíduos Eletrônicos, Lâmpadas'
//   ]

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err)
//     }

//     console.log('Cadastrado com sucesso')
//     console.log(this)
//   }

//   // db.run(query, values, afterInsertData)

//   db.all(`SELECT * FROM places`, function (err, rows) {
//     if (err) {
//       return console.log(err)
//     }

//     console.log('Aqui estão os seus registros: ')
//     console.log(rows)
//   })

//   db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     console.log(err)
//   })

//   console.log("Registro deletado com sucesso")
// })
