import { checkForAndGetDateRoundValue } from './stringifyUtils/checkForAndGetDateRoundValue'


export function stringify(date: Date, givenNow?: Date): string {
  let now = givenNow || new Date()
  const dateRound = checkForAndGetDateRoundValue(date, now)
  console.log(`dateRound:............:${dateRound}`)

  // if rounded by years, get yearsBetween
  // if rounded by months, get months and years between
  // if rounded by weeks, get whole weeks or days between, months, and years between
  // if rounded by days, get days, months, and years between
  // if rounded by hours, get hours, days, months, and years between
  // if rounded by minutes, get minutes, hours, days, months, and years between
  // if rounded by seconds, get seconds, minutes, hours, days, months, and years between
  // if not rounded at all - get all of the above?

  const differenceInSeconds = (now.getTime() - date.getTime()) / 1000;
  const yearsBetween = Math.floor(differenceInSeconds / 31536000);
  const monthsBetween = Math.floor((differenceInSeconds % 31536000) / 2628000);
  const daysBetween = Math.floor(((differenceInSeconds % 31536000) % 2628000) / 86400);
  console.log(`differenceInSeconds:..:${differenceInSeconds}`)
  console.log(`yearsBetween:.........:${yearsBetween}`)
  console.log('monthsBetween:', monthsBetween)
  console.log('daysBetween:', daysBetween)

  return 'now/y' // Fake News
}
