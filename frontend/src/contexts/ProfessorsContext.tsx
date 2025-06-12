import React, { createContext, useContext, useEffect, useState } from "react";

interface Tag {
    text: string;
    color: string;
}

export interface Professor {
    id: string;
    name: string;
    university: string;
    location: string;
    image: string;
    tags: Tag[];
    bio: string;
}

interface ProfessorsContextType {
    professors: Professor[];
    loading: boolean;
    error: string | null;
}

const ProfessorsContext = createContext<ProfessorsContextType>({
    professors: [],
    loading: false,
    error: null,
});

export const useProfessors = () => useContext(ProfessorsContext);

export const ProfessorsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [professors, setProfessors] = useState<Professor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('../professors_data.json')
            .then(response => response.json())
            .then((jsonData: Professor[]) => {
                setProfessors(jsonData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);

    return (
        <ProfessorsContext.Provider value={{ professors, loading, error }}>
            {children}
        </ProfessorsContext.Provider>
    );
};