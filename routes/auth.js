const express = require('express')
const dbpool = require('../database')
const router = express.Router()
const jsonParser = express.json();

router.post(
    '/login/',
    jsonParser,
    async (req, res) => {
        try {

            const { phone } = req.body
            dbpool.query( `SELECT * FROM users WHERE phone=?`, phone, (err,results) => {
                let isUserExist = false
                let id = 0
                let name = ''
                if (results && results.length > 0) {
                    isUserExist = true
                    id = results[0].id
                    name = results[0].name
                } else {
                    dbpool.query( `INSERT users(phone) VALUES (?)`, phone, (error, result) => {
                        if (result.insertId) {
                            id = result.insertId
                        }
                    })
                }
                const token = 'token2h'
                res.json({ token: token, isUserExist: isUserExist, phone: phone, id: id, name: name })
            })
        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

router.post(
    '/createName/',
    jsonParser,
    async (req, res) => {
        try {

            const { id, name } = req.body

            dbpool.query( `UPDATE users SET name=? WHERE id=?`, [name, id], (err,result) => {
                res.status(200)
            })
        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

module.exports = router