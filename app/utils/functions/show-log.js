import { LOG_OUTPUT, LOG_TYPES, LOG_PATH, TERMINAL_COLORS, LOG_COLORS } from '../constants/index.js'

export function showLog ({ type = LOG_TYPES.INFO, message = '', path = import.meta.filename, info = '' }) {
  const logType = type.toUpperCase()
  const textColor = TERMINAL_COLORS.GRAY
  const boldColor = LOG_COLORS[logType]

  const logMessage = `${boldColor}[${logType}]:${textColor}${message}`
  const logPath = `${boldColor}[${LOG_PATH}]:${textColor}${path}`
  const logInfo = info ? `${boldColor}[${LOG_OUTPUT}]:${textColor}${info}` : ''

  console[type](`${logMessage}${logInfo}${logPath}`)
}
