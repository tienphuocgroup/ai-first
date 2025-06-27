/**
 * Generate password based on current date
 * Formula: (day + month) followed by 25
 * Example: 19/11/2025 → (19+11)25 → 3025
 * Example: 27/6/2025 → (27+6)25 → 3325
 */
export function generateTodaysPassword(): string {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1 // getMonth() returns 0-11
  const sum = day + month
  return `${sum}25`
}

/**
 * Get formatted date string for display
 */
export function getFormattedDate(): string {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  return `${day}/${month}/${year}`
}

/**
 * Check if password is correct for today
 */
export function validatePassword(inputPassword: string): boolean {
  return inputPassword === generateTodaysPassword()
}

/**
 * Get example password for hint
 */
export function getPasswordExample(): string {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const sum = day + month
  return `${sum}25`
}