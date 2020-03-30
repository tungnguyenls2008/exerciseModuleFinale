function maxArray(arr) {

    let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    document.getElementById("display3").innerHTML= "highest grade is: "+max;
    }
/*let arr = [2, 9, 3, 10, 0, 4, 8, 6, 9];
let max = maxArray(arr);*/

/*
maxArray(arr);*/
