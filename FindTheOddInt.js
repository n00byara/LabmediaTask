let arr = [0,1,0,1,0].sort((a,b) => {return a - b})

function getElement(arr){
    for(let i = 0; i < arr.length; i++){
        let count = 1,
            index
            
        for(let k = i + 1; k < arr.length; k++){
    
            if(arr[i] == arr[k]){
                count++
                index = k
            }
        }

        if(count % 2 == 0){
            i = index
        } else{
            return arr[i]
        }
    }
}
console.log(getElement(arr))

