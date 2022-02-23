const express = require('express')
const dbpool = require('../database')
const router = express.Router()
const jsonParser = express.json();

const sql1 = `SELECT * FROM users WHERE phone=?`

const sql2 = `INSERT users(phone) VALUES (?)`

router.post(
    '/login/',
    jsonParser,
    async (req, res) => {
        try {

            const { phone } = req.body
            console.log(phone)
            dbpool.query( sql1, phone, (err,results) => {
                let isUserExist = false
                if (results && results.length > 0) {
                    isUserExist = true
                } else {
                    dbpool.query( sql2, phone, () => {})
                }
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
                res.json({ token, isUserExist: isUserExist, phone: phone })
            })
        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

module.exports = router