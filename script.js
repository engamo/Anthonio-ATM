let accountBalance = 1000;

function checkBalance() {
    alert(`Your account balance is #${accountBalance}`);
}

function withdraw(amount) {
    if (amount <= accountBalance) {
        accountBalance -= amount;
        alert(`You have withdrawn #${amount}. Your new balance is #${accountBalance}`);
    } else {
        alert("Insufficient funds");
    }
}

function deposit(amount) {
    accountBalance += amount;
    alert(`You have deposited #${amount}. Your new balance is #${accountBalance}`);
}

// Anthonio ATM main loop
while (true) {
    const choice = parseInt(prompt("Welcome to ANTHONIO ATM!\n\nChoose an option:\n1. Check Balance\n2. Withdraw\n3. Deposit\n4. Exit"));

    switch (choice) {
        case 1:
            checkBalance();
            break;
        case 2:
            const withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
            withdraw(withdrawAmount);
            break;
        case 3:
            const depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
            deposit(depositAmount);
            break;
        case 4:
            alert("Thank you for using ANTHONIO ATM. Goodbye!");
            // Exit the loop
            break;
        default:
            alert("Invalid choice. Please choose a valid option.");
    }

    if (choice === 4) {
        break; // Exit the loop
    }
}