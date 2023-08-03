function missingNum(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;

    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    const missingNumber = totalSum - actualSum;
    return missingNumber;
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); 
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));  
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); 
console.log(missingNum([9, 8, 7, 6, 5, 4, 3, 2, 1]));  
console.log(missingNum([1, 9, 8, 7, 6, 5, 4, 3, 2]));  
