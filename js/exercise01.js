function maxArray(arr) {

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    document.getElementById("display3").innerHTML = "highest grade is: " + max;
}
