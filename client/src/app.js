var Bank = require('./bank/bank.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');
var BankView = require('./views/bank_view')


window.onload = function() {
  console.log('loaded');
  var bank = new Bank();
  for (accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }
  var view = new BankView(bank);
  view.render();

  var payInterestButton = document.getElementById('pay-interest');
   
  payInterestButton.onclick = function() {
    view.bank.payInterest(1.1);
    console.log(view.bank);
    view.render();
  }
  

//   var totalDisplay = document.getElementById('total');
//   totalDisplay.innerText = "Total: £" + bank.totalCash();

//   var accountList = document.getElementById('accounts');

//   for (account of bank.accounts){
//     var accountListItem = document.createElement('li');
//     accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
//     accountList.appendChild(accountListItem);
//   }


//   var businessList = document.getElementById('business-accounts')
//   var businessAccounts = bank.filteredAccounts("business");
//     for (account of businessAccounts) {
//       var businessAccListItem = document.createElement('li');
//       businessAccListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
//       businessList.appendChild(businessAccListItem);

//       var businessTotal = document.getElementById('business-total')
//       businessTotal.innerText = "Business Account Totals: £"+ bank.totalCash('business').toFixed(2);

//     }

//   var personalList = document.getElementById('personal_accounts')
//   var personalAccounts = bank.filteredAccounts("personal");
//     for (account of personalAccounts) {
//       var personalAccListItem = document.createElement('li');
//       personalAccListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
//       personalList.appendChild(personalAccListItem);

//       var personalTotal = document.getElementById('personal-total')
//       personalTotal.innerText = "Personal Account Totals: £"+ bank.totalCash('personal').toFixed(2);

//     }
// };
}