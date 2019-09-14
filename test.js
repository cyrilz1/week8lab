let test = [1,2,3,4,5,6,7,12,31];
let result = 0;
for (let  i = 0; i < test.length; i++){
    if (test[i] === 31){
        result = i;
    }
};
test.splice(result,1);
console.log(test);