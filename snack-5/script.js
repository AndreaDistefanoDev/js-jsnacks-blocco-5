const nums = [2, 8, 4, 7, 12, 87];
const evensNum=nums.filter((nums)=>{
    if (nums%2 ===0) {
        return true
    }
})
console.log(evensNum);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]