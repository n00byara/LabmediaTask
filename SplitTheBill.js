let group = {
    A: 20, 
    B: 15, 
    C: 10
}

function getSum(obj){
    const values = Object.values(obj)
    const totalAmount = values.reduce((amount, elem) => amount + elem)/values.length
    
    for(let key in obj){
        obj[key] -= totalAmount
    }
    return obj
}
