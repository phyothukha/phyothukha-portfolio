import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import timelimebg from "@/assets/timelimebg.svg";
import timelimebgwt from "@/assets/timelimebg-wt.svg";
import about from "@/assets/bb.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EducationSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -200, opacity: 0.5 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "back.in",
          // stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
          },
        },
      );

      gsap.fromTo(
        titleRef.current,
        {
          y: -100,
        },
        {
          y: 0,
          duration: 0.5,
          ease: "back.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
          },
        },
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        {
          x: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
          },
        },
      );

      // Button hover animation
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.3,
          ease: "power3.out",
          paused: true,
          onHover: () => {
            gsap.to(buttonRef.current, { scale: 1.1 });
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="dark:bg-[#292f36] bg-[#eeeeee] bg-opacity-90 py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 z-10 dark:inline-block hidden">
        <img
          src={timelimebg.src}
          alt="timeline background"
          className="max-w-none object-cover object-center w-[2000px] h-auto"
        />
      </div>
      <div className="absolute top-0 z-10 dark:hidden inline-block">
        <img
          src={timelimebgwt.src}
          alt="timeline white background"
          className="max-w-none object-cover object-center w-[2000px] h-auto"
        />
      </div>
      <div className="container mx-auto max-w-7xl relative z-30 lg:px-0 px-10">
        <h1 ref={titleRef} className="text-4xl font-bold">
          Education
        </h1>
        <div className="lg:px-28 mt-20">
          <div className="flex flex-wrap md:flex-row flex-col-reverse md:flex-nowrap md:justify-start justify-center items-center gap-20">
            <aside className="lg:w-2/3">
              <button
                ref={buttonRef}
                className="mb-10 bg-darkary lg:text-2xl text-xl w-56 font-medium text-primary dark:text-secondary border-b-2 dark:border-secondary border-wtsecondary rounded-none border-l-2 border-r-2 border-t-2 rounded-tl-[2.3rem] lg:p-5 p-3 rounded-br-[2rem]"
              >
                About Me
              </button>
              <div
                ref={textRef}
                className="bg-darkary border-2 border-wtsecondary dark:border-secondary py-[30px] px-[50px] rounded-3xl shadow-5xl dark:shadow-3xl cursor-pointer transition duration-500 ease-in-out"
              >
                <h2 className="font-Ubuntu selection:text-primary dark:selection:text-darkary text-2xl mb-5 text-secondary">
                  Hello!
                </h2>
                <p className="text-primary font-normal text-xs mb-2 dark:selection:text-darkary">
                  My name is{" "}
                  <span className="text-secondary">Phyo Thu Kha</span> and I
                  specialize in web development that utilizes HTML, CSS, JS, and{" "}
                  <span className="text-secondary">REACT</span> etc.
                </p>
                <p className="text-primary font-normal text-xs mb-2 dark:selection:text-darkary">
                  I am a highly motivated individual and eternal optimist
                  dedicated to writing clear, concise, robust code that works.
                  Striving to never stop learning and improving.
                </p>
                <p className="text-primary font-normal text-xs mb-2 dark:selection:text-darkary">
                  When I{"'"}m not coding, I am writing blogs, reading, or
                  picking up some new hands-on art project like photography.
                </p>
                <p className="text-primary font-normal text-xs mb-2 dark:selection:text-darkary">
                  I like to have my perspective and belief systems challenged so
                  that I see the world through new eyes.
                </p>
              </div>
            </aside>
            <aside className="lg:w-1/3 md:self-end">
              <div
                ref={imageRef}
                className="overflow-hidden h-full w-full bg-primary border-2 border-wtsecondary dark:border-secondary rounded-xl cursor-pointer transition duration-500 ease-in-out"
              >
                <img
                  src={about.src}
                  alt="about me"
                  width={800}
                  className="mx-auto object-cover md:object-bottom h-[400px] w-[400px] md:w-[500px]"
                  height={500}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
