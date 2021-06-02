import { subtractDays, subtractMonths, subtractYears, subtractHours,
  subtractMinutes, subtractSeconds, subtractWeeks } from "./operateDateUtils/subtractUnit"
import { addDays, addMonths, addYears, addHours,
  addMinutes, addSeconds, addWeeks } from "./operateDateUtils/addUnit"
import { roundToClosestDay, roundToClosestWeek, roundToClosestSecond, roundToClosestMinute,
  roundToClosestHour, roundToClosestYear, roundToClosestMonth } from "./operateDateUtils/roundToClosestUnit"


export function operateDate(operation: string, date:Date):Date { 
  const unit = operation.slice(-1)
  const quantity = parseInt(operation.slice(1, -1))

  if (unit === 'd') {
    if (operation[0] === '-') return subtractDays(date, quantity)
    if (operation[0] === '+') return addDays(date, quantity)
    if (operation[0] === '/') return roundToClosestDay(date)
    throw new Error('Error: OPERATOR NOT RECOGNISED');
  }

  if (unit === 'M') {
    if (operation[0] === '-') return subtractMonths(date, quantity)
    if (operation[0] === '+') return addMonths(date, quantity)
    if (operation[0] === '/') return roundToClosestMonth(date)
    throw new Error('Error: OPERATOR NOT RECOGNISED');
  }


  if (unit === 'y') {
    if (operation[0] === '-') return subtractYears(date, quantity)
    if (operation[0] === '+') return addYears(date, quantity)
    if (operation[0] === '/') return roundToClosestYear(date)
    throw new Error('Error: OPERATOR NOT RECOGNISED');
  }


  if (unit === 'h') {
    if (operation[0] === '-') return subtractHours(date, quantity)
    if (operation[0] === '+') return addHours(date, quantity)
    if (operation[0] === '/') return roundToClosestHour(date)
    throw new Error('Error: OPERATOR NOT RECOGNISED');
  }


  if (unit === 'm') {
    if (operation[0] === '-') return subtractMinutes(date, quantity)
    if (operation[0] === '+') return addMinutes(date, quantity)
    if (operation[0] === '/') return roundToClosestMinute(date)
    throw new Error('Error: OPERATOR NOT RECOGNISED');
  }


  if (unit === 's') {
    if (operation[0] === '-') return subtractSeconds(date, quantity)
    if (operation[0] === '+') return addSeconds(date, quantity)
    if (operation[0] === '/') return roundToClosestSecond(date)
    throw new Error('Error: OPERATOR NOT RECOGNISED');
  }


  if (unit === 'w') {
    if (operation[0] === '-') return subtractWeeks(date, quantity)
    if (operation[0] === '+') return addWeeks(date, quantity)
    if (operation[0] === '/') return roundToClosestWeek(date)
    throw new Error('Error: OPERATOR NOT RECOGNISED');
  }
  
  throw new Error('Error: UNIT OF TIME NOT RECOGNISED');
}
