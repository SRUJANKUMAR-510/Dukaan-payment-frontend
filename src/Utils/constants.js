const data = [];

for (let i = 0; i < 21; i++) {
    data.push({
        "Order ID": `#${281209}`,
        "OrderDate": "7 July, 2023",
        "Order Amount": (1278.23).toLocaleString('en-IN', { style: 'currency', currency: 'INR' }),
        "Transaction Fees": "₹22"
    });
}

export const Constants = {
    data
}