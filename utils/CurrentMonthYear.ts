export const currentMonthYear = () => {
  const currentDate = new Date()
  const monthIndex = currentDate.getMonth()
  const month = months[monthIndex]
  const year = currentDate.getFullYear()
  return { month, year }
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
