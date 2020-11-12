const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
//UC3
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
//UC5
const MAX_WORKING_HOURS=160;
const MAX_WORKING_DAYS=20;
let totalWorkingDays=0;
let totalWorkingHours=0;
let totalWage=0;
while(totalWorkingDays<=MAX_WORKING_DAYS && totalWorkingHours<=MAX_WORKING_HOURS){
    let empCheck=Math.floor(Math.random()*10)%3;
    totalWorkingHours=GetEmployeeWage(empCheck);
    totalWorkingDays++;
    totalWage+=totalWorkingHours*WAGE_PER_HOUR;
}
console.log("Total wage is "+totalWage);
