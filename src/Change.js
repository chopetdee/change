import React from 'react';
const Change = props => {
    //to advoid operation on decicmal problem 
    //the easy way is just to multiply everything with 100 first 
    //manually add to moneys, and function called multi100ToStr
    const moneys = [
        [10000, "100 dollar bill", "100 dollar bills"],
        [5000, "50 dollar bill", "50 dollar bills"],
        [2000, "20 dollar bill", "20 dollar bills"],
        [1000, "10 dollar bill", "10 dollar bills"],
        [500, "5 dollar bill", "5 dollar bills"],
        [100, "1 dollar bill", "1 dollar bills"],
        [25, "quarter", "quarters"],
        [10, "dime", "dimes"],
        [5, "nickel", "nickels"],
        [1, "penny", "pennies"]
    ]
    const back = []
    let result = ''
    let counter = 0 // for backward check
    if (props.money.toString().match(/^\d*\.?\d{0,2}0*$/gm)) { // check input
        let inp = multi100ToStr(props.money)
        moneys.forEach((elt, i) => {  //to get number of each bill
            let count = 0
            if (parseInt(inp) >= elt[0]) {
                if (!i){  // advoid bigIng by cut out string for 100 dollar bills
                    count = inp.slice(0,-4)
                    inp = parseInt(inp.slice(inp.length-4))
                } else {
                    count = Math.floor(inp/elt[0])
                    inp -= elt[0]*count
                    counter += count*elt[0] // for backward check
                }
                count > 1 
                    ? back.push(`${count} ${elt[2]}`)
                    : back.push(`${count} ${elt[1]}`)
            }
        })

        // backward check
        const temInp = multi100ToStr(props.money)
        parseInt(temInp.slice(-4)) === counter ? console.log(true) : console.log(parseInt(temInp.slice(-4) ) , counter)

        if (back.length > 2) back[back.length-1] = "and "+ back[back.length-1]
        result = back.length   //to put to string and handle invalid input
            ? `Your change is ${back.join(', ')}.`
            : `There is no change.`
    } else {
        result = 'Please only put positive numbers, with no more that 2 decimals.'
    }
    return (
        <React.Fragment>
            {result}
        </React.Fragment>
    )
    function multi100ToStr(inp){
        const arr = inp.toString().split('.')
        let res = arr[0]+"00"
        if (arr[1]) {
            if (arr[1].length === 1) res = arr[0]+arr[1]+"0"
            else if (arr[1].length === 2) res = arr[0]+arr[1]
            else if (arr[1].length > 2) res = arr[0]+arr[1].slice(0, 2) //ignore 0 after 2nd decimal
        }        
        return res
    }
}
export default Change