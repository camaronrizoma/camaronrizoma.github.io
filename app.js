document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    addTransaction(description, amount, type);
    updateBalance();
    clearForm();
});

let transactions = [];

function addTransaction(description, amount, type) {
    const transaction = {
        description,
        amount: type === 'expense' ? -amount : amount
    };

    transactions.push(transaction);
    renderTransaction(transaction);
}

function renderTransaction(transaction) {
    const transactionList = document.getElementById('transaction-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${transaction.description} - $${transaction.amount.toFixed(2)}`;

    transactionList.appendChild(listItem);
}

function updateBalance() {
    const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0);

    document.getElementById('balance').textContent = balance.toFixed(2);
    document.getElementById('income').textContent = income.toFixed(2);
    document.getElementById('expense').textContent = expense.toFixed(2);
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
