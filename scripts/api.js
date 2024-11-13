
export async function fetchTransfers() {
    const response = await fetch("http://localhost:3000/transfers");
    return await response.json();
  }
  
export async function addTransfer(transferData) {
    const response = await fetch('http://localhost:3000/transfers', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(transferData)
    });
    return await response.json();
  }
  
export async function deleteTransfer(id) {
    const response = await fetch(`http://localhost:3000/transfers/${id}`, {
      method: "DELETE"
    });
    return response.ok;
  }
  

export async function updateTransfer(id, updatedData) {
    const response = await fetch(`http://localhost:3000/transfers/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify(updatedData)
    });
    return await response.json();
  }