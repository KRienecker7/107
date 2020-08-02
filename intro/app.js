/**
 *  Change Directory:
 * cd
 * 
 * Clear:
 *  win: cls
 *  mac: clear
 * 
 */

 // imports
    var myMath = require("./myMath");

function test() {
    var name= "YOUR NAME";
    var age = 34;

    console.log(name);

    if(age<60) {
        console.log("You are still young");
    }
    else {
        console.log("Sorry, you are getting old");
    }
}
    // print number from 3 to 12, except the 7

    for(let i = 3; i< 13; i++){
        if(i != 7){
            console.log(i);
        }
    }

    //arrays
    var name = [];
    name.push("Kenny");
    name.push("Rosa");
    name.push("Mom");
    name.push("Saber");

    console.log(name);

    // print them in reverse order

    console.log(name.reverse());

    for(let j = name.length - 1; j >=0; j--) {
        console.log(name[j])

    }

 function init() {
     console.log("Hello NodeJS");

     //test();

    myMath.test();

    var res = myMath.sum(21, 21);
    console.log("Sum: " + res);

    var bad = myMath.divide(1, 0);
    console.log("Bad: " + bad);

    var good = myMath.divide(123, 3);
    console.log("Good: " + good);


    var g1 = myMath.greater(34,78,2);
    console.log(g1) //78

    var g2 = myMAth.greater(-9,0,200);
    console.log(g2) //200

    var even = myMath.isEven(264);
    console.log(even);//True

    var odd = myMath.isEven(777);
    console.log(odd);//False
    
}

 function calculateTaxes () {

 }


 init();