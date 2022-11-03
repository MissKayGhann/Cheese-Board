const { User, Board, Cheese } = require('../model')
const db = require('./db')

async function seed() {
    await db.sync ({
        force:true
    })
}

seed()