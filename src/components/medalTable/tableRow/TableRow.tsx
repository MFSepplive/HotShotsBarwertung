import { MedalCount } from "@/utils/calculateMedalStanding";
import { FunctionComponent } from "react";

export interface TableRowProps {
    odd: boolean;
    team: MedalCount;
}

export const TableRow: FunctionComponent<TableRowProps> = ({ odd, team }) => {
    return (
        <tr className={`${odd ? "bg-white" : "bg-gray-200"}`}>
            <td className="max-w-100 min-w-fit w-full overflow-hidden text-ellipsis whitespace-nowrap" colSpan={3}>
                {team.country}
            </td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">{team.gold}</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">{team.silver}</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">{team.bronze}</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">{team.total}</td>
        </tr>
    );
};
