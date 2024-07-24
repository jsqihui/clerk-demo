-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "biography" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
