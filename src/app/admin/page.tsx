import { AddTeamModal } from '@src/components/addTeamModal/AddTeamModal'
import { AdminTeamsList } from '@src/components/adminTeamsList/AdminTeamsList'

export default function Admin() {
    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold">Teams:</h1>
            <AdminTeamsList />
            <AddTeamModal />
        </div>
    )
}
