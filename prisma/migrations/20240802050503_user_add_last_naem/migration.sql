/*
  Warnings:

  - You are about to drop the column `foo` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "foo",
ADD COLUMN     "last_name" TEXT;
