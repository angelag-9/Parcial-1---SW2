-- CreateTable
CREATE TABLE "Drone" (
    "id" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Drone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Drone_serial_key" ON "Drone"("serial");
