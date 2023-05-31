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