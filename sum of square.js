
  function sumofsquare(arr) {
    var sum = 0, 
        i = arr.length;
    while (i--) 
     sum += arr[i] * arr[i];
    return sum;
  }
   
  console.log(sumofsquare([0,1,2,3,4])); 
  