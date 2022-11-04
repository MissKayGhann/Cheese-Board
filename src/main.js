const { User, Board, Cheese } = require('../model')

const main = async () => {
    const boardOne = await Board.findAll({include: User})
    console.table(boardOne[3].toJSON())

}

main()