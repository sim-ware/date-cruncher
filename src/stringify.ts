import { checkForAndGetDateRoundValue } from './stringifyUtils/checkForAndGetDateRoundValue'


export function stringify(date: Date, givenNow?: Date): string {
  let now = givenNow || new Date()
  const dateRound = checkForAndGetDateRoundValue(date, now)
  console.log(`dateRound:............:${dateRound}`)

  const differenceInSeconds = (now.getTime() - date.getTime()) / 1000;
  const yearsBetween = Math.floor(differenceInSeconds / 31536000);
  const monthsBetween = Math.floor((differenceInSeconds % 31536000) / 2628000);
  const daysBetween = Math.floor(((differenceInSeconds % 31536000) % 2628000) / 86400);
  console.log(`differenceInSeconds:..:${differenceInSeconds}`)
  console.log(`yearsBetween:.........:${yearsBetween}`)
  console.log('monthsBetween:', monthsBetween)
  console.log('daysBetween:', daysBetween)

  return 'now-1y/y' // Fake News
}
