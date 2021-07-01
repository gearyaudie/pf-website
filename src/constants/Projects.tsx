type Projects = {
  id: number;
  title: string;
  desc: string;
  img: string;
  website: string;
}[];

export const projectsList: Projects = [
  {
    id: 1,
    title: "Contact Tracing App",
    desc: "React JS, Redux, Firebase",
    img: "https://i.ibb.co/zXwzWJc/contact-tracing-formatted.webp",
    website: "https://contact-tracing.netlify.app/",
  },
  {
    id: 2,
    title: "Weather App",
    desc: "Next JS, React JS, Redux, TypeScript, OpenWeatherMap API",
    img: "https://i.ibb.co/9sXf5B0/weather-app-formatted.webp",
    website: "https://weather-app-next-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Task Dashboard",
    desc: "CRUD with React JS and Firebases",
    img: "https://i.ibb.co/RYXSQfy/movie-db-formatted.webp",
    website: "https://task-dash.herokuapp.com/",
  },
  {
    id: 4,
    title: "Movies Database App",
    desc: "React JS, Redux, TypeScript, TMDB API",
    img: "https://i.ibb.co/RYXSQfy/movie-db-formatted.webp",
    website: "https://moviedb-geary.netlify.app/",
  },
  {
    id: 5,
    title: "Node Blog (CRUD)",
    desc: "Node JS, Express JS, MongoDB",
    img: "https://i.ibb.co/mykzPhT/node-blog-formatted.webp",
    website: "https://diaryofacow.herokuapp.com",
  },
];
