export const TERMINAL_COLORS = Object.freeze({
  RED: '\x1b[31m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  PURPLE: '\x1b[35m',
  GRAY: '\x1b[30m'
})

export const LOG_COLORS = Object.freeze({
  INFO: TERMINAL_COLORS.BLUE,
  ERROR: TERMINAL_COLORS.RED,
  WARN: TERMINAL_COLORS.YELLOW
})
