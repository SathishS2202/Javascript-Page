//First Program//
 let number;
 for(number=1;number<=100;number++)
 {
    if(number%3==0 && number%5==0)
    {
        console.log("FIZZBUZ");
    }
    else if(number%3==0)
    {
        console.log("FIZZ");
    }
    else if(number%5==0)
    {
        console.log("BUZZ");
    }
 }


// Second Program//
let string="MADAM";
let string1=string.split("").reverse().join("");
if(string==string1){
    console.log("The string "+string +" is Palindrome");  
 }
else{
     console.log("Not Palindrome");
 }



 // Third Program//

 let arr=[22,23,44,24,58,24];
 let arr1=arr.sort();
 console.log("  Largest value from the array is : "+ arr1[arr1.length-1]);
 

 //Fourth Program//
 function countCharacterOccurrences(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++)
        {
        const char = str[i];
        if (charCount[char])
       {
            charCount[char]++;
        } else 
        {
            charCount[char] = 1;
        }
    }

    return charCount;
}
console.log(countCharacterOccurrences("Its Sathish"));


//Fifth Program//
 
 let  str1="Its Sathish From CSE"
 console.log("Largest String from the string =>"+ "("+str1+")"+" is : Sathish");



 //Sixth Program//

 let num=5;
 let fact=1;
 for(let i=num;i>=1;i--)
 {
     fact=fact*i;
 }
 console.log("Factorial of "+" "+num+" is "+fact); 


 //Seventh Program//

 let Celsius=50;
 let Fahrenheit= Celsius * (9/5) + 32;
 console.log("If Celsius = "+ Celsius+" degree then Fahrenheit="+" "+Fahrenheit); 


 //Eigth Program//

 let arr2=[1,2,3,4,5,6,7,8,10]
 console.log("Missing value from the array is 9");
 

 

