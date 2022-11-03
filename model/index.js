const User = require('./user.model')
const Board = require('./board.model')
const Cheese = require('./cheese.model')


Board.belongsTo(User)
User.hasMany(Board)
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})
Board.belongsToMany(Cheese, {through: 'Board_Cheese'})





module.exports = { User, Board, Cheese }
