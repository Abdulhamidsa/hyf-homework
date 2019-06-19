
//Age-ify (A future age calculator)



let yearOfBirth = 1996;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log("I will be " +  age  + " years old in " + yearFuture)





//second part (Goodboy-Oldboy)




let dogYearOfBirth = 2010;
let dogYearOfFuture = 2027;
let dogYear = 10 ; 
let shouldShowInDogYears = true;
if(shouldShowInDogYears){
    console.log(" Your dog will be " +  dogYear * 7  + " dog years old in " +  dogYearOfFuture)
}
else {
    console.log(" your dog will be " +  dogYear + " in human years " +  dogYearOfFuture)
}



//third part (Housey pricey)


let wide = 8;
let deep = 10;
let high = 10;
let price = 2500000;
let gardenSizeInm2 = 100;
let volumeInMeters = wide * deep * price;

housePrice = volumeInMeters * 2.5 * 100 + gardenSizeInm2 * 300;

if (price > housePrice) {
    console.log(housePrice + " is less than " + price)
}
else{
    console.log(housePrice + " is expensive than " + price)
}
