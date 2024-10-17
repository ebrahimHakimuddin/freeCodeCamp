let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]; 

function checkPrice(){
    let availableChange = 0;
    let cid_dict = {}
    for(let i = 0; i < cid.length; i++){availableChange += cid[i][1];cid_dict[cid[i][0]] = cid[i][1];}
    price = parseFloat(price);
const cash = parseFloat(document.getElementById("cash").value);
    let change = (parseFloat(cash) - parseFloat(price)).toFixed(2);
    const changeCopy = change
    if(cash < price){
        alert("Customer does not have enough money to purchase the item");
    }else if(cash === price ){
        document.getElementById("change-due").innerHTML = "No change due - customer paid with exact cash";
    }else if(change > availableChange){
        document.getElementById("change-due").innerHTML = "Status: INSUFFICIENT_FUNDS";
    }else{
        let changeBreakdown = {};  // Store the change to return
                const denominations = [
                    ["ONE HUNDRED", 100],
                    ["TWENTY", 20],
                    ["TEN", 10],
                    ["FIVE", 5],
                    ["ONE", 1],
                    ["QUARTER", 0.25],
                    ["DIME", 0.10],
                    ["NICKEL", 0.05],
                    ["PENNY", 0.01]
                ];
                for (let i = 0; i < denominations.length; i++) {
                    let denom = denominations[i][0];
                    let denomValue = denominations[i][1];
                    if (change >= denomValue && cid_dict[denom] > 0) {
                        let denomAmount = Math.min(Math.floor(change / denomValue), cid_dict[denom] / denomValue);
                        if (denomAmount > 0) {
                            changeBreakdown[denom] = denomAmount * denomValue;
                            change -= denomAmount * denomValue;
                            change = parseFloat(change.toFixed(2));  // Ensuring floating point precision
                            cid_dict[denom] -= denomAmount * denomValue;
                        }
                    }
        }
        let breakdownString = Object.keys(changeBreakdown).map(key => `${key}: $${changeBreakdown[key].toFixed(2)}`).join(" ");
        if (change > 0){
            document.getElementById("change-due").innerHTML = "Status: INSUFFICIENT_FUNDS";
        }else if (parseFloat(changeCopy) === parseFloat(availableChange)){
            document.getElementById("change-due").innerHTML = `Status: CLOSED ${breakdownString}`;
        }else{
            document.getElementById("change-due").innerHTML = `Status: OPEN ${breakdownString}`;
        }
    }
}