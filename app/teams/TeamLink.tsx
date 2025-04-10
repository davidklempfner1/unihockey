import Link from 'next/link'
import { useTeam } from './TeamContext';

const TeamLink = () => {
    const team = useTeam()
    return (
        <>
            <h2 className="text-xl font-bold text-gray-800">{team.name}</h2>
            <Link href={`/teams/${team.id}`} className="text-blue-600 hover:underline">
                View
            </Link>
        </>
    )
}

export default TeamLink