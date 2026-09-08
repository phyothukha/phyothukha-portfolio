import React, { useEffect, useRef } from "react";
import phyothukha from "@/assets/phyothukha.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef?.current?.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
            },
          },
        );
      }
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current?.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="#me"
      ref={sectionRef}
      className="relative mt-14 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="bg-text absolute top-24 right-24 rotate-12 text-gray-100 dark:text-[#4b4a4a31] text-[#e7e7e79f] text-9xl scale-150 tracking-widest font-bold select-none pointer-events-none text-center -z-20"
      >
        PASSIONATE PROGRAMMER FREELANCER FULL-STACK DEVELOPER
      </span>

      <div className="w-full flex flex-col items-center lg:justify-start justify-evenly">
        <div className="flex md:flex-row items-center md:pb-40 pb-10 flex-col-reverse gap-5 font-Roboto container max-w-6xl mx-auto lg:gap-5 justify-center flex-wrap-reverse min-h-[769px] lg:px-0 px-10">
          <article
            ref={textRef}
            className="md:w-1/2 selection:bg-wtsecondary dark:selection:bg-secondary max-w-[500px] flex flex-col gap-1 lg:gap-5 text-start"
          >
            <p className="lg:text-lg selection:text-primary dark:selection:text-darkary text-sm font-normal font-Poetsen text-opacity-20">
              My name{"'"}s{" "}
            </p>
            <p className="md:text-3xl font-Fira text-xl dark:text-secondary dark:selection:text-darkary selection:text-primary text-wtsecondary lg:text-5xl">
              <span className="font-Fira">{"<"}</span>Phyo Thu Kha
              <span className="font-Fira">{"/>"}</span>
            </p>
            <h2 className="lg:text-3xl text-2xl font-bold lg:font-semibold font-Ubuntu selection:text-primary dark:selection:text-darkary">
              I am a <br className="lg:hidden md:inline sm:hidden" />
              <span className="dark:text-secondary text-wtsecondary italic font-bold font-Fira">
                FULL STACK DEVELOPER
              </span>
            </h2>
            <p className="font-normal tracking-widest selection:text-primary dark:selection:text-darkary font-Ubuntu text-xs lg:text-sm">
              I am a Full-stack developer skilled in handling diverse projects,
              learning new technologies, and solving user problems effectively.
            </p>
            <div ref={buttonsRef} className="flex gap-3 mt-5 justify-start">
              <a
                href={"#contact"}
                className="btn bg-wtsecondary dark:bg-secondary dark:text-black text-white before:bg-purple-500"
                style={{
                  lineHeight: 1.7,
                }}
              >
                Contact Me
              </a>
              <button className="btn bg-transparent border-wtsecondary dark:border-secondary text-wtsecondary dark:text-secondary border-2 dark:before:bg-secondary before:bg-wtsecondary">
                Download CV
              </button>
            </div>
          </article>
          <aside className="dark:bg-secondary bg-wtsecondary bg-opacity-70 lg:w-[450px] w-[300px] h-[300px] lg:h-[450px] rounded-full transition ease-in-out duration-500 cursor-pointer overflow-hidden dark:shadow-3xl shadow-5xl hover:shadow-6xl dark:hover:shadow-4xl">
            <img
              src={phyothukha.src}
              draggable={false}
              className="mt-20 select-none object-contain mx-auto lg:w-[400px] w-[250px] h-[250px] lg:h-[400px]"
              alt="Phyo Thu Kha photo"
            />
          </aside>
        </div>
      </div>
      <div className="absolute animate animate-bounce md:inline hidden left-[50%] transform translate-x-[-50%] bottom-5 text-center">
        <p>scroll</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler mx-auto icons-tabler-outline icon-tabler-mouse"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
          <path d="M12 7l0 4" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7l5 5l5 -5" />
          <path d="M7 13l5 5l5 -5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
