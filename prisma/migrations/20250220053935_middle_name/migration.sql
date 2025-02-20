/*
  Warnings:

  - You are about to drop the column `middle_name` on the `teacher` table. All the data in the column will be lost.
  - Added the required column `m_name` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teacher` DROP COLUMN `middle_name`,
    ADD COLUMN `m_name` VARCHAR(191) NOT NULL;
