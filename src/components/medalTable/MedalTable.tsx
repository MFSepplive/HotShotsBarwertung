import { TableHeader } from "./tableHeader/TableHeader";
import { TableRow } from "./tableRow/TableRow";

export const MedalTable = () => {
    return (
        <table className="w-full">
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {Array.from(Array(10).keys()).map((_, index) => {
                    return <TableRow key={index} odd={Boolean(index % 2)} />;
                })}
            </tbody>
        </table>
    );
};
