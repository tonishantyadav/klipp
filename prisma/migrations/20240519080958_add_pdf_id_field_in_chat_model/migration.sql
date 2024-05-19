/*
  Warnings:

  - A unique constraint covering the columns `[pdfId]` on the table `Chat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pdfId` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chat` ADD COLUMN `pdfId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Chat_pdfId_key` ON `Chat`(`pdfId`);

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_pdfId_fkey` FOREIGN KEY (`pdfId`) REFERENCES `Pdf`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
