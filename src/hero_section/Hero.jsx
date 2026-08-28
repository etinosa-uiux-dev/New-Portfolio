import hero_bg from "../assets/images/heroSec.jpg";

function Hero() {

    return (
        <section 
        className="relative h-screen overflow-hidden bg-black px-6 pt-32 text-white flex justify-center items-center p-10"
        >
            {/* Image */}
            <div 
            className=" border-white-500 h-[80%] w-[40%] bg-center bg-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-r border-r-amber-900" 
            style={{ backgroundImage: `url(${hero_bg})` }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-[80vh] w-3/4 flex-col justify-between">

                {/* Top Info */}
                <div className="grid gap-10 md:grid-cols-2 ">

                    {/* Left */}
                    <div>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-neutral-800/80 px-3 py-1.5 text-xs text-neutral-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                            Available for Work
                        </span>

                        <h1 className="max-w-xl text-4-xl font-medium leading-tight md:text-5xl">
                            <span className="text-transparent [-webkit-text-stroke:3px_#78350F]">UI/</span>UX Designer <br />
                            & Frontend Developer <br />
                            based in Nigeria
                        </h1>
                    </div>

                    {/* Right */}
                    <div className="flex items-end md:justify-end">
                        <div className="max-w-xs">
                            <p className="mb-5 text-sm leading-relaxed text-white">
                                Hi, I'm Etinosa — a UI/UX designer and frontend developer passionate about creating clean, meaningful digital experiences.
                            </p>

                            <a
                                href="#projects"
                                className="inline-flex items-center gap-3 rounded-full bg-amber-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-amber-700"
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-amber-900">
                                →
                                </span>

                                See my works
                            </a>
                        </div>
                    </div>
                </div>

                {/* Huge name */}
                <div className="overflow-hidden  flex justify-center">
                    <h2 className="whitespace-nowrap text-[20vw] font-semibold leading-none text-transparent [-webkit-text-stroke:2px_#78350F] font-mono transition-all duration-500
         hover:tracking-[-0.07em] hover:text-[#78350F]
         hover:[-webkit-text-stroke:0.5px_white]
         hover:drop-shadow-[0_0_15px_#78350F]">
                        Et<span className="text-transparent  [-webkit-text-stroke:2px_#78350F]">i</span>nosa
                    </h2>
                </div>

            </div>
        </section>

    );
}

export default Hero;