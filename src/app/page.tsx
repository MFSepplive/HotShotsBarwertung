import { MedalTable } from '@src/components/medalTable/MedalTable'

export default async function Page() {
    return (
        <div className="p-6 flex-1">
            <div className="overflow-x-auto">
                <MedalTable />
            </div>
        </div>
    )
}
