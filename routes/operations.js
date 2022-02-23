const express = require('express')
const dbpool = require('../database')
const router = express.Router()
const jsonParser = express.json();

const sql1 = `SELECT * FROM operations WHERE bankbookId=?`
const sql2 = `INSERT INTO operations(name, category, type, color, value, date, bankbookId) VALUES(?)`
const sql3 = `SELECT * FROM bankbooks WHERE bankbookId=?`
const sql4 = `UPDATE bankbooks
SET currentValue = ?
WHERE bankbookId = ?`

router.get(
    '/getAllOperations',
    jsonParser,
    async (req, res) => {
        try {

            let bankbookId = req.query.id

            dbpool.query(sql1, bankbookId, (err, results) => {
                if (results && results.length > 0) {
                    res.status(200).json({operations: results})
                }
            })

        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

router.post(
    '/makeOperation',
    jsonParser,
    async (req, res) => {
        try {

            let {
                name,
                category,
                type, 
                color,
                value,
                date,
                bankbookId
            } = req.body

            dbpool.query( sql2, [name, category, type, color, value, date, bankbookId], (err, results) => {})

            dbpool.query( sql3, bankbookId, (err, results) => {
                if (results && results.length > 0) {
                    let currentValue = results[0].currentValue
                    if (type === '+') {
                        currentValue += value
                    } else if (type === '-') {
                        currentValue -= value
                    }
                    dbpool.query( sql4, [currentValue, bankbookId])
                }
            })

        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

module.exports = router