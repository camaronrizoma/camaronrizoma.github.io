document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;

    addTransaction(description, amount, date, type);
    updateBalance();
    clearForm();
});

let transactions = [];

function addTransaction(description, amount, date, type) {
    const transaction = {
        description,
        amount: type === 'expense' ? -amount : amount,
        date: new Date(date)
    };

    transactions.push(transaction);
    transactions.sort((a, b) => b.date - a.date);  // Ordenar por fecha, de más reciente a más antiguo

    renderTransactions();
}

function renderTransactions() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';  // Limpiar la lista

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        const dateString = transaction.date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        listItem.innerHTML = `${transaction.description} - $${transaction.amount.toFixed(2)} <span class="date">(${dateString})</span>`;
        transactionList.appendChild(listItem);
    });
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
    document.getElementById('date').value = '';
}
