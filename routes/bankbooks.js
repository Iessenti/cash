const express = require('express')
const dbpool = require('../database')
const router = express.Router()
const jsonParser = express.json();

const sql1 = `SELECT * FROM bankbooks WHERE phone=?`
const sql2 = `SELECT * FROM users WHERE phone=?`
const sql3 = `INSERT bankbooks(name, userId, currentValue) VALUES (?)`

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
                phone, 
                name,
                currentValue
            } = req.body

            dbpool.query( sql2, phone, (err, results) => {
                if (results && results.length > 0) {

                    dbpool.query( sql3, [name, results[0].id, currentValue] )
                    res.status(200)
                    
                }
            })

        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

module.exports = router