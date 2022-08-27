import musicPlayer from "../assets/musicPlayer.png";
import weatherApp from "../assets/weatherApp.png";
import samar from "../assets/samar.png";
import meipaly from "../assets/meipaly.png";
import tabsUI from "../assets/tabsUI.png";
import movietab from "../assets/movietab.png";
import {
  weatherprojectLinks,
  PlayerMusicLinks,
  samarLinks,
  meipalyLinks,
  tabsUILinks,
  movieTabs,
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
];
export const projectMainReactList = [
  {
    name: "movie",
    image: "",
    skill: "",
  },
];
