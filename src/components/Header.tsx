import { navlinks } from "@/data/navLinks";
import useActiveNav from "@/hooks/useActiveNav";
import React, { useEffect, useState } from "react";

const Header = () => {
  const currentNav = useActiveNav("section");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <>
      <header className=" fixed top-0 py-5 backdrop-filter backdrop-blur-[10px] z-50 dark:bg-[rgb(41,47,54,0.3)] bg-[rgba(255,255,255,0.2)] left-0 w-full">
        <div className=" container max-w-6xl flex mx-auto justify-between px-10 lg:px-0 selection:bg-wtsecondary dark:selection:bg-secondary selection:text-primary dark:selection:text-darkary ">
          <a
            href="/"
            className=" text-xl font-bold font-Poetsen dark:text-white text-black dark:hover:text-secondary hover:text-wtsecondary cursor-pointer transition duration-150 ease hover:scale-95 "
          >
            Phyo{" "}
            <span
              className=" dark:text-secondary selection:shadow-none text-wtsecondary font-Poetsen"
              style={{
                textShadow: "0 0 2px var(--main-color)",
              }}
            >
              Thu Kha
            </span>
          </a>
          <nav>
            <ul className=" flex gap-8 items-center w-full font-medium">
              {navlinks.map((nav) => (
                <li key={nav.url} className=" md:inline-block hidden">
                  <a
                    href={nav.url}
                    className={` text-black transition duration-100 nav-ani font-semibold font-Poppins   ${
                      currentNav === nav.url.substring(1)
                        ? "text-wtsecondary dark:text-secondary nav-ani"
                        : "dark:text-white"
                    }`}
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={toggleTheme}
                  title="Toggles light & dark theme"
                  aria-label={theme}
                  aria-live="polite"
                  className="w-8 h-8 ml-1 rounded-lg flex justify-center items-center link-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--main-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-sun dark:inline-block hidden"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--second-main-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-moon dark:hidden inline-block"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className=" backdrop-filter backdrop-blur-[10px] md:hidden flex justify-around rounded-xl overflow-hidden dark:bg-[rgba(0,0,0,0.3)] left-[50%] right-[50%] transform translate-x-[-50%] fixed bottom-5  h-20  z-50 w-[90%]">
        {navlinks.map((nav) => (
          <a
            key={nav.url}
            href={nav.url}
            className={`dark:text-white dark:hover:text-secondary  hover:text-wtsecondary transition duration-300 text-black text-xs p-3 max-w-xl text-center flex flex-col items-center justify-center ${
              currentNav === nav.url.substring(1) &&
              " text-wtsecondary dark:text-secondary font-semibold"
            }`}
          >
            <p className=" text-center">{nav.icons}</p>
            <p>{nav.label}</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
