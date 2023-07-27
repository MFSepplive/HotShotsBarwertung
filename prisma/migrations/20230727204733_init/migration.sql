-- CreateTable
CREATE TABLE "Teams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bronze" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Bronze_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Silver" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Silver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gold" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Gold_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bronze" ADD CONSTRAINT "Bronze_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Silver" ADD CONSTRAINT "Silver_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gold" ADD CONSTRAINT "Gold_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
