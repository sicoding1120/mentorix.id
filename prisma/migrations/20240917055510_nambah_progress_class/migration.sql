-- CreateTable
CREATE TABLE "progressClass" (
    "id" TEXT NOT NULL,
    "progress" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "progressClass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "progressClass_id_key" ON "progressClass"("id");

-- CreateIndex
CREATE UNIQUE INDEX "progressClass_user_id_class_id_key" ON "progressClass"("user_id", "class_id");

-- AddForeignKey
ALTER TABLE "progressClass" ADD CONSTRAINT "progressClass_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id_credential") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progressClass" ADD CONSTRAINT "progressClass_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
