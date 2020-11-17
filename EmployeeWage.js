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
//UC8-storing the daily wages in a map and calculating total wage
const MAX_WORKING_HOURS=160;
const MAX_WORKING_DAYS=20;
let totalWorkingDays=0;
let totalWorkingHours=0;
let dailyWageArr=new Array();
let dailyWageMap = new Map();
let dailyEmpHoursMap = new Map();
function calculateWage(emphours){
    return emphours*WAGE_PER_HOUR;
}
const GetTotal=(total,daily)=>{
    return total+daily;
}

while(totalWorkingDays<=MAX_WORKING_DAYS && totalWorkingHours<=MAX_WORKING_HOURS){
    let empCheck=Math.floor(Math.random()*10)%3;
    totalWorkingHours+=GetEmployeeWage(empCheck);
    totalWorkingDays++;
    let emphours = GetEmployeeWage(empCheck);
    let dailyWage= calculateWage(emphours);
    dailyWageArr.push(dailyWage);
    dailyWageMap.set(totalWorkingDays,dailyWage);
    dailyEmpHoursMap.set(totalWorkingDays,emphours);
}
//UC9-Calculating total working days and total wage with the help of arrow functions
let totalHours = Array.from(dailyEmpHoursMap.values()).reduce(GetTotal,0);
let totalWage = Array.from(dailyWageMap.values()).reduce(GetTotal,0);
console.log("Total hours worked: "+totalHours+" and total wage earned "+totalWage);
let fullWorkingDays= new Array();
let partWorkingDays = new Array();
let nonWorkingDays= new Array();
dailyEmpHoursMap.forEach((value,key,map)=>{
    if (value==8) fullWorkingDays.push(key);
    else if(value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days "+fullWorkingDays);
console.log("Part working days "+partWorkingDays);
console.log("Non working days "+nonWorkingDays);
