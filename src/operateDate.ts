import { subtractUnit } from "./subtractUnit"
import { addUnit } from "./addUnit"
import { roundToClosestUnit } from "./roundToClosestUnit"


export function operateDate(operation: string, date:Date):Date { 
  const unit = operation.slice(-1)
  const quantity = parseInt(operation.slice(1, -1))
  
  if (operation[0] === '-') return subtractUnit(date, unit, quantity)
  if (operation[0] === '+') return addUnit(date, unit, quantity)
  if (operation[0] === '/') return roundToClosestUnit(date, unit)

  throw new Error('FAILED TO PARSE OPERATOR OR OPERATOR INVALID');
}
