import { deleteTransfer, updateTransfer } from './api.js';

export function renderTransfer(transferData, updateBalance) {
    const transfer = document.createElement('div');
    transfer.classList.add('transfer');
    transfer.id = transferData.id;
  
    const name = document.createElement('h3');
    name.classList.add('transfer-name');
    name.textContent = transferData.name;
  
    const amount = document.createElement('div');
    amount.classList.add('transfer-amount');
    amount.innerHTML = `R$ ${transferData.amount}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('transfer-delete');
    deleteButton.textContent = 'Delete this transfer';
    deleteButton.addEventListener('click', async () => {
      if (await deleteTransfer(transferData.id)) {
        transfer.remove();
        updateBalance();  
      } else {
        console.error('Failed to delete transfer');
      }
    });
  
    const updateButton = document.createElement('button');
    updateButton.classList.add('transfer-update');
    updateButton.textContent = "Update Transfer";
    updateButton.addEventListener('click', async () => {
      const newName = prompt("Qual o novo nome desta transferência?");
      const newAmount = Number(prompt("Digite o valor"));
      const updatedTransfer = await updateTransfer(transferData.id, { name: newName, amount: newAmount });
  
      name.textContent = updatedTransfer.name;
      amount.innerHTML = `R$ ${updatedTransfer.amount}`;
      updateBalance();
    });
  
    transfer.append(name, amount, deleteButton, updateButton);
    document.querySelector("#transfers").appendChild(transfer);
  }

  export function updateBalanceDisplay(balance) {
    const balanceText = document.getElementById('balance');
    balanceText.textContent = `R$: ${balance.toFixed(2)}`;
  }
  