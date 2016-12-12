var Bank = require('../bank/bank.js');
var Account = require('../bank/account.js');

// var bank = new Bank();

var BankView = function(bank) {
  this.bank = bank;
}

BankView.prototype = {
  clear: function() {
    var clearAccounts = document.getElementById('accounts');
    while (clearAccounts.firstChild){
      clearAccounts.removeChild(clearAccounts.firstChild);
    }
    var clearPersonal = document.getElementById('personal_accounts')
   while(clearPersonal.firstChild){
     clearPersonal.removeChild(clearPersonal.firstChild);
   }
   var clearBusiness = document.getElementById('business-accounts')
   while(clearBusiness.firstChild){
     clearBusiness.removeChild(clearBusiness.firstChild);
   }
 },
  render: function() {
    this.clear();
    var totalDisplay = document.getElementById('total');
    totalDisplay.innerText = "Total: £" + this.bank.totalCash();

    var accountList = document.getElementById('accounts');

    for (account of this.bank.accounts){
      var accountListItem = document.createElement('li');
      accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
      accountList.appendChild(accountListItem);
    }

    var businessList = document.getElementById('business-accounts')
    var businessAccounts = this.bank.filteredAccounts("business");
      for (account of businessAccounts) {
        var businessAccListItem = document.createElement('li');
        businessAccListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
        businessList.appendChild(businessAccListItem);

        var businessTotal = document.getElementById('business-total')
        businessTotal.innerText = "Business Account Totals: £"+ this.bank.totalCash('business').toFixed(2);

      }

    var personalList = document.getElementById('personal_accounts')
    var personalAccounts = this.bank.filteredAccounts("personal");
      for (account of personalAccounts) {
        var personalAccListItem = document.createElement('li');
        personalAccListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
        personalList.appendChild(personalAccListItem);

        var personalTotal = document.getElementById('personal-total')
        personalTotal.innerText = "Personal Account Totals: £"+ this.bank.totalCash('personal').toFixed(2);
      }
  }
}

module.exports = BankView;