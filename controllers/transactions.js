// controllers/transactions.js
const Transaction = require('../models/Transaction');

// GET all transactions for user
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// POST new transaction
exports.addTransaction = async (req, res) => {
  const { type, category, amount, date } = req.body;
  try {
    const newTransaction = new Transaction({
      user: req.user,
      type,
      category,
      amount,
      date
    });
    const savedTransaction = await newTransaction.save();
    res.json(savedTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// DELETE a transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ msg: 'Transaction not found' });
    if (transaction.user.toString() !== req.user) return res.status(401).json({ msg: 'Not authorized' });

    await transaction.remove();
    res.json({ msg: 'Transaction removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
