import logo from '../assets/images/favicon.ico'

function Header() {

    return (
        <header className="fixed top-6 left-[25%] sm:left-[20%] md:left-[15%] lg:left-[10%] -translate-x-1/2 z-50 rounded-full border border-orange-500 overflow-hidden">
            <nav className="flex items-center gap-5 bg-zinc-800 px-5 py-3 text-white backdrop-blur-md">
                
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-orange-500 overflow-hidden">
                        <img src={logo} alt="" />
                    </span>

                    <span className="text-lg leading-none font-medium tracking-wide">
                        Etinosa
                    </span>
                </div>

                {/* Navigation */}
                <button className="text-lg leading-none cursor-pointer">
                    ☰
                </button>
            </nav>
        </header>
    );
}

export default Header;

// left-1/12 -translate-x-1/2