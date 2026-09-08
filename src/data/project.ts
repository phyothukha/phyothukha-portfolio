import movieWebsite from "../../public/project/project-1.png";
import bookAuthor from "../../public/project/project-3.png";
import appleclone from "../../public/project/project2.png";
import snakeGame from "../../public/project/snake.png";

export const projects = [
  {
    id: 1,
    name: "movie project design",
    description:
      "A dynamic movie exploration platform developed with React.js , featuring detailed movie and cast information. Users can easily search for movies by title or discover cast members by name, enhancing their movie-watching experience through comprehensive and intuitive search capabilities.",
    image: `<img src="${movieWebsite.src}" alt="Movie Website" class="absolute inset-0 h-full w-full transition-transform duration-500 hover:scale-110 object-cover" />`,
    liveUrl: "https://phyothukha-movie.vercel.app",
    sourceCode: "https://github.com/phyothukha/movie-project",
    tags: ["react", "mantine"],
  },
  {
    id: 2,
    name: "book author",
    description:
      "A feature-rich movie exploration platform built with React.js, utilizing React Query for data fetching, Zustand for state management, and Mantine components for a polished UI. The platform allows users to search for movies and cast members effortlessly, with detailed views on both A feature-rich movie exploration platform built with React.js, utilizing React Query for data fetching, Zustand for state management, and Mantine components for a polished UI. The platform allows users to search for movies and cast members effortlessly, with detailed views on both",
    image: `<img src="${bookAuthor.src}" alt="Book Author" class="absolute inset-0 h-full w-full transition-transform duration-500 hover:scale-110 object-cover" />`,
    liveUrl: "https://book-author-five.vercel.app",
    sourceCode: "https://github.com/phyothukha/book-author",
    tags: ["react", "tailwind", "javascript"],
  },
  {
    id: 3,
    name: "Apple clone ",
    description:
      "A sleek, Apple-inspired web application developed with Next.js and Tailwind CSS, featuring responsive design and smooth animations using Framer Motion. This project leverages modern web technologies to deliver a visually appealing and dynamic user experience",
    image: `<img src="${appleclone.src}" alt="Apple Clone" class="absolute inset-0 h-full w-full transition-transform duration-500 hover:scale-110 object-cover" />`,
    liveUrl: "https://apple-clone-peach.vercel.app",
    sourceCode: "https://github.com/phyothukha/apple-clone",
    tags: ["react", "tailwind", "typescript", "shadcn-ui", "framer-motion"],
  },
  {
    id: 3,
    name: "Snake Game",
    description:
      "Developed a classic Snake game in JavaScript as a hobby project, featuring smooth gameplay, increasing difficulty, and a simple, user-friendly interface.",
    image: `<img src="${snakeGame.src}" alt="Snake Game" class="absolute inset-0 h-full w-full transition-transform duration-500 hover:scale-110 object-cover" />`,
    liveUrl: "https://phyothukha-snake-game.vercel.app",
    sourceCode: "https://github.com/phyothukha/snake-game",
    tags: ["html", "css", "javascript"],
  },
];
