import { calculateMedalStanding } from "@/utils/calculateMedalStanding";
import { TableHeader } from "./tableHeader/TableHeader";
import { TableRow } from "./tableRow/TableRow";

const medalTable = [
    {
        country: "Canada",
        gold: 17,
        silver: 3,
        bronze: 2,
        total: 22,
    },
    {
        country: "USA",
        gold: 10,
        silver: 11,
        bronze: 9,
        total: 30,
    },
    {
        country: "China",
        gold: 19,
        silver: 5,
        bronze: 7,
        total: 31,
    },
    {
        country: "Japan",
        gold: 27,
        silver: 14,
        bronze: 17,
        total: 58,
    },
];

export const MedalTable = () => {
    const sortedTable = calculateMedalStanding(medalTable);
    return (
        <table className="w-full">
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {sortedTable.map((team, index) => {
                    return <TableRow team={team} key={index} odd={Boolean(index % 2)} />;
                })}
            </tbody>
        </table>
    );
};
