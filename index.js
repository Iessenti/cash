const express = require('express')
const dbpool = require('./database')
const app = express()

const cors = require('cors')
app.use(cors())

const sqlQueries = require('./sqlQueries')

app.use('/api/auth/', require('./routes/auth'))
app.use('/api/bankbooks/', require('./routes/bankbooks'))
app.use('/api/operations/', require('./routes/operations'))

async function start() {
	try {
		// dbpool.query(sqlQueries.CHECK_IS_DATABASE_CREATED, (err, results) => {
        //     if (results.length === 0) {
                dbpool.query(sqlQueries.CREATE_USERS_TABLE, (err, results) => {})
                dbpool.query(sqlQueries.CREATE_BANKBOOKS_TABLE, (err, results) => {})
                dbpool.query(sqlQueries.CREATE_OPERATIONS_LIST_TABLE, (err, results) => {})
        //     }
		// })
		app.listen(5000, () => console.log(`App has been started on port ${5000}...`))

	} catch(e) {
		console.log('Server error', e.message)
		process.exit(1)
	}
}

start()