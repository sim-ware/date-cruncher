export function stringify(date: Date, givenNow: Date): string {
  let now = givenNow ? givenNow : new Date()
  const differenceInSeconds = (now.getTime() - date.getTime()) / 1000;
  // 
  // before finding the below, we need to know whether the number is rounded or not
  // i.e. if milliseconds === 000,    then we've rounded second
  //      if seconds      === 00,     and the above, then we've rounded minute
  //      if minutes      === 00,     and the above, then we've rounded hour
  //      if hours        === 00,     and the above, then we've rounded day
  //      if day          === Monday, and the above, then we've rounded week
  // 
  const yearsBetween = Math.floor(differenceInSeconds / 31536000);
  const monthsBetween = Math.floor((differenceInSeconds % 31536000) / 2628000);
  const daysBetween = Math.floor(((differenceInSeconds % 31536000) % 2628000) / 86400);

  //
  console.log('date:', date)
  console.log('now:', now)
  console.log('differenceInSeconds:', differenceInSeconds)
  console.log('yearsBetween:', yearsBetween)
  console.log('monthsBetween:', monthsBetween)
  console.log('daysBetween:', daysBetween)
  // 

  return 'now-1y/y' // Fake News
}
