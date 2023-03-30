const checkCashRegister =(price, cash, cid) => {
    const currencyUnits = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let totalCashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);
    let changeDue = cash - price;
  
    if (totalCashInDrawer < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCashInDrawer === changeDue) {
      return { status: "CLOSED", change: cid };
    } else {
      let change = [];
      cid = cid.reverse();
  
      currencyUnits.forEach(item => {
        let name = item[0];
        let value = item[1];
        let amount = cid[currencyUnits.indexOf(item)][1];
        let drawer = (amount / currencyValue).toFixed(2);
        let _return = 0;
  
        if (changeDue >= value) {
          while (changeDue >= value && drawer > 0) {
            changeDue -= value;
            changeDue = Math.round(changeDue * 100) / 100;
            drawer--;
            _return++;
          }
  
          let currencyValueReturned = _return * value;
          change.push([name, currencyValueReturned]);
        }
      });
  
      if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: change };
      }
    }
  }
export {checkCashRegister}