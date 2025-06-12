import { useState } from 'react'
import 'material-icons/iconfont/material-icons.css';
import ProfessorCard from '../components/ProfessorCard';
import ProfessorModal from '../components/ProfessorModal';
import { useProfessors } from '../contexts/ProfessorsContext';

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

function Home() {
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
        <div className='page-content container mx-auto p-6'>
            <header className='text-center my-12'>
                <h1 className='text-5xl font-bold mb-4 leading-tight'>
                    Find Your Mentor, <br />Unlock Your Potential.
                </h1>
                <p className='text-xl text-gray-400 mb-8 max-w-2xl mx-auto'>
                    Discover leading professors and researchers from around the globe. Explore
                    opportunities for collaboration and academic growth.
                </p>
            </header>
            <div className='flex justify-center mb-12'>
                <div className='w-full max-w-2xl flex items-center p-2 shadow-lg'>
                    <input className='flex-grow p-3 outline-none text-lg' placeholder='Eg. Tags, Prof. Name, University, Research Area' type="text" />
                    <button className='search-button px-8 py-3 text-lg font-semibold ml-2 flex items-center cursor-pointer'>
                        <span className='material-icons mr-2'>search</span>
                    </button>
                </div>
            </div>
            <section className='mb-16'>
                <h2 className='text-3xl font-semibold mb-8 text-center'>
                    Featured Professors
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {professors.map((prof, idx) => (
                        <ProfessorCard
                            key={idx}
                            prof={prof}
                            openProfessorModal={openProfessorModal}
                        />
                    ))}
                </div>
            </section>

            <section className='mb-16'>
                <h2 className='text-3xl font-semibold mb-8 text-center'>
                    Explore by Discipline
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center'>
                    <a className='block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors' href='#'>
                        <span className='material-icons text-4xl text-purple-400 mb-2'>memory</span>
                        <p className='font-medium'>Computer Science</p>
                    </a>
                    <a className='block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors' href='#'>
                        <span className='material-icons text-4xl text-blue-400 mb-2'>biotech</span>
                        <p className='font-medium'>Biotechnology</p>
                    </a>
                    <a className='block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors' href='#'>
                        <span className='material-icons text-4xl text-green-400 mb-2'>eco</span>
                        <p className='font-medium'>Environmental Science</p>
                    </a>
                    <a className='block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors' href='#'>
                        <span className='material-icons text-4xl text-red-400 mb-2'>architecture</span>
                        <p className='font-medium'>Engineering</p>
                    </a>
                    <a className='block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors' href='#'>
                        <span className='material-icons text-4xl text-yellow-400 mb-2'>calculate</span>
                        <p className='font-medium'>Mathematics</p>
                    </a>
                    <a className='block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors' href='#'>
                        <span className='material-icons text-4xl text-cyan-400 mb-2'>science</span>
                        <p className='font-medium'>Chemistry</p>
                    </a>
                </div>
            </section>

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

            {selectedProfessor && (
                <ProfessorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} profData={selectedProfessor} />
            )}

        </div>
    )
}

export default Home