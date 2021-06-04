export function createYearOperator(
  now: Date, date: Date, unitsAndOperators: string[]
) {
  const isDateBeforeNow = now > date
  const diffInYearsForSubtraction = now.getUTCFullYear() - date.getUTCFullYear()
  const diffInYearsForAddition = date.getUTCFullYear() - now.getUTCFullYear()

  if (isDateBeforeNow && diffInYearsForSubtraction > 0) {
    unitsAndOperators.push(`-${diffInYearsForSubtraction}y`)
  }

  if (!isDateBeforeNow && diffInYearsForAddition > 0) {
    unitsAndOperators.push(`+${diffInYearsForAddition}y`)
  }

  return unitsAndOperators
}

export function createMonthOperator(
  now: Date, date: Date, unitsAndOperators: string[]
) {
  const isDateBeforeNow = now > date
  const diffInMonthsForSubtraction = now.getUTCMonth() - date.getUTCMonth()
  const diffInMonthsForAddition = date.getUTCMonth() - now.getUTCMonth()
  const diffInDaysForSubtraction = now.getUTCDate() - date.getUTCDate()
  const diffInDaysForAddition = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)


  if (isDateBeforeNow && diffInMonthsForSubtraction > 0 && diffInDaysForSubtraction !== 1) {
    unitsAndOperators.push(`-${diffInMonthsForSubtraction}M`)
  }

  if (!isDateBeforeNow && diffInMonthsForAddition > 0 && diffInDaysForAddition !== 1) {
    unitsAndOperators.push(`+${diffInMonthsForAddition}M`)
  }

  return unitsAndOperators
}

export function createDayOrWeekOperator(
  now: Date, date: Date, unitsAndOperators: string[]
) {
  const isDateBeforeNow = now > date
  const diffInDaysForSubtraction = now.getUTCDate() - date.getUTCDate()
  const diffInDaysForAddition = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)

  if (isDateBeforeNow && diffInDaysForSubtraction > 0) {
    const returnWeeks = diffInDaysForSubtraction % 7 === 0
    unitsAndOperators.push(
      `-${returnWeeks ? diffInDaysForSubtraction / 7 : diffInDaysForSubtraction}` + 
      `${returnWeeks ? 'w' : 'd'}`
    )
  }

  if (!isDateBeforeNow && diffInDaysForAddition > 0) {
    const returnWeeks = diffInDaysForAddition % 7 === 0
    unitsAndOperators.push(
      `+${returnWeeks ? diffInDaysForAddition / 7 : diffInDaysForAddition}` + 
      `${returnWeeks ? 'w' : 'd'}`
    )
  }

  return unitsAndOperators
}

export function createHourOperator(
  now: Date, date: Date, unitsAndOperators: string[]
) {
  const isDateBeforeNow = now > date
  const diffInHoursForSubtraction = now.getUTCHours() - date.getUTCHours()
  const diffInHoursForAddition = (date.getTime() - now.getTime()) / (1000 * 60 * 60)

  if (isDateBeforeNow && diffInHoursForSubtraction > 0) {
    unitsAndOperators.push(`-${diffInHoursForSubtraction}h`)
  }

  if (!isDateBeforeNow && diffInHoursForAddition > 0 && diffInHoursForAddition < 24) {
    unitsAndOperators.push(`+${diffInHoursForAddition}h`)
  }

  return unitsAndOperators
}

export function createMinuteOperator(
  now: Date, date: Date, unitsAndOperators: string[]
) {
  const isDateBeforeNow = now > date
  const diffInMinutesForSubtraction = (now.getTime() - date.getTime()) / (1000 * 60)
  const diffInMinutesForAddition = (date.getTime() - now.getTime()) / (1000 * 60)

  if (isDateBeforeNow && diffInMinutesForSubtraction > 0 && diffInMinutesForSubtraction < 60) {
    unitsAndOperators.push(`-${diffInMinutesForSubtraction}m`)
  }

  if (!isDateBeforeNow && diffInMinutesForAddition > 0 && diffInMinutesForAddition < 60) {
    unitsAndOperators.push(`+${diffInMinutesForAddition}m`)
  }

  return unitsAndOperators
}

export function createSecondOperator(
  now: Date, date: Date, unitsAndOperators: string[]
) {
  const isDateBeforeNow = now > date
  const diffInSecondsForSubtraction = (now.getTime() - date.getTime()) / 1000
  const diffInSecondsForAddition = (date.getTime() - now.getTime()) / 1000

  if (isDateBeforeNow && diffInSecondsForSubtraction > 0 && diffInSecondsForSubtraction < 60) {
    unitsAndOperators.push(`-${diffInSecondsForSubtraction}s`)
  }

  if (!isDateBeforeNow && diffInSecondsForAddition > 0 && diffInSecondsForAddition < 60) {
    unitsAndOperators.push(`+${diffInSecondsForAddition}s`)
  }

  return unitsAndOperators
}
