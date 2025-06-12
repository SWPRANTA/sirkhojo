import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (path: string): void => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    // Define your nav links and their paths
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Search Prof.", path: "/searchprof" },
        { name: "About Us", path: "/about" },
        { name: "Scholarships", path: "/scholorships" },
        { name: "Professor Profile", path: "/professor" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b-[1px] border-[#333333] bg-[#1E1E1E] p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-2xl font-bold" href="#" onClick={() => handleNavClick('/')}>SirKhojo</a>
                <div className="hidden md:flex space-x-6 items-center">
                    {navLinks.map(link => (
                        <a
                            key={link.path}
                            className={`nav-link cursor-pointer text-gray-300 hover:text-white pb-1 transition-colors duration-200 ${
                                location.pathname === link.path
                                    ? "border-b-2 border-indigo-500 text-white"
                                    : ""
                            }`}
                            onClick={() => handleNavClick(link.path)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a className="register-button text-sm font-medium" href="#">Register</a>
                </div>

                <div className="md:hidden">
                    <button className="text-gray-300 focus:outline-none cursor-pointer" onClick={toggleMobileMenu}>
                        <span className="material-icons">menu</span>
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} mt-2 space-y-2`} id="mobile-menu">
                {navLinks.map(link => (
                    <a
                        key={link.path}
                        className={`block cursor-pointer nav-link text-gray-300 hover:text-white px-4 py-2 ${
                            location.pathname === link.path
                                ? "border-b-2 border-indigo-500 text-white"
                                : ""
                        }`}
                        onClick={() => handleNavClick(link.path)}
                    >
                        {link.name}
                    </a>
                ))}
                <a className="block register-button text-sm font-medium mx-4 my-2 text-center" href="#">Register</a>
            </div>
        </nav>
    )
}

export default NavBar;