function AboutUs() {
  return (
    <div className="container mx-auto p-6 my-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Who We are...</h1>
        <p className="text-lg text-gray-300 mb-8">
          Sir Khojo is dedicated to connecting students, researchers, and academics with leading professors and experts across various fields worldwide. Our mission is to foster collaboration, facilitate mentorship, and provide access to valuable academic resources and scholarship opportunities.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 my-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-400 mb-4">
            We envision a world where knowledge is readily accessible, and geographical boundaries do not limit academic pursuits. Sir Khoj aims to be the premier platform for discovering talent and opportunities in academia.
          </p>
          <h2 className="text-3xl font-semibold mb-4 mt-6">Our Values</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><span className="font-medium text-gray-200">Accessibility:</span> Making academic connections easier for everyone.</li>
            <li><span className="font-medium text-gray-200">Collaboration:</span> Fostering a community of shared knowledge.</li>
            <li><span className="font-medium text-gray-200">Opportunity:</span> Unlocking potential through mentorship and scholarships.</li>
            <li><span className="font-medium text-gray-200">Integrity:</span> Maintaining a trustworthy and reliable platform.</li>
          </ul>
        </div>
        <div className="text-center">
          <img
            alt="Collaboration and connection illustration"
            className="rounded-lg shadow-xl mx-auto max-w-md w-full"
            src="/about-us.jpg"
          />
        </div>
      </div>
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <img
              alt="Team member Vashkar Kar"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-white-400"
              src="/vk.png"
            />
            <h3 className="text-xl font-semibold">Vashkar Kar</h3>
            <p className="text-purple-400">Bong & Backend</p>
            <p className="text-sm text-gray-500 mt-2">Passionate about building robust backend systems that power academic connections.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <img
              alt="Team member Swapnil Pranta Mistry"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-white-400"
              src="/swp.png"
            />
            <h3 className="text-xl font-semibold">Swapnil Pranta Mistry</h3>
            <p className="text-blue-400">Deulia & Frontend</p>
            <p className="text-sm text-gray-500 mt-2">Focused on creating intuitive and user-friendly interfaces that enhance the academic experience.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs