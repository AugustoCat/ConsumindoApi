import { fetchTransfers, addTransfer } from './api.js';
import { renderTransfer, updateBalanceDisplay } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  loadTransfers();
  updateBalance();
});

async function loadTransfers() {
  const transfers = await fetchTransfers();
  transfers.forEach(transfer => renderTransfer(transfer, updateBalance));
}

async function updateBalance() {
  const balance = await calculateBalance();
  updateBalanceDisplay(balance);
}

async function calculateBalance() {
  let balance = 0;
  const transfers = await fetchTransfers();
  transfers.forEach(transfer => {
    balance += Number(transfer.amount);
  });
  return balance;
}

const form = document.querySelector('form');
form.addEventListener('submit', async (ev) => {
  ev.preventDefault();

  const transferData = {
    name: document.querySelector('#name').value,
    amount: document.querySelector('#amount').value
  };

  const savedTransfer = await addTransfer(transferData);
  form.reset();
  renderTransfer(savedTransfer, updateBalance);
});
