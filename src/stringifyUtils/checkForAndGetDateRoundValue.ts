export function isDateRounded(date: Date): string | null {
  const areSecondsRounded = date.getUTCMilliseconds() === 0
  const areMinutesRounded = date.getUTCSeconds() === 0 && areSecondsRounded
  const areHoursRounded = date.getUTCMinutes() === 0 && areMinutesRounded
  const areDaysRounded = date.getUTCHours() === 0 && areHoursRounded
  const areWeeksRounded = date.getUTCDay() === 1 && areDaysRounded
  const areMonthsRounded = date.getUTCDate() === 1 && areDaysRounded
  const areYearsRounded = date.getUTCMonth() === 0 && areMonthsRounded

  if (areWeeksRounded && !areMonthsRounded) return '/w'
  if (areYearsRounded) return '/y'
  if (areMonthsRounded) return '/M'
  if (areDaysRounded) return '/d'
  if (areHoursRounded) return '/h'
  if (areMinutesRounded) return '/m'
  if (areSecondsRounded) return '/s'

  return null
}

export function checkForAndGetDateRoundValue(date: Date, now: Date) {
  const dateRound = isDateRounded(date)
  const nowDateAlreadyRound = isDateRounded(now) 

  if (
    dateRound && 
    dateRound !== nowDateAlreadyRound
  ) return dateRound

  return null
}
