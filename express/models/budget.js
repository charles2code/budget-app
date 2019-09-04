const mongoose = require('mongoose');


const budgetSchema = new mongoose.Schema({
  name: String,
  budget: Number,
  expenses: String,
  expenseAmount: Number,
  balance: Number
});

module.exports = mongoose.model('Budget', budgetSchema);