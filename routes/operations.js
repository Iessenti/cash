const express = require('express')
const dbpool = require('../database')
const router = express.Router()
const jsonParser = express.json();

const sql1 = `SELECT * FROM operations WHERE bankbookId=?`

router.get(
    '/getAllOperations/:accountId',
    jsonParser,
    async (req, res) => {
        try {

            let accountId = req.query.accountId

            dbpool.query(sql1, accountId, (err, results) => {
                if (results && results.length > 0) {
                    res.status(200).json({operationsList: results})
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

            dbpool.query( `INSERT INTO operations(name, category, type, color, value, date, bankbookId) VALUES(?)`, [name, category, type, color, value, date, bankbookId], (err, results) => {})

            dbpool.query( `SELECT * FROM bankbooks WHERE bankbookId=?`, bankbookId, (err, results) => {
                if (results && results.length > 0) {
                    let currentValue = results[0].currentValue
                    if (type === '+') {
                        currentValue += value
                    } else if (type === '-') {
                        currentValue -= value
                    }
                    dbpool.query( `UPDATE bankbooks SET currentValue=? WHERE bankbookId=?`, [currentValue, bankbookId], (err, result) => {
                        res.json(200).message({currentValue: currentValue})
                    })
                }
            })

        } catch(error) { 
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

module.exports = router