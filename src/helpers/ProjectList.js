import musicPlayer from "../assets/musicPlayer.png";
import weatherApp from "../assets/weatherApp.png";
import samar from "../assets/samar.png";
import meipaly from "../assets/meipaly.png";
import tabsUI from "../assets/tabsUI.png";
import movietab from "../assets/movietab.png";
import todoapps from "../assets/todoapps.png";
import movieTicket from "../assets/movieticket.png";
import poke from "../assets/poke.png";
import tiktik from "../assets/tiktik.png";
import ecom from "../assets/ecommerce.png";
import {
  weatherprojectLinks,
  PlayerMusicLinks,
  samarLinks,
  meipalyLinks,
  tabsUILinks,
  movieTabs,
  todoListLink,
  movieTicketLink,
  pokeLink,
  tiktikLink,
  ecomLink,
} from "./ProjectLink";

export const projectCssList = [
  {
    name: "Samar",
    image: samar,
    skill: "HTML, CSS",
    demo: samarLinks[0],
    src: samarLinks[1],
  },
  {
    name: "Meipaly",
    image: meipaly,
    skill: "HTML, CSS",
    demo: meipalyLinks[0],
    src: meipalyLinks[1],
  },
  {
    name: "Tabs UI",
    image: tabsUI,
    skill: "HTML, CSS, JS",
    demo: tabsUILinks[0],
    src: tabsUILinks[1],
  },
  {
    name: "Music Player",
    image: musicPlayer,
    skill: "HTML, CSS, JS",
    demo: PlayerMusicLinks[0],
    src: PlayerMusicLinks[1],
  },
];
export const projectMiniReactList = [
  {
    name: "Weather App",
    image: weatherApp,
    skill: "Reactjs",
    demo: weatherprojectLinks[0],
    src: weatherprojectLinks[1],
  },
  {
    name: "Movie Tab",
    image: movietab,
    skill: "Reactjs",
    demo: movieTabs[0],
    src: movieTabs[1],
  },
  {
    name: "Todo List App",
    image: todoapps,
    skill: "Redux toolkit, expressjs",
    demo: todoListLink[0],
    src: todoListLink[1],
  },
  {
    name: "Pokemon List App",
    image: poke,
    skill: "React, Typescript",
    demo: pokeLink[0],
    src: pokeLink[1],
  },
];
export const projectMainReactList = [
  {
    name: "Movie Booking Ticket",
    image: movieTicket,
    skill: "Reactjs, Redux, Tailwindcss",
    demo: movieTicketLink[0],
    src: movieTicketLink[1],
  },
  {
    name: "Ecommerce Web Shopping Online",
    image: ecom,
    skill: "React, Nextjs, Stripe",
    demo: ecomLink[0],
    src: ecomLink[1],
  },
  {
    name: "Tik Tok Short Video Social",
    image: tiktik,
    skill: "Nextjs, Typescript, Tailwindcss",
    demo: tiktikLink[0],
    src: tiktikLink[1],
  },
];
