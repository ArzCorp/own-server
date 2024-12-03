import { db } from '../../db.js'
import { LOG_TYPES } from '../constants/index.js'
import { showLog } from './show-log.js'

export async function generateIdForEntity (entityName) {
  const { data } = db
  const entity = data[entityName]

  if (!entity) {
    return showLog({
      type: LOG_TYPES.WARN,
      message: 'Not found entity',
      path: import.meta.filename,
      info: `Entity requested:${entityName}`
    })
  }

  const entitySize = entity.length

  if (!entitySize) {
    return 1
  }
  const lastEntityIndex = entitySize - 1
  const lastEntity = entity[lastEntityIndex]
  const lastEntityId = lastEntity.id
  const newId = lastEntityId + 1

  return newId
}
