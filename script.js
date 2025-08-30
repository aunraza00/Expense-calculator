const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalElement = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('expense-name').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);

  if (name && amount) {
    const li = document.createElement('li');
    li.innerHTML = `${name} - $${amount.toFixed(2)}`;
    expenseList.appendChild(li);

    total += amount;
    totalElement.textContent = total.toFixed(2);

    form.reset();
  }
});
