
class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
    this.transactions = [];
  }

  // get balance() {
  //   // Calculate the balance using the transaction objects.
  // }

  // addTransaction(transaction) {
  //   this.transactions.push(transaction);
  // }

}



class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {

    if (!this.isAllowed()) {
      return;
    }
    this.time = new Date();
    this.account.balance += this.value;
    this.account.transactions.push(this);
    // this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {

  isAllowed() {
    return true;
  }

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }

  get value() {
    return -this.amount;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(500.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);
console.log(myAccount);
