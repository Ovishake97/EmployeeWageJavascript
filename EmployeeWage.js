const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
function GetEmployeeWage(empCheck){
    switch(empCheck){
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
    break;
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        default:
            return 0;
    }
}
//UC7A - Calculating total wage using foreach and reduce
const MAX_WORKING_HOURS=160;
const MAX_WORKING_DAYS=20;
let totalWorkingDays=0;
let totalWorkingHours=0;
let dailyWageArr=new Array();
let totalWage=0;
function calculateWage(emphours){
    return emphours*WAGE_PER_HOUR;
}
function sum(dailyWage){
    totalWage+=dailyWage;
}
function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}

while(totalWorkingDays<=MAX_WORKING_DAYS && totalWorkingHours<=MAX_WORKING_HOURS){
    let empCheck=Math.floor(Math.random()*10)%3;
    totalWorkingHours+=GetEmployeeWage(empCheck);
    totalWorkingDays++;
    let emphours = GetEmployeeWage(empCheck);
    let dailyWage= calculateWage(emphours);
    dailyWageArr.push(dailyWage);
}
dailyWageArr.forEach(sum);
console.log("Total wage using foreach "+totalWage);
console.log("total wage using reduce "+dailyWageArr.reduce(totalWages,0));
//UC7B- Individual daily wage using array map helper
let dailyCount=0;
function dailyWageCount(wage){
dailyCount++;
return dailyCount+"="+wage;
}
let dailyWageMap = dailyWageArr.map(dailyWageCount);
console.log("Daily wage map is ");
console.log(dailyWageMap);
//UC7C-Show when full time wage of 160 is earned
function fullTimeWage(wage){
    return wage.includes("160");
}
let fulldayWage = dailyWageMap.filter(fullTimeWage);
console.log("Wage map when full time salary is earned");
console.log(fulldayWage);
//UC7D- finding first occurence of full time wage
let firstOccurrence = dailyWageMap.find(fullTimeWage);
console.log("First occurence of full time wage "+firstOccurrence);
//UC7E- Checking all elements of full time wage map is holding full time wage or not
console.log("Checking whether all elemets holding full time wage "+fulldayWage.every(fullTimeWage));
//UC7F- Checking whether daily wage map contains any part time wage
function partTimeWage(wage){
    return wage.includes("80");
}
console.log("Checking for part time wage "+dailyWageMap.some(partTimeWage));
//UC7G- Finding total no of days the employee worked
function totalDaysWorked(wage,days){
    if (wage>0) days++;
    return days;
}
console.log("Total days worked "+dailyWageArr.reduce(totalDaysWorked,0));