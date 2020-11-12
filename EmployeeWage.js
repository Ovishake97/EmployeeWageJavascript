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
let empCheck=Math.floor(Math.random()*10)%3;
let empHours = GetEmployeeWage(empCheck)
let dailyWage = empHours*WAGE_PER_HOUR;
console.log("Wage per day is "+dailyWage);