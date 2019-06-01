// Flight booking fullname function //


function getFullname(firstname, lastname, useFormalName){
if (useFormalName ===true) {return "Lord" + " " + firstname + " " + lastname}
else {return (firstname + " " + lastname)}
    }
console.log(getFullname("Abdulhamid", "Alsaati", true))
console.log(getFullname("Abdulhamid", "Alsaati", false))

/////////////////////////////////////////////






// Event application //

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
let today = new Date();
function getEventWeekDay (TheEventDay){
let eventDay = (TheEventDay + today.getDate()) %7;
return weekDays[eventDay];
}
console.log("The event should be held in" + " : " + getEventWeekDay(8))


/////////////////////////////////////////////






// Weather wear //

const clothesToWear =["Shorts and a T-shirt", "Jeans with jaket"]
const temperture = weather(0);
function weather (temperture){
    if (temperture >= 18) {return ("Today you should wear" + " " + clothesToWear[0])}
    if (temperture <= 0)  {return ("Today you should wear" + " " + clothesToWear[1])}
   }
console.log(temperture)


/////////////////////////////////////////////
