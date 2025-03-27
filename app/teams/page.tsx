'use client';

// import 'server-only'
import React from 'react'
import Link from 'next/link'

export type Team = {
    id: number;
    name: string;
};

const Page = () => {
    if (typeof window == "undefined") {
        console.log("Application is on server side");
    } else {
        alert("Application is on client side");
    }

    // TODO: get from db


    const teams: Team[] = [
        { id: 1, name: 'Zombies' },
        { id: 2, name: 'Wombats' },
        { id: 3, name: 'Communists' },
    ];
    return (
        <>
        <h1 className="text-4xl font-bold text-gray-800">Teams</h1>
        <ul className="flex flex-col gap-4">
            {teams.map((team) => (
            <li key={team.id} className="bg-white p-4 shadow-md">
                <h2 className="text-xl font-bold text-gray-800">{team.name}</h2>
                <Link href={`/teams/${team.id}`} className="text-blue-600 hover:underline">
                    View
                </Link>
            </li>
            ))}
        </ul>
        </>
    )
}

export default Page