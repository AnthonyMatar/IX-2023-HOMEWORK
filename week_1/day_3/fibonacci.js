function fibonicci(){
    console.log(0);
    console.log(1);
    let myList = [0,1];
    let ind1 = 0;
    let ind2 = 1;
    while(myList.length < 10){
        let newNum = myList[ind1] + myList[ind2];
        ind1++;
        ind2++;
        myList.push(newNum);
        console.log(newNum);
    }
}

fibonicci();

//Partner fibonacci function made by Peter
function fibonacci() {
    let n1 = 0;
    let n2 = 1;
    let fibonacciArray = [n1, n2];
  
    for (let i = 2; i < 10; i++) {
      let nextNum = n1 + n2;
      fibonacciArray.push(nextNum);
      n1 = n2;
      n2 = nextNum;
    }
    console.log(fibonacciArray.join(','));
  }
fibonacci();