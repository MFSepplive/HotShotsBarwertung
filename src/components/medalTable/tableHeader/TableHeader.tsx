import Image from "next/image";

export const TableHeader = () => {
    return (
        <tr>
            <th className="text-left max-w-100 min-w-fit w-full overflow-hidden text-ellipsis whitespace-nowrap" colSpan={3}>
                Team
            </th>
            <th className="pt-2.5 pr-5 pb-2.5 pl-5">
                <Image className="m-auto" alt="medalGold" src="/medal-gold.png" width={10} height={10} />
            </th>
            <th className="pt-2.5 pr-5 pb-2.5 pl-5">
                <Image className="m-auto" alt="medalSilver" src="/medal-silver.png" width={10} height={10} />
            </th>
            <th className="pt-2.5 pr-5 pb-2.5 pl-5">
                <Image className="m-auto" alt="medalBronze" src="/medal-bronze.png" width={10} height={10} />
            </th>
            <th className="pt-2.5 pr-5 pb-2.5 pl-5">
                <Image className="m-auto" alt="medalTotal" src="/medal-total.png" width={20} height={20} />
            </th>
        </tr>
    );
};
