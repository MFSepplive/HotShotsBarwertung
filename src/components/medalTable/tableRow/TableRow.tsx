import { FunctionComponent } from "react";

export interface TableRowProps {
    odd: boolean;
}

export const TableRow: FunctionComponent<TableRowProps> = ({ odd }) => {
    return (
        <tr className={`${odd ? "bg-white" : "bg-gray-200"}`}>
            <td className="max-w-100 min-w-fit w-full overflow-hidden text-ellipsis whitespace-nowrap" colSpan={3}>
                Canada
            </td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">17</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">3</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">2</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">22</td>
        </tr>
    );
};
