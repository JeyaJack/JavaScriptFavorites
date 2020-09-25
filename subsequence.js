function isValidSubsequence(array, sequence) {
   
	const arrToObj = (srcArr) => Object.assign({}, ...srcArr.map((curElement,index) =>{
		return {[curElement]:index}
	}))
	let objnew = arrToObj(array);
	console.log(objnew);
	

	let prevIndex=-1;
	for(let i=0; i < sequence.length;i++){
		let seqElement = sequence[i];
			let curIndex =-1;
		if (seqElement in objnew){
			 curIndex= objnew[seqElement];
			if (curIndex > prevIndex){
				prevIndex = curIndex;
			}	else{
				return false;
			}
		} else{
			return false;
		}
	}
	return true;
  // Write your code here.
}
const array=[1,1,1,1,1];
const sequence=[1,1,1];
console.log(isValidSubsequence(array, sequence));