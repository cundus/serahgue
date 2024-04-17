/*
  Warnings:

  - You are about to drop the column `image` on the `thread` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `thread` DROP COLUMN `image`;

-- CreateTable
CREATE TABLE `ThreadImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `threadId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ThreadImage` ADD CONSTRAINT `ThreadImage_threadId_fkey` FOREIGN KEY (`threadId`) REFERENCES `Thread`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
