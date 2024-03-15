/*
  Warnings:

  - You are about to drop the column `email` on the `teacher` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[documentNumber]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `documentNumber` to the `teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `teacher_email_key` ON `teacher`;

-- AlterTable
ALTER TABLE `teacher` DROP COLUMN `email`,
    ADD COLUMN `documentNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `subject` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `teacher_documentNumber_key` ON `teacher`(`documentNumber`);
