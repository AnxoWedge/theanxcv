import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "The Anx CV | Ângelo Cunha" },
    { name: "The CV to present my skills", content: "Welcome to my CV!" },
  ];
};

export default function Index() {
  return (
    <div className="flex mt-32 mb-32 items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Let&apos;s Keep it <span> Stupid </span> Simple.
          </h1>
          <div className="h-[198px] w-[301px]">
            <img
              src="/question-dark.png"
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">WHO AM I? </h2>
            <p className="text-gray-800 dark:text-gray-100 text-center">The short introduction is "My name is Ângelo, 7 years of experience as a software engineer". </p>
            <p className="text-gray-800 dark:text-gray-100 text-center">For a longer introduction contact me.😁</p>
          </div>
        </header>
        <div className="max-w-[900px] mx-auto">
          <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="leading-6 text-gray-700 dark:text-gray-200 text-2xl">
              Skills
            </h3>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {skills.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="max-w-[900px] mx-auto">
          <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="leading-6 text-gray-700 dark:text-gray-200 text-2xl">
              Projects
            </h3>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {projects.map(({ href, text }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <p className="text-gray-700 dark:text-gray-200 text-2xl">Find out more</p>
          <div className="h-[2px] w-full bg-white mb-4" />
          <div className="flex gap-6">
            {/* <div className="h-[48px] w-[48px]">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img
                src="/Instagram.png"
                alt="Instagram icon"
                className="hidden w-full dark:block"
              />
              </a>
            </div> */}
            <div className="h-[48px] w-[48px]">
              <a href="https://github.com/AnxoWedge" target="_blank" rel="noreferrer">
              <img
                src="/Github.png"
                alt="GitHub icon"
                className="hidden w-full dark:block"
              />
              </a>
            </div>
            <div className="h-[48px] w-[48px]">
              <a href="https://www.linkedin.com/in/%C3%A2ngelocunha/" target="_blank" rel="noreferrer">
              <img
                src="/Linkedin.png"
                alt="LinkedIn icon"
                className="hidden w-full dark:block"
              />
              </a>
            </div>
            {/* <div className="h-[48px] w-[48px]">
              <a href="mailto:acunha@creativediscovery.eu">
              <img
                src="/Mail.png"
                alt="E-mail icon"
                className="hidden w-full dark:block"
              />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const skills = [
  {
    href: "https://www.w3.org/html/",
    text: "HTML5",
    icon: <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />,
  },
  {
    href: "https://www.w3.org/Style/CSS/",
    text: "CSS3",
    icon: <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />,
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    text: "JavaScript",
    icon: <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />,
  },
  {
    href: "https://www.typescriptlang.org/",
    text: "TypeScript",
    icon: <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />,
  },
  {
    href: "https://www.python.org/",
    text: "Python",
    icon: <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />,
  },
  {
    href: "https://www.php.net/",
    text: "PHP",
    icon: <img src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />,
  },
  {
    href: "https://www.r-project.org/",
    text: "R",
    icon: <img src="https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white" alt="R" />,
  },
  {
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    text: "C",
    icon: <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" />,
  },
  {
    href: "https://code.visualstudio.com/",
    text: "Visual Studio Code",
    icon: <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Visual Studio Code" />,
  },
  {
    href: "https://www.anaconda.com/",
    text: "Anaconda",
    icon: <img src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white" alt="Anaconda" />,
  },
  {
    href: "https://yarnpkg.com/",
    text: "Yarn",
    icon: <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />,
  },
  {
    href: "https://threejs.org/",
    text: "Three.js",
    icon: <img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />,
  },
  {
    href: "https://nextjs.org/",
    text: "Next.js",
    icon: <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />,
  },
  {
    href: "https://remix.run/",
    text: "Remix",
    icon: <img src="https://img.shields.io/badge/remix-%23000.svg?style=for-the-badge&logo=remix&logoColor=white" alt="Remix" />,
  },
  {
    href: "https://reactjs.org/",
    text: "React",
    icon: <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />,
  },
  {
    href: "https://redux.js.org/",
    text: "Redux",
    icon: <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />,
  },
  {
    href: "https://www.djangoproject.com/",
    text: "Django",
    icon: <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="Django" />,
  },
  {
    href: "https://fastapi.tiangolo.com/",
    text: "FastAPI",
    icon: <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI" />,
  },
  {
    href: "https://flask.palletsprojects.com/",
    text: "Flask",
    icon: <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />,
  },
  {
    href: "https://strapi.io/",
    text: "Strapi",
    icon: <img src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white" alt="Strapi" />,
  },
  {
    href: "https://wordpress.org/",
    text: "WordPress",
    icon: <img src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white" alt="WordPress" />,
  },
  {
    href: "https://insomnia.rest/",
    text: "Insomnia",
    icon: <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" alt="Insomnia" />,
  },
  {
    href: "https://www.postgresql.org/",
    text: "Postgres",
    icon: <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" />,
  },
  {
    href: "https://mariadb.org/",
    text: "MariaDB",
    icon: <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="MariaDB" />,
  },
  {
    href: "https://www.mysql.com/",
    text: "MySQL",
    icon: <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />,
  },
  {
    href: "https://www.sqlite.org/",
    text: "SQLite",
    icon: <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />,
  },
  {
    href: "https://www.mongodb.com/",
    text: "MongoDB",
    icon: <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />,
  },
  {
    href: "https://azure.microsoft.com/",
    text: "Azure",
    icon: <img src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Azure" />,
  },
  {
    href: "https://aws.amazon.com/",
    text: "AWS",
    icon: <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />,
  },
  {
    href: "https://www.digitalocean.com/",
    text: "DigitalOcean",
    icon: <img src="https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white" alt="DigitalOcean" />,
  },
  {
    href: "https://cloud.google.com/",
    text: "Google Cloud",
    icon: <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />,
  },
  {
    href: "https://www.ovh.com/",
    text: "OVH",
    icon: <img src="https://img.shields.io/badge/ovh-%23123F6D.svg?style=for-the-badge&logo=ovh&logoColor=#123F6D" alt="OVH" />,
  },
];

const projects = [
  {
    href: "https://github.com/AnxoWedge/AnQR",
    text: "AnQR - QR code Generator",
  },
  {
    href: "https://creativediscovery.pt/",
    text: "Creative Discovery Website",
  },
  {
    href: "https://github.com/AnxoWedge/glasgowClimateAI",
    text: "Glasgow Climate AI",
  },
  {
    href: "https://github.com/AnxoWedge/rpsgame",
    text: "Rock Paper Scissors Game",
  },
  {
    href: "https://koka.pt/",
    text: "Koka pt Website",
  },
  
];