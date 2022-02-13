function getInputValue(){
    const depositMoney=document.getElementById('deposit');
    const depositAmmountText=depositMoney.value;
    const depositAmmount=parseFloat(depositAmmountText);
    depositMoney.value='';
    return depositAmmount;
}
document.getElementById('deposit-btn').addEventListener('click',function(){
    // const depositMoney=document.getElementById('deposit');
    // const depositAmmountText=depositMoney.value;
    // const depositAmmount=parseFloat(depositAmmountText);

    const depositAmmount=getInputValue();
    

    const depositTotal=document.getElementById('deposit-balance');
    const depositTotalText=depositTotal.innerText;
    const newDeposit=parseFloat(depositTotalText);
    depositTotal.innerText=parseFloat(depositAmmount)+newDeposit;


    const balanceTotal=document.getElementById('balance-total');
    const totalBalanceText=balanceTotal.innerText;
    const newTotalBalance=parseFloat(totalBalanceText);
    const newBalance=newTotalBalance+depositAmmount;
    balanceTotal.innerText=newBalance;


    // depositMoney.value='';
})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawMoney=document.getElementById('withdraw');
    const newWithdrawMoneyText=withdrawMoney.value;
    const newWithdrawMoney=parseFloat(newWithdrawMoneyText);
    console.log(newWithdrawMoney);
    

    const withdrawBalance=document.getElementById('withdraw-balance');
    const newWithdrawBalanceText=withdrawBalance.innerText;
    const currentBalance=parseFloat(newWithdrawBalanceText);
    withdrawBalance.innerText=newWithdrawMoney+currentBalance;

    const balanceTotal=document.getElementById('balance-total');
    const totalBalanceText=balanceTotal.innerText;
    const newTotalBalance=parseFloat(totalBalanceText);
    const reduceBalance=newTotalBalance-newWithdrawMoney;
    balanceTotal.innerText=reduceBalance;



    withdrawMoney.value='';
})