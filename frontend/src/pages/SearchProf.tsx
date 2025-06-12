import { useState } from "react";
import { useProfessors } from "../contexts/ProfessorsContext";
import ProfessorModal from "../components/ProfessorModal";
import ProfessorCard from "../components/ProfessorCard";

interface Tag {
    text: string;
    color: string;
}

interface Professor {
    id: string;
    name: string;
    university: string;
    location: string;
    image: string;
    tags: Tag[];
    bio: string;
}

function SearchProf() {
    const { professors, loading, error } = useProfessors();
    const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const openProfessorModal = (prof: Professor): void => {
        setSelectedProfessor(prof);
        setIsModalOpen(true);
    }
    return (
        <div className="page-content container mx-auto p-6 my-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Search Professors</h1>
            <div className="flex justify-center mb-8">
                <div className="w-full max-w-3xl flex items-center p-2 shadow-lg">
                    <input className="flex-grow p-3 outline-none text-lg" placeholder="Search by name, university, research area, tags..." type="text" />
                    <button className="search-button px-8 py-3 text-lg font-semibold ml-2 flex items-center">
                        <span className="material-icons mr-2">search</span>Search
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <aside className="md:w-1/4 bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Filters</h3>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="country">Country</label>
                        <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500" id="country" name="country">
                            <option>All Countries</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>UK</option>
                            <option>Germany</option>
                            <option>South Korea</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="discipline">Discipline</label>
                        <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500" id="discipline" name="discipline">
                            <option>All Disciplines</option>
                            <option>Computer Science</option>
                            <option>Engineering</option>
                            <option>Medicine</option>
                            <option>Physics</option>
                            <option>Arts & Humanities</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="research_area">Research Area (Tags)</label>
                        <input className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500" id="research_area" name="research_area" placeholder="e.g., AI, Machine Learning" type="text" />
                    </div>
                </aside>
                <main className="md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {professors.map((prof, idx) => (
                        <ProfessorCard
                            key={idx}
                            prof={prof}
                            openProfessorModal={openProfessorModal}
                        />
                    ))}
                    </div>
                    <div className="flex justify-center mt-12 space-x-2">
                        <button className="p-2 cursor-pointer">
                            <span className="material-icons">keyboard_arrow_left</span>
                        </button>
                        <button className="bg-white text-gray-900 rounded-full px-4 py-2 font-semibold shadow cursor-pointer">
                            1
                        </button>
                        <button className="border border-white bg-transparent text-white rounded-full px-4 py-2 cursor-pointer">
                            2
                        </button>
                        <button className="border border-white bg-transparent text-white rounded-full px-4 py-2 cursor-pointer">
                            3
                        </button>
                        <span className="text-gray-500 self-center">...</span>
                        <button className="border border-white bg-transparent text-white rounded-full px-4 py-2 cursor-pointer">
                            10
                        </button>
                        <button className="p-2 cursor-pointer">
                            <span className="material-icons">keyboard_arrow_right</span>
                        </button>
                    </div>
                </main>
            </div>
            {selectedProfessor && (
                <ProfessorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} profData={selectedProfessor} />
            )}
        </div>
    )
}

export default SearchProf