import { MedalTable } from "@/components/medalTable/MedalTable";

export default function Page() {
    return (
        <div className="p-6 flex-1">
            <div className="overflow-x-auto">
                <MedalTable />
            </div>
        </div>
    );
}
