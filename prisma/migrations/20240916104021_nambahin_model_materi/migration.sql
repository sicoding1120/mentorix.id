-- DropForeignKey
ALTER TABLE "MateriClass" DROP CONSTRAINT "MateriClass_id_fkey";

-- AlterTable
ALTER TABLE "MateriClass" ADD COLUMN     "Classid_credential" TEXT;

-- AddForeignKey
ALTER TABLE "MateriClass" ADD CONSTRAINT "MateriClass_Classid_credential_fkey" FOREIGN KEY ("Classid_credential") REFERENCES "Class"("id_credential") ON DELETE SET NULL ON UPDATE CASCADE;
