import './ProfessorCard.css'
import type { Tag } from '../types';
import type { ProfessorCardProps } from '../types';

// Map tag names to Tailwind background color classes
const tagBgColors: { [key: string]: string } = {
    "Robotics": "bg-teal-500",
    "Automation": "bg-orange-500",
    "AI": "bg-purple-500",
    "Data Science": "bg-blue-500",
    "Mathematics": "bg-yellow-500",
    "Physics": "bg-red-500",
    "ML": "bg-green-500",
    "Image": "bg-pink-500",
    "BioTech": "bg-indigo-500",
    "Genetics": "bg-gray-600",
    "Quantum": "bg-cyan-500",
    "NN": "bg-lime-500",
    // Add more tag name-color pairs as needed
};

function ProfessorCard({ prof, openProfessorModal }: ProfessorCardProps) {
    return (
        <div className="card p-5 flex flex-col">
            <img alt={prof.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-500" src={prof.image} />
            <h3 className="text-xl font-semibold text-center mb-1">{prof.name}</h3>
            <p className="text-gray-400 text-sm text-center mb-1">{prof.university}</p>
            <p className="text-gray-500 text-xs text-center mb-3">{prof.location}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {prof.tags.map((tag: Tag, idx: number) => (
                    <span
                        key={idx}
                        className={`tag ${tagBgColors[tag.text] || "bg-gray-500"} text-white px-2 py-1 rounded`}
                    >
                        {tag.text}
                    </span>
                ))}
            </div>
            <button className="details-button w-full py-2.5 mt-auto font-medium cursor-pointer" onClick={() => openProfessorModal(prof)}>
                View Details
            </button>
        </div>
    );
}

export default ProfessorCard;