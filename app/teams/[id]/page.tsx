import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
    // TODO: get players from db given team id
    // const teamName = 'Zombies';
    // const players = [
    //     { id: 1, name: 'Alice' },
    //     { id: 2, name: 'Bob' },
    //     { id: 3, name: 'Charlie' },
    // ];
    // TODO: use <Suspense>
    return (
        <>
            {/* <h1 className="text-4xl font-bold text-gray-800">{`${teamName} ${params.id} Players`}</h1>
            <ul className="flex flex-col gap-4">
                {players.map((player) => (
                    <li key={player.id} className="bg-white p-4 shadow-md">
                        <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
                    </li>
                ))}
            </ul> */}
        </>
    )
}

export default Page