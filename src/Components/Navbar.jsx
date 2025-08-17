import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-screen h-auto p-3 text-white flex flex-col lg:flex-row justify-center items-center bg-slate-950 relative">
            <Link
                to="/"
                className="px-4 py-2 rounded-xl transition duration-500 min-w-[300px] text-center"
            >
                <p className="text-[35px] cursor-pointer hover:bg-slate-800 px-2 rounded-xl inline-block">
                    GABRIEL
                    <span
                        className="text-slate-500 shadow-md"
                        style={{ textShadow: '0px 0px 7px' }}
                    >
                        {' '}
                        LIZ
                    </span>
                </p>
            </Link>

            <div className="lg:hidden absolute right-5 top-4">
                <button
                    onClick={toggleMenu}
                    className="text-3xl cursor-pointer"
                >
                    {isMenuOpen ? 'X' : '☰'}
                </button>
            </div>

            <div
                className={`flex flex-col lg:flex-row gap-6 text-[20px] items-center justify-center 
                absolute lg:static top-full left-0 bg-slate-950 w-full lg:w-auto py-4 lg:py-0 z-10 
                overflow-hidden transition-all duration-300 ease-in-out transform text-center
                ${
                    isMenuOpen
                        ? 'max-h-[300px] opacity-100 scale-y-100'
                        : 'max-h-0 opacity-0 scale-y-0'
                } 
                lg:opacity-100 lg:scale-y-100 lg:max-h-full`}
            >
                <Link
                    to="/"
                    className="hover:border-slate-600 border-b-3 border-transparent cursor-pointer transition duration-300 px-4"
                >
                    Home
                </Link>
                <Link
                    to="/projects"
                    className="hover:border-slate-600 border-b-3 border-transparent cursor-pointer transition duration-300 px-4"
                >
                    Projetos
                </Link>

                <Link
                    to="https://wa.me/5547991015245"
                    className="px-4 py-2 rounded-xl cursor-pointer transition duration-500 hover:bg-slate-200 hover:text-slate-950"
                >
                    Contato
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
