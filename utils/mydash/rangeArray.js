/*
	* range(4); // => [0, 1, 2, 3] 
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/

function range(start, end, step, isRight) {
    let startNum = 0;
    let endNum;
    let stepNum = 1;
    if(end){
        startNum = start;
        endNum = end;
    }else{
        endNum = start;
    }
    if(step){
        if(step === 0){
            stepNum = 1;
        }else{
            stepNum = Math.abs(step);
        }
    }
  
    let arr = [];
    if(startNum < endNum){
        for (let n = startNum; n < endNum; n += stepNum) {
            if (step === 0) {
                arr.push(startNum);
            }else{
                arr.push(n);
            }
        }
    }else{
        for (let n = startNum; n > endNum; n -= stepNum) {
            if (step === 0) {
                arr.push(startNum);
            }else{
                arr.push(n);
            }
        }
    }
    if(isRight===true){
        arr = arr.reverse();
    }
    return arr;
}