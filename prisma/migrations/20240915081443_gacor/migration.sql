-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'MENTOR', 'NONROLE');

-- CreateEnum
CREATE TYPE "Nilai" AS ENUM ('A', 'B', 'C', 'D');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT NOT NULL,
    "fullName" TEXT,
    "email" TEXT NOT NULL,
    "profilePicture" TEXT,
    "bio" TEXT,
    "portfolioLink" TEXT,
    "profileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schollStatus" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT
);

-- CreateTable
CREATE TABLE "UserFollower" (
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,

    CONSTRAINT "UserFollower_pkey" PRIMARY KEY ("followerId","followingId")
);

-- CreateTable
CREATE TABLE "Class" (
    "id_credential" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "isDiscount" BOOLEAN NOT NULL,
    "discountPrice" INTEGER NOT NULL,
    "difficultyLevel" TEXT NOT NULL,
    "lesson" INTEGER NOT NULL,
    "mentorixPoin" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,
    "authorTeams" TEXT NOT NULL,
    "aboutClass" TEXT NOT NULL,
    "StepClass" TEXT[],
    "materiList" TEXT[],
    "prepareToLearn" TEXT[],
    "nilai" "Nilai" DEFAULT 'D',
    "isCertivicate" BOOLEAN NOT NULL,
    "urlCertivication" TEXT NOT NULL,
    "like" INTEGER NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id_credential")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "classId_credential" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClassParticipants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClassMentors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_profileId_key" ON "User"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_id_key" ON "Image"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Class_id_credential_key" ON "Class"("id_credential");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_id_key" ON "Comment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassParticipants_AB_unique" ON "_ClassParticipants"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassParticipants_B_index" ON "_ClassParticipants"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassMentors_AB_unique" ON "_ClassMentors"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassMentors_B_index" ON "_ClassMentors"("B");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_id_fkey" FOREIGN KEY ("id") REFERENCES "Class"("id_credential") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollower" ADD CONSTRAINT "UserFollower_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollower" ADD CONSTRAINT "UserFollower_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_classId_credential_fkey" FOREIGN KEY ("classId_credential") REFERENCES "Class"("id_credential") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassParticipants" ADD CONSTRAINT "_ClassParticipants_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id_credential") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassParticipants" ADD CONSTRAINT "_ClassParticipants_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassMentors" ADD CONSTRAINT "_ClassMentors_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id_credential") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassMentors" ADD CONSTRAINT "_ClassMentors_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
