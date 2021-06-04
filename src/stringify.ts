import { isDateRounded } from './stringifyUtils/isDateRounded'
import {
  createYearOperator, createDayOrWeekOperator, createHourOperator, createMinuteOperator,
  createSecondOperator, createMonthOperator
} from './stringifyUtils/createShorthandOperator'


function checkForAndGetDateRoundValue(date: Date, now: Date): string|null { 
  if (
    isDateRounded(date) && 
    isDateRounded(date) !== isDateRounded(now)
  ) return isDateRounded(date)

  return null
}

export function stringify(date: Date, givenNow?: Date): string {
  const now = givenNow || new Date()
  const unitsAndOperators:string[] = []
  const dateRound = checkForAndGetDateRoundValue(date, now)

  if (dateRound === '/y') createYearOperator(now, date, unitsAndOperators)
  
  // if rounded by months,  get                                 months and years between
  // if rounded by weeks,   get                    weeks/days, months, and years between
  // if rounded by days,    get                    weeks/days, months, and years between
  // if rounded by hours,   get                   hours, days, months, and years between
  // if rounded by minutes, get          minutes, hours, days, months, and years between
  // if rounded by seconds, get seconds, minutes, hours, days, months, and years between

  if (!dateRound) {
    createYearOperator(now, date, unitsAndOperators)
    createMonthOperator(now, date, unitsAndOperators)
    createDayOrWeekOperator(now, date, unitsAndOperators)
    createHourOperator(now, date, unitsAndOperators)
    createMinuteOperator(now, date, unitsAndOperators)
    createSecondOperator(now, date, unitsAndOperators)
  }

  let result = 'now'
  if (unitsAndOperators.length > 0) result = `${result}${unitsAndOperators.join('')}`

  return dateRound ? result + dateRound : result
}
