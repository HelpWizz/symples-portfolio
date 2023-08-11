import {
  frontend,
  backend,
  ux,
  javascript,
  python,
  lua,
  html,
  css,
  reactjs,
  nodejs,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  britishba,
  proTube,
  myAdmin,
  snailRace,
  psm,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Lua',
    icon: lua,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
  
];

const experiences = [
  {
    title: 'Lead Programmer',
    company_name: "Hazy's British Army",
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2021 - October 2022',
  },

  {
    title: 'Programmer',
    company_name: 'Pickaxe Mining Simulator',
    icon: dcc,
    iconBg: '#333333',
    date: 'Dec 2022 - May 2023',
  },

  {
    title: 'Programmer',
    company_name: 'ProTube',
    icon: microverse,
    iconBg: '#333333',
    date: 'Nov 2022 - January 2023',
  },
  {
    title: 'Programmer',
    company_name: 'Snail Race',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jul 2023 - August 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: "Hazy's British Army ",
    description: 'A British army role play game.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: britishba,
    repo: 'https://github.com/SympleWymple/Hayz-s-British-Army.git',
    demo: 'https://www.roblox.com/games/7327497219/NEW-British-Army-Academy',
  },
  {
    id: 'project-2',
    name: 'ProTube Race',
    description:
      'A roblox game where you run and try and get as much point in a round as possible',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: proTube,
    demo: 'https://www.roblox.com/games/11629950047/SPACE-ProTube-Race-Clicker',
  },
  {
    id: 'project-3',
    name: 'Admin Commands',
    description: 'A game to test my custom chat admin commands',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: myAdmin,
    repo: 'https://github.com/SympleWymple/Admin-Commands.git',
    demo: 'https://www.roblox.com/games/11740602256/Admin-Commands',
  },
  {
    id: 'project-4',
    name: 'Snail Race',
    description: `A game where you race on a snail`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: snailRace,
    demo: 'https://www.roblox.com/games/13749121967/Snail-Race',
  },
  {
    id: 'project-5',
    name: 'Pickaxe Mining Simulator',
    description:
      'Destory ores with a pickaxe and with the help of pets',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: psm,
    demo: 'https://www.roblox.com/games/10821317529/Pickaxe-Mining-Simulator',
  },
];

export { services, technologies, experiences, projects };
