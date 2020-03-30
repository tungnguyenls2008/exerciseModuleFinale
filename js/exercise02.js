function tryRemoveFromArray(arr,x) {
    document.getElementById('display2').innerHTML="The given array is: "+arr+"<br>";
    for (let i = 0; i <arr.length ; i++) {
        if(arr[i]===x){
            arr.splice(i,1);
        }
    }console.log(arr);
    document.getElementById('display2').innerHTML+="Array without x(21) is: "+ arr;
}

/*let arr=[3,6,21,78,3,5,77,1,32,5,21];
let x=21;*/

