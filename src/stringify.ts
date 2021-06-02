export function stringify(date: Date, givenNow: Date): string {
  let now = givenNow ? givenNow : new Date()
  // 
  // before finding the below, we need to know whether the number is rounded or not
  // if milliseconds === 0,                                       then we've rounded seconds
  // if seconds      === 0,      and the above,                   then we've rounded minutes
  // if minutes      === 0,      and the above,                   then we've rounded hours
  // if hours        === 0,      and the above,                   then we've rounded days
  // if day          === Monday, and the above,                   then we've rounded weeks 
  // if date         === 1,      and the above, apart from weeks, then we've rounded Months
  // if month        === 1,      and the above, apart from weeks, then we've rounded Years
  // 
  const areSecondsRounded = date.getUTCMilliseconds() === 0
  const areMinutesRounded = date.getUTCSeconds()      === 0 // and the above
  const areHoursRounded   = date.getUTCMinutes()      === 0 // and the above
  const areDaysRounded    = date.getUTCHours()        === 0 // and the above
  const areWeeksRounded   = date.getUTCDay()          === 1 // and the above
  const areMonthsRounded  = date.getUTCDate()         === 1 // and the above, apart from weeks
  const areYearsRounded   = date.getUTCMonth()        === 0 // and the above, apart from weeks

  console.log('-date:', date.toLocaleDateString())
  console.log('--now:', now.toLocaleDateString())
  console.log(`areSecondsRounded:${areSecondsRounded}`)
  console.log(`areMinutesRounded:${areMinutesRounded}`)
  console.log(`areHoursRounded:${areHoursRounded}`)
  console.log(`areDaysRounded:${areDaysRounded}`)
  console.log(`areWeeksRounded:${areWeeksRounded}`)
  console.log(`areMonthsRounded:${areMonthsRounded}`)
  console.log(`areYearsRounded:${areYearsRounded}`)
  // 
  // const differenceInSeconds = (now.getTime() - date.getTime()) / 1000;
  // const yearsBetween = Math.floor(differenceInSeconds / 31536000);
  // const monthsBetween = Math.floor((differenceInSeconds % 31536000) / 2628000);
  // const daysBetween = Math.floor(((differenceInSeconds % 31536000) % 2628000) / 86400);
  // console.log('differenceInSeconds:', differenceInSeconds)
  // console.log('yearsBetween:', yearsBetween)
  // console.log('monthsBetween:', monthsBetween)
  // console.log('daysBetween:', daysBetween)
  // 

  return 'now-1y/y' // Fake News
}
