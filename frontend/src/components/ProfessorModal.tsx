import { useNavigate } from "react-router-dom";
import "./ProfessorModal.css"; // Import the CSS file

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

interface ProfessorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profData: Professor | null;
}

function ProfessorModal({ isOpen, onClose, profData }: ProfessorModalProps) {
  const navigate = useNavigate();

  if (!isOpen || !profData) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          ×
        </span>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={
              profData?.image ||
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ--4ndNIqA2ziWdOza6hWBVY9J7UCky88Ix76MphFH-ErPpMh6iQc5OxJYSpPIi_WHOAnbFhuC9NTdgWOWRcCTO2I32Irm-netyxo8bXhqix2hdd9Nu64uaqgZyhJjYDluSEIY2NO2H9lCqXVitWhvykWIa7mIb6a9c3F8hIfCYLfgsxvpYK7aHbZz56YD1sNUrV-qyNBhdD1UebRKAoaWXGmysGz117YEt92UvfrsnarF54GkqmZCf3fl93lye6FAGk1s1GUuLg"
            }
            className="w-32 h-32 rounded-full mx-auto md:mx-0 border-2 border-gray-500"
            alt="Professor"
          />
          <div>
            <h2 className="text-2xl font-bold mb-1">{profData.name}</h2>
            <p className="text-gray-400 text-md mb-0.5">{profData.university}</p>
            <p className="text-gray-500 text-sm mb-3">{profData.location}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {profData.tags.map((tag: Tag, idx: number) => (
                <span
                  key={idx}
                  className={`tag bg-${tag.color}-500 text-white`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Brief Overview</h3>
          <p className="text-gray-300 text-sm mb-4">
            {profData.bio || "No bio available for this professor."}
          </p>
          <a
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md text-sm inline-flex items-center cursor-pointer"
            onClick={() => {
              navigate(`/professor/${profData.id}`);
              onClose();
            }}
          >
            View Full Profile{" "}
            <span className="material-icons text-sm ml-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfessorModal;