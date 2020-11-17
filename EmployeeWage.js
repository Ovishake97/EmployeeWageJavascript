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
//UC10-storing the daily hours and wages in JSObjects and printing them
const MAX_WORKING_HOURS=160;
const MAX_WORKING_DAYS=20;
let totalWorkingDays=0;
let totalWorkingHours=0;
let dailyWageAndHoursArr=new Array();
let dailyWageMap = new Map();
let dailyEmpHoursMap = new Map();
function calculateWage(emphours){
    return emphours*WAGE_PER_HOUR;
}
const GetTotal=(total,daily)=>{
    return total+daily;
}

while(totalWorkingDays<MAX_WORKING_DAYS && totalWorkingHours<=MAX_WORKING_HOURS){
    let empCheck=Math.floor(Math.random()*10)%3;
    totalWorkingHours+=GetEmployeeWage(empCheck);
    totalWorkingDays++;
    let emphours = GetEmployeeWage(empCheck);
    let dailyWage= calculateWage(emphours);
    dailyWageAndHoursArr.push({
        days:totalWorkingDays,
        hours: emphours,
        wages: dailyWage,
        toString(){
            return '\nDay no: '+this.days+  ' ,Hours worked' +this.hours+ ' and wage earned '+this.wages
        },
    });
}
console.log("Daily hours worked and wages earned "+dailyWageAndHoursArr);
