import React from 'react'
import TypingText, { BounceInDownButton } from '../animation/bounceIn'
import { FaNpm, FaReact, FaSass, FaUnity, FaPhoenixFramework } from "react-icons/fa";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { RiNextjsLine, RiJavascriptLine } from "react-icons/ri";
import { SiHiveBlockchain } from "react-icons/si";
import { BsPin } from "react-icons/bs";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import knw from '../assets/light.png';
import { Grid } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';

function Knowledge() {

    const details = [
        {
            title: "Reactjs",
            icon: <FaReact />,
            content: "Proficient in Reactjs & relevant frameworks utilizing its powerful component-based architecture to build dynamic and scalable web applications. Which includes integrating RESTful APIs and GraphQL endpoints into React applications, handling asynchronous operations and updating UI components dynamically based on API responses. I am skilled in client-side routing with React Router, designing intuitive navigation and optimizing SPA performance."
        },
        {
            title: "Nextjs",
            icon: <RiNextjsLine />,
            content: "I am particularly interested in Next.js because of its powerful capabilities in server-rendered React applications. Next.js offers a compelling blend of features such as automatic code splitting, hybrid static and server rendering, and seamless API routes, which greatly appeal to me as a frontend developer."
        },
        {
            title: "JavaScript",
            icon: <RiJavascriptLine />,
            content: "Proficient in ES6+ and experienced in building applications with React & Nextjs. I have successfully developed and deployed several web applications, including e-commerce platforms and interactive dashboards."
        },
        {
            title: "HTML/CSS",
            icon: <AiTwotoneHtml5 />,
            content: "Proficient in HTML5 and CSS3, with a strong focus on creating well-structured and semantically meaningful markup. I have experience developing responsive web designs using modern CSS techniques."
        },
        {
            title: "SASS",
            icon: <FaSass />,
            content: "Proficient in Sass, leveraging its powerful features like variables, mixins, and nesting to streamline CSS development. In my projects, I use Sass extensively to create modular stylesheets that enhance code maintainability and scalability."
        },
        {
            title: "Frameworks",
            icon: <FaPhoenixFramework />,
            content: "I am skilled in several UI frameworks, including Bootstrap,shadcn UI, radix UI and Material UI, which I have used extensively to build intuitive and responsive web interfaces."
        },
        {
            title: "npm",
            icon: <FaNpm />,
            content: "Proficient in npm and version control, leveraging these tools to streamline dependency management and ensure project stability. With npm, I adeptly manage dependencies, handling installations, updates, and removals to maintain compatibility and security across projects."
        },
        {
            title: "BlockChain",
            icon: <SiHiveBlockchain />,
            content: "As a frontend developer proficient in blockchain integrations, I leverage my skills in React and Web3.js to build compelling user interfaces that interact seamlessly with blockchain networks. I have experience integrating Web3.js to connect frontend applications with Ethereum, enabling functionalities such as querying blockchain data and interacting with smart contracts."
        },
        {
            title: "Unity",
            icon: <FaUnity />,
            content: "Proficient in Unity integration, leveraging my skills in Unity's API/Socket to develop immersive game experiences. I have successfully integrated various third-party services such as Rapid API and multiplayer networking solutions into Unity projects."
        },
    ];

    return (
        <section className="">
            <p className='dark:text-white opacity-60 text-xs md:text-md'>Know about my</p>
            <BounceInDownButton>
                <p className='text-pink-600 font-bold mb-4 text-xl md:text-4xl'>Knowledge</p>
            </BounceInDownButton>

            <div className='flex flex-col justify-center items-center'>
                <p className='md:max-w-4xl text-center'>
                    <TypingText value="An experienced React developer with deep understanding of React's component-based architecture, state management (using hooks or Redux), and the Virtual DOM for efficient rendering. Proficient in JavaScript (ES6+), HTML5, and CSS3, ensuring responsive and accessible UI/UX designs. Adept at integrating APIs, handling asynchronous operations, and optimizing performance for seamless user experiences. Expertise on,." />
                </p>
                <Grid container spacing={2}>
                    <Grid item md={2} className='hidden md:block'>
                        <Parallax speed={10}>
                        <img src={knw} alt='kachan' />
                        </Parallax>
                    </Grid>
                    <Grid item md={10}>
                        <div className='my-8 flex justify-center flex-wrap gap-4'>
                            {details.map((row, i) => (
                                <HoverCard key={i}>
                                    <HoverCardTrigger className="min-w-[100px] cursor-pointer">
                                        <div className='dark:bg-[#000] dark:text-white dark:border-[#1e1e1e] border rounded-md mb-2'>
                                            <div className='p-4 flex flex-col justify-center items-center text-sm md:text-md'>
                                                <p className='text-ls md:text-2xl mb-2'>{row.icon}</p>
                                                {row.title}
                                            </div>
                                        </div>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="text-xs md:text-sm">
                                        <p className='flex gap-2 font-semibold mb-2 underline text-md'><BsPin size={16} /> {row.title}</p>
                                        {row.content}
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </div>
                    </Grid>
                </Grid>

            </div>
        </section>
    )
}

export default Knowledge