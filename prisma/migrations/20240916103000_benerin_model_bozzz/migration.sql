-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "isDiscount" DROP NOT NULL,
ALTER COLUMN "discountPrice" DROP NOT NULL,
ALTER COLUMN "difficultyLevel" DROP NOT NULL,
ALTER COLUMN "lesson" DROP NOT NULL,
ALTER COLUMN "mentorixPoin" DROP NOT NULL,
ALTER COLUMN "time" DROP NOT NULL,
ALTER COLUMN "progress" DROP NOT NULL,
ALTER COLUMN "authorTeams" DROP NOT NULL,
ALTER COLUMN "aboutClass" DROP NOT NULL,
ALTER COLUMN "isCertivicate" DROP NOT NULL,
ALTER COLUMN "urlCertivication" DROP NOT NULL,
ALTER COLUMN "like" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rixpoin" INTEGER;

-- CreateTable
CREATE TABLE "MateriClass" (
    "id" TEXT,
    "urlYoutube" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MateriClass_urlYoutube_key" ON "MateriClass"("urlYoutube");

-- AddForeignKey
ALTER TABLE "MateriClass" ADD CONSTRAINT "MateriClass_id_fkey" FOREIGN KEY ("id") REFERENCES "Class"("id_credential") ON DELETE SET NULL ON UPDATE CASCADE;
