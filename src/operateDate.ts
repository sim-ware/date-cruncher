import { subtractUnit } from "./subtractUnit"
import { addUnit } from "./addUnit"
import { roundToClosestUnit } from "./roundToClosestUnit"


export function operateDate(operation: string, date:Date):Date { 
  const unit = operation.slice(-1)
  const quantity = parseInt(operation.slice(1, -1))

  // // // // // // // // // // // // // // // // // // // // // // // 
  if (unit === 'd') console.log('|!|_-d-_|!|')
  if (unit === 'M') console.log('|!|_-M-_|!|')
  if (unit === 'y') console.log('|!|_-y-_|!|')
  if (unit === 'h') console.log('|!|_-h-_|!|')
  if (unit === 'm') console.log('|!|_-m-_|!|')
  if (unit === 's') console.log('|!|_-s-_|!|')
  if (unit === 'w') console.log('|!|_-w-_|!|')
  // // // // // // // // // // // // // // // // // // // // // // // 
  
  if (operation[0] === '-') return subtractUnit(date, unit, quantity)
  if (operation[0] === '+') return addUnit(date, unit, quantity)
  if (operation[0] === '/') return roundToClosestUnit(date, unit)

  throw new Error('FAILED TO PARSE OPERATOR OR OPERATOR INVALID');
}
