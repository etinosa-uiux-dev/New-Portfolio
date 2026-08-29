import { useEffect, useState } from "react";

const contactInfo = {
  email: "caleb20etinosa@gmail.com",
  phone1: "+234 901 650 6079",
  phone2: "+234 811 219 3538",
  whatsapp: "+234 901 650 6079",
  linkedin: "https://www.linkedin.com/in/caleb-noruwa-etinosa/",
};

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
  },
  {
    id: "gmail",
    label: "Email",
  },
  {
    id: "phone",
    label: "Phone",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
  },
];

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  // Close modal with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSocialClick = (id) => {
    if (id === "linkedin") {
      window.open(
        contactInfo.linkedin,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    if (id === "gmail") {
      setActiveModal("email");
      return;
    }

    if (id === "phone") {
      setActiveModal("phone");
      return;
    }

    if (id === "whatsapp") {
      setActiveModal("whatsapp");
    }
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-neutral-950 px-5 pb-8 pt-24 text-white sm:px-8">

        {/* Top border */}
        <div className="mx-auto max-w-7xl border-t border-white/[0.08] pt-10">

          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

            {/* Small CTA */}
            <div className="text-center md:text-left">
              <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Available for work
                </span>
              </div>

              <p className="text-lg font-medium">
                Let's make something <span className="text-orange-500">interesting</span>.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <button
                  key={social.id}
                  type="button"
                  aria-label={social.label}
                  onClick={() => handleSocialClick(social.id)}
                  className="
                    group
                    flex h-12 w-12 items-center justify-center
                    rounded-full
                    border border-white/[0.08]
                    bg-neutral-900/70
                    text-neutral-400
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-orange-500/50
                    hover:bg-neutral-800
                    hover:text-white
                  "
                >
                  <SocialIcon type={social.id} />
                </button>
              ))}
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-6 text-xs text-neutral-600 sm:flex-row">

            <p>
              © {new Date().getFullYear()} Etinosa. All rights reserved.
            </p>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-2 transition text-orange-500 hover:text-neutral-300"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </button>

          </div>

        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <ContactModal
          type={activeModal}
          closeModal={() => setActiveModal(null)}
        />
      )}
    </>
  );
};

export default Footer;


/* -------------------------------- */
/* SOCIAL SVG ICONS */
/* -------------------------------- */

const SocialIcon = ({ type }) => {

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  if (type === "gmail") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 18V6.5L12 13l9-6.5V18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 6.5 12 13l9-6.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4.5 5.5c0-1.1.9-2 2-2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.5 3.5A11.85 11.85 0 0 0 12.04 0C5.47 0 .13 5.34.13 11.91c0 2.1.55 4.15 1.6 5.96L.02 24l6.27-1.65a11.9 11.9 0 0 0 5.75 1.46h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.45-8.4ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.91a9.84 9.84 0 0 1 2.9 7c0 5.45-4.44 9.89-9.91 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
};


/* -------------------------------- */
/* CONTACT MODAL */
/* -------------------------------- */

const ContactModal = ({ type, closeModal }) => {

  const content = {
    email: {
      title: "Let's talk.",
      label: "Email",
      value: contactInfo.email,
    },

    phone: {
      title: "Give me a call.",
      label: "Phone",
    },

    whatsapp: {
      title: "Message me.",
      label: "WhatsApp",
      value: contactInfo.whatsapp,
    },
  };

  const current = content[type];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >

      <div
        className="
          relative w-full max-w-md
          animate-[modalIn_.35s_ease-out]
          rounded-[28px]
          border border-white/10
          bg-neutral-900
          p-7
          shadow-2xl
          sm:p-9
        "
      >

        {/* Close */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-neutral-400 transition hover:bg-white/10 hover:text-white"
        >
          ×
        </button>

        <span className="text-xs uppercase tracking-[0.25em] text-orange-500">
          {current.label}
        </span>

        <h3 className="mt-4 text-3xl font-medium tracking-tight text-white">
          {current.title}
        </h3>

        {/* EMAIL */}
        {type === "email" && (
          <>
            <p className="mt-6 break-all text-sm text-neutral-400">
              {current.value}
            </p>

            <a
              href={`mailto:${current.value}`}
              className="mt-7 flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3.5 text-sm font-medium text-white transition hover:bg-orange-400"
            >
              Open mail
            </a>
          </>
        )}

        {/* PHONE */}
        {type === "phone" && (
          <div className="mt-6 space-y-3">

            <a
              href={`tel:${contactInfo.phone1}`}
              className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-orange-500/40"
            >
              <span className="text-sm text-neutral-300">
                {contactInfo.phone1}
              </span>

              <span className="text-orange-500">
                ↗
              </span>
            </a>

            <a
              href={`tel:${contactInfo.phone2}`}
              className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-orange-500/40"
            >
              <span className="text-sm text-neutral-300">
                {contactInfo.phone2}
              </span>

              <span className="text-orange-500">
                ↗
              </span>
            </a>

          </div>
        )}

        {/* WHATSAPP */}
        {type === "whatsapp" && (
          <>
            <p className="mt-6 text-sm text-neutral-400">
              WhatsApp me at
            </p>

            <p className="mt-2 text-lg font-medium text-white">
              {current.value}
            </p>

            <a
              href={`https://wa.me/${current.value.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3.5 text-sm font-medium text-white transition hover:bg-orange-400"
            >
              Open WhatsApp
            </a>
          </>
        )}

      </div>
    </div>
  );
};