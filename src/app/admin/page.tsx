import { AddTeamModal } from '@src/components/addTeamModal/AddTeamModal'
import { EditTeamModal } from '@src/components/editTeamModal/EditTeamModal'

export default function Admin() {
    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold">Admin:</h1>
            <AddTeamModal />
            {/* <EditTeamModal /> */}
        </div>
    )
}
