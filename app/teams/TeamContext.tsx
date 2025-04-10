import { createContext, useContext } from 'react';
import { Team } from '@/app/types';

const TeamContext = createContext<Team | null>(null);

export const useTeam = () => {
    const context = useContext(TeamContext);
    if (!context) {
        throw new Error('useTeam must be used within a TeamProvider');
    }
    return context;
};

export const TeamProvider = ({ team, children }: { team: Team; children: React.ReactNode }) => {
    return <TeamContext.Provider value={team}>{children}</TeamContext.Provider>;
};