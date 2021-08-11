type Projects = {
  id: number;
  title: string;
  desc: string[];
  img: string;
  website: string;
  git: string;
}[];

export const projectsList: Projects = [
  {
    id: 1,
    title: "Astronomy App",
    desc: ["Next", "Material UI", "TypeScript", "Nasa API"],
    img: "https://i.ibb.co/3dH2vNj/astro.jpg",
    website: "https://astronomy-app.netlify.app/",
    git: "astro-app",
  },
  {
    id: 2,
    title: "Static Product Website",
    desc: ["Next", "React", "TypeScript"],
    img: "https://i.ibb.co/0Fr9Sf6/static-next.webp",
    website: "https://static-product-next.vercel.app/",
    git: "static-product-next",
  },
  {
    id: 3,
    title: "Contact Tracing App",
    desc: ["React", "Redux", "Firebase"],
    img: "https://i.ibb.co/zXwzWJc/contact-tracing-formatted.webp",
    website: "https://contact-tracing.netlify.app/",
    git: "ContactTracing",
  },
  {
    id: 4,
    title: "Weather App",
    desc: ["Next", "Redux", "TypeScript", "OpenWeatherMap API"],
    img: "https://i.ibb.co/9sXf5B0/weather-app-formatted.webp",
    website: "https://weather-app-next-seven.vercel.app/",
    git: "weatherapp",
  },
  {
    id: 5,
    title: "Task Dashboard",
    desc: ["React", "Firebase"],
    img: "https://i.ibb.co/RYXSQfy/movie-db-formatted.webp",
    website: "https://task-dash.herokuapp.com/",
    git: "task-dash",
  },
  {
    id: 6,
    title: "Movies Database App",
    desc: ["React", "Redux", "TypeScript", "TMDB API"],
    img: "https://i.ibb.co/RYXSQfy/movie-db-formatted.webp",
    website: "https://moviedb-geary.netlify.app/",
    git: "moviedb",
  },
  {
    id: 7,
    title: "Node Blog (CRUD)",
    desc: ["Node", "Express", "MongoDB"],
    img: "https://i.ibb.co/mykzPhT/node-blog-formatted.webp",
    website: "https://diaryofacow.herokuapp.com",
    git: "diaryofacow",
  },
];
