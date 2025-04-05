const tempString = 'AMOLYSHR';
const charNumber = {}

for(let char of tempString){
    if(tempString[char] !== ''){
        charNumber[char] = (charNumber[char] || 0)+1;
    }
}

console.log({charNumber})