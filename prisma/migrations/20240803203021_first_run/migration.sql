-- CreateEnum
CREATE TYPE "Hours" AS ENUM ('mon911', 'tues911', 'wed911', 'thur911', 'fri911', 'sat911', 'sun911', 'mon1012', 'tues1012', 'wed1012', 'thur1012', 'fri1012', 'sat1012', 'sun1012', 'mon122', 'tues122', 'wed122', 'thur122', 'fri122', 'sat122', 'sun122');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "regularHours" "Hours"[],
    "inHours" "Hours"[],
    "availHours" "Hours"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
