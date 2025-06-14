import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProfessors } from '../contexts/ProfessorsContext';
import type { Professor } from '../types';


const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Publications", id: "publications" },
  { label: "Research", id: "research" },
  { label: "Teaching", id: "teaching" },
];

export default function ProfessorProfile() {
  const { id } = useParams();
  const { professors } = useProfessors();
  const [professor, setProfessor] = useState<Professor | null>(null);
   const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const found = professors.find((prof) => prof.id === id);
    setProfessor(found ?? null);
  }, [id, professors]);

  if (!professor) return <div className="text-center mt-12">Professor not found</div>;


 

  return (
    <div className="page-content container mx-auto p-6 my-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Professor Profile</h1>
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left: Profile */}
          <div className="w-full md:w-80 flex-shrink-0 text-center md:text-left">
            <img
              alt={professor.name}
              className="w-48 h-48 rounded-full mx-auto md:mx-0 mb-4 border-4 border-purple-500 object-cover"
              src={professor.image}
            />
            <h1 className="text-3xl font-bold">{professor.name}</h1>
            <p className="text-lg text-purple-400">{professor.university}</p>
            <p className="text-gray-400">{professor.name}</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              {professor.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`tag bg-${tag.color} text-white px-3 py-1 rounded-full text-sm`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
            <button
              className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center justify-center w-full md:w-auto"
              onClick={professor.contact.email ? () => window.location.href = `mailto:${professor.contact.email}` : undefined}
            >
              <span className="material-icons mr-2">email</span>
              Contact Professor
            </button>
          </div>
          {/* Right: Tabs & Content */}
          <div className="flex-grow w-full">
            <div className="mb-6 border-b border-gray-700">
              <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab pb-2 font-medium transition-colors ${activeTab === tab.id
                        ? "border-b-2 border-indigo-500 text-white"
                        : "text-gray-400 hover:text-white"
                      }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            {/* Tab Contents */}
            <div>
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Biography</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Dr. John Doe is a distinguished professor in the Department of Computer Science at Kyung Hee
                    University. With over 15 years of experience in academia and research, his work primarily
                    focuses on the intersection of artificial intelligence, machine learning, and computer
                    vision. He has led numerous funded research projects and has mentored a significant number
                    of graduate students who have gone on to achieve success in both industry and academia.
                    Prof. Doe is passionate about developing intelligent systems that can perceive and
                    understand the world in a human-like manner.
                  </p>
                  <h3 className="text-xl font-semibold mb-2">Areas of Expertise</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
                    <li>Deep Learning Architectures</li>
                    <li>Natural Language Processing (Basic)</li>
                    <li>Reinforcement Learning</li>
                    <li>Ethical AI Development</li>
                  </ul>
                  <h3 className="text-xl font-semibold mb-2">Current Positions</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Full Professor, Kyung Hee University</li>
                    <li>Director, AI Research Lab</li>
                    <li>Visiting Scholar, Stanford AI Lab (Past)</li>
                  </ul>
                </div>
              )}
              {activeTab === "publications" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Selected Publications</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-lg text-indigo-300">
                        Advancements in Convolutional Neural Networks for Image Recognition
                      </h4>
                      <p className="text-sm text-gray-400">Journal of Machine Learning Research, 2023</p>
                      <a className="text-sm text-blue-400 hover:underline" href="#">
                        View Publication
                      </a>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-lg text-indigo-300">
                        Ethical Considerations in Autonomous AI Systems
                      </h4>
                      <p className="text-sm text-gray-400">AI and Society, 2022</p>
                      <a className="text-sm text-blue-400 hover:underline" href="#">
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "research" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Current Research Projects</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-lg text-indigo-300">
                        Real-time Object Detection for Autonomous Vehicles
                      </h4>
                      <p className="text-sm text-gray-300">
                        This project focuses on developing highly efficient and accurate object detection models for use in self-driving cars. We are exploring novel lightweight architectures and sensor fusion techniques.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Status: Ongoing | Funding: National Research Foundation
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-lg text-indigo-300">
                        AI for Personalized Medicine
                      </h4>
                      <p className="text-sm text-gray-300">
                        Investigating the application of machine learning to analyze patient data and predict treatment outcomes, aiming to personalize medical interventions.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Status: Starting Soon | Funding: KHU Grand Challenges
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "teaching" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Courses Taught</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>CS501: Advanced Machine Learning (Graduate)</li>
                    <li>CS320: Introduction to Artificial Intelligence (Undergraduate)</li>
                    <li>CS605: Deep Learning Seminar (Graduate)</li>
                    <li>ENG101: Ethics in Technology (Undergraduate Elective)</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-6 mb-2">Prospective Students</h3>
                  <p className="text-gray-300">
                    I am always looking for highly motivated PhD and Master's students interested in AI and Machine Learning. If you have a strong background in computer science/mathematics and a passion for research, please feel free to reach out with your CV and research interests.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}