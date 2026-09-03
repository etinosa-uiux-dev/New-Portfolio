

const interests = [
  {
    id: "chess",
    icon: "♞",
    label: "Chess",
    text: "I love the strategy, the challenge, and seeing how far the mind can work.",
    position:
      "top-[1%] left-[5%] a1:left-[25%] ",
    delay: "0s",
  },

  {
    id: "football",
    icon: "⚽",
    label: "Football",
    text: "I'm in love with the beautiful game. I watch it, I play it, and I enjoy every bit of it.",
    position:
      "top-[1%] right-[3%]",
    delay: "1s",
  },

  {
    id: "music",
    icon: "♫",
    label: "Music",
    text: "Music helps me focus, sets the mood, and makes long hours of work better.",
    position:
      "bottom-[1%] left-[3%]",
    delay: "1.8s",
  },

  {
    id: "gaming",
    icon: "🎮",
    label: "Gaming",
    text: "Sometimes I just want to switch off, pass time, and enjoy a good game.",
    position:
      "bottom-[1%] right-[5%]",
    delay: "2.5s",
  },

  {
    id: "chelsea",
    icon: "/images/chelsea.svg",
    label: "Chelsea",
    text: "A die-hard fan of London's finest. No explanation necessary. 💙",
    position:
      "top-[35%] left-[1%]",
    delay: "0.5s",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-950 px-5 py-28 text-white sm:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <div className="mb-16 text-center md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            A little about me
          </span>
        </div>

        {/* Interactive area */}
        <div className="relative mx-auto min-h-[720px] max-w-6xl sm:min-h-[680px] md:min-h-[700px]">

          {/* Floating interests */}
          {interests.map((interest) => (
            <div
              key={interest.id}
              className={`absolute ${interest.position} z-20`}
              style={{
                animationDelay: interest.delay,
              }}
            >
              <div className="group relative">

                {/* Icon button */}
                <button
                  type="button"
                  aria-label={`${interest.label}: ${interest.text}`}
                  className="
                    interest-float
                    flex h-14 w-14 items-center justify-center
                    rounded-full
                    border border-orange-500
                    bg-neutral-900/90
                    text-xl
                    text-white
                    shadow-xl
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-orange-500/60
                    hover:bg-neutral-800
                    hover:shadow-orange-500/10
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-500/60
                    sm:h-16 sm:w-16
                    md:h-[72px] md:w-[72px]
                  "
                >
                  {interest.id === "chelsea" ? (
                    <img src={interest.icon}
                      alt="Chelsea FC"
                      className="h-8 w-8 object-contain sm:h-9 sm:w-9" 
                    />
                  ) : (
                    <span>{interest.icon}</span>
                  )}
                </button>

                {/* Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-full
                    left-1/2
                    mb-4
                    w-52
                    -translate-x-1/2
                    translate-y-2
                    rounded-2xl
                    border border-white/10
                    bg-neutral-900/95
                    p-4
                    text-left
                    opacity-0
                    shadow-2xl
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:pointer-events-auto
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    group-focus-within:pointer-events-auto
                    group-focus-within:translate-y-0
                    group-focus-within:opacity-100
                  "
                >
                  <p className="mb-1 text-sm font-medium text-white">
                    {interest.label}
                  </p>

                  <p className="text-xs leading-5 text-neutral-400">
                    {interest.text}
                  </p>
                </div>

              </div>
            </div>
          ))}

          {/* Main content */}
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center px-8 pt-16 text-center sm:pt-12 md:pt-16">

            <h2 className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              I turn
              <span className="text-orange-500"> ideas </span>
              into purposeful experiences designed to make a meaningful impact.
            </h2>

            <p className="mt-10 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
              I'm Etinosa, a UI/UX designer and frontend developer
              who enjoys making things look good and bringing ideas
              to life. There's something satisfying about taking
              something that only exists in your head, designing it,
              and eventually watching it work on a screen.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
              I'm naturally reserved and observant, and I pay attention
              to the little things. Right now, I'm focused on becoming
              a better frontend developer, with my sights set on
              full-stack development and product design.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-600">
              <span className="h-px w-8 bg-neutral-800" />
              Get to know me
              <span className="h-px w-8 bg-neutral-800" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;