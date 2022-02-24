const express = require('express')
const dbpool = require('../database')
const router = express.Router()
const jsonParser = express.json();

const sql1 = `SELECT * FROM bankbooks WHERE phone=?` 

router.get(
    '/getBankbooks/',
    jsonParser,
    async (req, res) => {
        try {

            let phone = req.query.phone

            dbpool.query( sql1, phone, (err, results) => {
                if (results && results.length > 0) {
                    res.status(200).json({bankbooksList: results})
                }
            })

        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

router.post(
    '/createBankbook/',
    jsonParser,
    async (req, res) => {
        try {

            let { 
                id, 
                accountName,
                currentValue
            } = req.body

            dbpool.query( `SELECT * FROM users WHERE phone=?`, [id], (err, results) => {
                if (results && results.length > 0) {
                    let accountId = 0
                    dbpool.query( 
                        `INSERT bankbooks(name, userId, currentValue) VALUES (?)`, 
                        [accountName, results[0].id, currentValue],
                        (err, result) => {  
                            accountId = result.insertId
                        }    
                    )
                    res.status(200).json({ accountId: accountId })
                    
                }
            })

        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

module.exports = router