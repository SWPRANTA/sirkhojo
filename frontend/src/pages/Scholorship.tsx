import { useEffect, useState } from "react"
import './Scholorship.css'
import type { ScholorshipType } from '../types'



function Scholorship() {
    const [scholorships, setScholorships] = useState([]);
    const [loading, setLoading] = useState(true);

    //Fetch scholorships from local json file
    useEffect(() => {
        fetch('../scholorships_data.json')
            .then(response => response.json())
            .then((data) => {
                setScholorships(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    return (
        <div className="container mx-auto p-6 my-12">
            <h1 className="text-4xl font-bold mb-6 text-center">Scholorships & Grants</h1>
            <p className="text-xl text-gray-600 mb-6 text-center max-w-md mx-auto">
                Explore a curated list of scholarships and funding opportunities from universities and organizations worldwide.
            </p>
            <div className="flex justify-center mb-2">
                <div className="w-full max-w-md mx-auto flex items-center p-3 shadow-md">
                    <input className="flex-grow p-3 outline-none text-lg" placeholder="Search scholarships by keyword, field, or country..." type="text" />
                    <button className="search-button px-6 py-3 text-lg font-semibold ml-2 flex items-center cursor-pointer">
                        <span className="material-icons mr-2">savings</span>
                        Find
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <div className="col-span-3 text-center text-gray-500">Loading scholarships...</div>
                ) : (
                    scholorships.map((scholorship: ScholorshipType, index: number) => (
                        <div key={index} className="card p-6">
                            <div className="flex items-center mb-3">
                                <span className="material-icons text-3xl">{index === 0 ? 'school' : index === 1 ? 'science' : 'palette'}</span>
                                <h3 className="text-xl font-semibold">{scholorship.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-1"><span className="font-semibold">{scholorship.university ? 'University' : 'Institution'}:</span> {scholorship.university || scholorship.organization}</p>
                            <p className="text-gray-400 text-sm mb-1"><span className="font-semibold">Location:</span> {scholorship.location}</p>
                            <p className="text-gray-400 text-sm mb-3"><span className="font-semibold">Field:</span> {scholorship.field}</p>
                            <p className="text-gray-300 text-sm mb-5">{scholorship.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-green-400 font-semibold">Deadline: {scholorship.deadline}</span>
                                <a href="#" className="details-button py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md text-sm">Learn More</a>
                            </div>
                        </div>))
                )}
            </div>
        </div>
    )
}

export default Scholorship