-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Teams" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "bronze" INTEGER NOT NULL,
    "silver" INTEGER NOT NULL,
    "gold" INTEGER NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Teams" ("bronze", "gold", "id", "name", "silver") SELECT "bronze", "gold", "id", "name", "silver" FROM "Teams";
DROP TABLE "Teams";
ALTER TABLE "new_Teams" RENAME TO "Teams";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
