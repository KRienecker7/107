module.exports = {
    test: function()
    {
        console.log("called!");
        return "test";
    },
    sum: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2){
         if(num2==0) {
            console.log("Error!you are dividing by zero");
            return 0;
        }
        else {
            return num1 / num2;
        }
    },
    smaller: function(num1, num2){
        if(num1 < num2) return num1;
        return num2;  
    },

    greater: function(num1, num2, num3){
        var greater = Math.max(num1, num2, num3);  
    },

    oddvseven: function oddOrEven(x) {
        return ( x & 1 ) ? "odd" : "even";
      },
    oddvsevenPrint: function checkNumber(argNumber) {
        document.getElementById("result").innerHTML = "Number " + argNumber + " is " + oddOrEven(argNumber);
      }

    //isEven: function(num1, num2, num3) {
        //return true if num is even
        //otherwsie, return false
        // mod (modulus) operator  %  i.e. 11 % 2 = 1 because remainder 1
    //}
};