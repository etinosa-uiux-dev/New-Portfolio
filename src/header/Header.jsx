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
                <a
                href="#contact"
                aria-label="Go to contact"
                className="
                    group
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-neutral-900/80
                    text-white
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-amber-700
                    hover:bg-amber-900
                "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="
                        h-4 w-4
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                        group-hover:translate-y-0.5
                        "
                        aria-hidden="true"
                    >
                        <path
                        d="M5 5L19 19M19 19V8M19 19H8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </nav>
        </header>
    );
}

export default Header;