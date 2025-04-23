'use client';

// import 'server-only'
import React from 'react';
import { Team } from '@/app/types';
import TeamLinkListItem from '@/app/teams/TeamLinkListItem';
import { TeamProvider } from './TeamContext';

const Page = () => {
    // if (typeof window == "undefined") {
    //     console.log("Players Page - Application is on server side");
    // } else {
    //     alert("Players Page - Application is on client side");
    // }

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
                    <TeamProvider key={team.id} team={team}>
                        <TeamLinkListItem />
                    </TeamProvider>
                ))}
            </ul>
        </>
    )
}

export default Page