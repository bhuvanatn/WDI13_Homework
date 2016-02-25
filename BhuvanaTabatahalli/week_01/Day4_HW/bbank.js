// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript.
// The bank has many accounts and the following capabilities that
// you need to write.
//
// Bank
//
// There is only one bank.
// * This bank has an array of accounts.
// * The bank needs a method that will return the total sum of money
// in the accounts.
// +It also needs an addAccount method that will enroll a new account at
//  the bank and add it to the array of accounts.
// There is no need to create additional functions of the bank to delete
// accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share
// a set of common functionality.
//
// Accounts

// Accounts have a current balance and owner's name.
// You should be able
// to
// *deposit
// *withdraw
// from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return
// values -- you may also have your functions console.log() values to help
// you see your code working.
//
// You should write a basic story through a series of JavaScript commands
// that shows that the methods do indeed work as expected: add some accounts,
// show the total balance, make some deposits and withdrawals,
// show the new total balance. */

var bank = [
 {
 name: 'abc',
 balance: 5000
},
 {
 name: 'Xyz',
 balance: 6000
},
{
name: 'ram',
balance: 7000
}
];

var sumMoney = function(){
 var totalBalance = 0;
 for (var i = 0; i < bank.length; i++) {
    totalBalance += bank[i].balance;
 }
 return totalBalance;
};

var addAccount = function(name, ammount){
     bank.push({name:name, balance: ammount});
     console.log(name + ' has now $' + ammount + ' in the new account');
     return name + ammount;
};

var deposit = function (name, ammount){
 for (var i = 0; i < bank.length; i++) {
   if (name === bank[i].name){
     bank[i].balance += ammount;
     console.log(name + ' has now $' + bank[i].balance + ' in the account');
       return bank[i].balance;
   }
 }
};

var withdraw = function (name, ammount){
 for (var i = 0; i < bank.length; i++) {
   if (name === bank[i].name){
     bank[i].balance -= ammount;
     console.log(name + ' has now $' + bank[i].balance + ' in the account');
     return bank[i].balance;

    }
 }
};

function transfer(name1, ammount, name2){
 withdraw(name1,ammount);
 deposit(name2,ammount);
return transfer(name1+ withdraw + name2 + deposit);
}
addAccount('bbc',9087);
console.log(bank);
