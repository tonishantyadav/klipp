import { File } from '@prisma/client'

// Function to calculate the number of file uploads for each day in the current month
export const calculateUploadsPerDay = (files: File[]) => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentMonth + 1,
    0
  ).getDate()

  // Initialize an array to store the upload counts for each day
  const uploadsPerDay = Array(daysInMonth).fill(0)

  // Loop through each file and increment the count for the corresponding day
  files.forEach((file) => {
    const uploadDate = new Date(file.createdAt)
    if (uploadDate.getMonth() === currentMonth) {
      const dayOfMonth = uploadDate.getDate()
      uploadsPerDay[dayOfMonth - 1]++ // Subtract 1 because JavaScript Date uses 0-based index for months
    }
  })

  // Create an array of objects with day and uploads count
  const result = uploadsPerDay.map((uploads, index) => ({
    day: (index + 1).toString(), // Corrected to toString()
    uploads,
  }))
  return result
}
