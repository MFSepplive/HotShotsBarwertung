import { TeamsList } from './components/teamsList/TeamsList'

export default function Admin() {
    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold">Teams:</h1>
            <TeamsList />
        </div>
    )
}
