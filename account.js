function BankAccount(accountNumber,name,type,balance){
    this.accountNumber = accountNumber
    this.name = name
    this.type = type
    this.balance = balance
    this.active = true
}


// Method to deposit amount into the account
BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log("Deposit of " + amount + " successful.");
        console.log("Updated balance: " + this.balance);
    } else {
        console.log("Invalid amount for deposit.");
    }
}

// Method to withdraw amount from the account
BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount && amount > 0) {
        this.balance -= amount;
        console.log("Withdrawal of " + amount + " successful.");
        console.log("Updated balance: " + this.balance);
    } else {
        console.log("Insufficient funds for withdrawal or invalid amount.");
    }
}
// Method to check account balance
BankAccount.prototype.checkBalance = function() {
    console.log("Current balance: " + this.balance);
}

BankAccount.prototype.isActive = function() {
    return this.active;
};

// Function to calculate total balance of all active accounts
function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

let account1 = new BankAccount(123456, "John Doe", "Savings", 1000);
let account2 = new BankAccount(789012, "Jane Smith", "Checking", 500);

account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.withdraw(700);
account2.checkBalance();


console.log("Account 1 active status: " + account1.isActive());
console.log("Account 2 active status: " + account2.isActive());
let allAccounts = [{account1, account2}];
console.log("Total balance of all active accounts: " + getTotalBalance(allAccounts));
