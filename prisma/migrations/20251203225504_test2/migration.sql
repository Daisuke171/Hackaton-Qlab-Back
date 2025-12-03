/*
  Warnings:

  - You are about to drop the column `course` on the `Carrera` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Carrera` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Carrera` table. All the data in the column will be lost.
  - Added the required column `facultadId` to the `Carrera` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreCarrera` to the `Carrera` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrera" DROP COLUMN "course",
DROP COLUMN "createdAt",
DROP COLUMN "title",
ADD COLUMN     "estadoCarrera" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "facultadId" INTEGER NOT NULL,
ADD COLUMN     "nombreCarrera" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Facultad" (
    "id" SERIAL NOT NULL,
    "nombreFacultad" TEXT NOT NULL,

    CONSTRAINT "Facultad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materia" (
    "idMateria" SERIAL NOT NULL,
    "nombreMateria" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "carreraId" INTEGER NOT NULL,
    "estadoMateria" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("idMateria")
);

-- CreateTable
CREATE TABLE "Tema" (
    "idTema" TEXT NOT NULL,
    "nombreTema" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "materiaId" INTEGER NOT NULL,

    CONSTRAINT "Tema_pkey" PRIMARY KEY ("idTema")
);

-- CreateTable
CREATE TABLE "Recurso" (
    "idRecurso" SERIAL NOT NULL,
    "linkRecurso" TEXT NOT NULL,
    "contextoIA" TEXT NOT NULL,
    "idTema" TEXT NOT NULL,

    CONSTRAINT "Recurso_pkey" PRIMARY KEY ("idRecurso")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recurso_idTema_key" ON "Recurso"("idTema");

-- AddForeignKey
ALTER TABLE "Carrera" ADD CONSTRAINT "Carrera_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES "Facultad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tema" ADD CONSTRAINT "Tema_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia"("idMateria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_idTema_fkey" FOREIGN KEY ("idTema") REFERENCES "Tema"("idTema") ON DELETE RESTRICT ON UPDATE CASCADE;
