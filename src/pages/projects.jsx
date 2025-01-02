import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card"
import {
    CustomModal,
    CNMoadlContent,
    CNMoadlText,
    CNMoadlHeader,
} from '@/components/ui/modal';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Network, Scale, Timer } from 'lucide-react';
import { BounceInDownButton } from '../animation/bounceIn';

function Projects() {

    const [showData, setShoData] = useState({});
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const projects = [
        {
            title: "Octaverse",
            link: "https://octaverse.osizdemos.com/",
            stack: "React, Node.js, Express, MongoDB",
            duration: "May 2024 - Present",
            team: 9,
            content: "Developed an centralized MLM (Multi-Level Marketing) platform leveraging core wallet technology to enhance transparency, security, and efficiency in network marketing operations. The platform will enable participants to earn rewards through referrals within a structured MLM framework",
            description: ["Developed an centralized MLM (Multi-Level Marketing) platform leveraging core wallet technology to enhance transparency, security, and efficiency in network marketing operations. The platform will enable participants to earn rewards through referrals within a structured MLM framework", "Implemented a multi-level hierarchical structure where participants earn commissions not only from their own sales but also from sales generated by their downline (referrals and their referrals)", "Scripted commission calculations based on predefined rules encoded in Nodejs. Payouts should be executed in cryptocurrencies supported by the platform", "Provided user-friendly dashboard to track their earnings, network growth, stake details, participation record and other relevant metrics. Include analytics tools for deeper insights into their MLM business.", "Used immutable data and a traditional database (e.g., mongoDB) for user management and configurations."]
        },
        {
            title: "Champion City",
            link: "https://staging.ccpoker.games",
            stack: "React, Node.js, Express, MongoDB, Solidity, Unity",
            duration: "Jan 2024 - May 2024",
            team: 12,
            content: "Developed a decentralized poker game that combines the classic game of poker with the security, transparency, and efficiency of block-chain technology.",
            description: ["Developed a decentralized poker game that combines the classic game of poker with the security, transparency, and efficiency of block-chain technology.", "The game is built on block-chain, providing transparency and immutability to all transactions and game outcomes.", "Collaborated with Unity developers to integrate the game build with React and ensured optimized gaming experience.", "The decentralized nature of the platform ensures fair game-play, eliminating the need for players to trust a central authority or third-party service.", "Users can also buy and sell wearable in the form of NFTs which they can use to customize the clothing and accessories of the avatars they choose, directly on the platform."]
        },
        {
            title: "House of Plinko",
            link: "https://houseofplinko.games",
            stack: "React, Node.js, Express, MongoDB, Solidity, Unity",
            duration: "Jan 2024 - May 2024",
            team: 2,
            content: "Developed a scripted gaming project where users can deposit their cryptocurrencies and play Plinko. They can earn rewards by winning the game and withdraw these rewards to their wallet",
            description: ["Developed a scripted gaming project where users can deposit their cryptocurrencies and play Plinko. They can earn rewards by winning the game and withdraw these rewards to their wallet.", "The game utilizes JavaScript, with points updated in real-time through socket integrations for instant updates. Users can deposit and withdraw using various coins such as ETH, BNB, and Matic.", "Prior to playing, users select a coin and the betting amount.", "Rewards are distributed in the cryptocurrency that was bet. An admin manages the betting amount and fee percentage. Admin can create new betting plans and set reasonable fees for the bets."]
        },
        {
            title: "Live Scores",
            link: "https://tysotructuyen.com/",
            stack: "React, Node.js, Express, MongoDB, Rapid API.",
            duration: "May 2023 - Sep 2023",
            team: 3,
            content: "It's a live score updating project where users can view live scores, scheduled matches, and completed status for nine different games. Such as Soccer, Tennis, Volleyball, Badminton, Golf, Basketball, etc.",
            description: ["It's a live score updating project where users can view live scores, scheduled matches, and completed status for nine different games. Such as Soccer, Tennis, Volleyball, Badminton, Golf, Basketball, etc.", "We utilize a third-party service called Rapid API for instant result updates. Users can not only check scores but also monitor their favorite team and player performances.", "Additionally, users can stay updated through commentary and news sections, and watch their favorite games live."]
        },
        {
            title: "Dexa NFT",
            link: "https://nft.dexa.exchange",
            stack: "React, Node.js, Express, MongoDB, Solidity.",
            duration: "Aug 2022 - Nov 2022",
            team: 3,
            content: "Developed a decentralized marketplace for buying, selling, and trading non-fungible tokens (NFTs) with React as the front-end. Users can purchase and sell NFTs directly on the platform using cryptocurrency.",
            description: ["Developed a decentralized marketplace for buying, selling, and trading non-fungible tokens (NFTs) with React as the front-end. Users can purchase and sell NFTs directly on the platform using cryptocurrency.", "The marketplace supports auctions, fixed-price listings, and various bidding mechanisms. Users can create profiles on DEXA NFT to showcase their NFTs and track their activities on the platform.", "The profiles include information about the user's owned NFTs, buying and selling history, and more"]
        },

    ]

    return (
        <section>
            <p className='dark:text-white opacity-60 text-xs md:text-md'>Visite my</p>
            <BounceInDownButton>
                <p className='text-pink-600 font-bold mb-4 text-xl md:text-4xl'>Projects</p>
            </BounceInDownButton>
            <div className='mx-8'>
                <Carousel>
                    <CarouselContent>
                        {projects.map((row, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"
                                onClick={() => setShoData(row)}>
                                <div className="p-1">
                                    <Card className='dark:bg-[#0b0b0b] dark:border-none'>
                                        <CardContent className='dark:text-white pt-6'>
                                            <div className='mb-3'>
                                                <p className='text-lg font-semibold'>{row.title}</p>
                                                <CardDescription>{row.duration}</CardDescription>
                                            </div>
                                            <div className='cardScrl max-h-[250px] overflow-auto text-sm'>
                                                {row?.description?.map((list, i) => (
                                                    <p className=' ark:text-gray-400' key={i}>{list}</p>
                                                ))}
                                            </div>
                                            <button className='text-pink-600 border border-pink-600
                                            duration-300 hover:text-white hover:bg-pink-600 rounded-md w-full mt-2 py-2' onClick={toggle}>Know more</button>
                                        </CardContent>
                                    </Card>
                                </div>

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <CustomModal open={modal} className='md:min-w-[80vw] lg:min-w-[60vw]'>
                    <CNMoadlHeader toggle={toggle}>
                        <p className='text-2xl font-bold uppercase'>{showData?.title}</p>
                        <CNMoadlText>{showData?.stack}</CNMoadlText>
                    </CNMoadlHeader>
                    <CNMoadlContent>
                        <article className="md:gap-8 md:grid md:grid-cols-3">
                            <div>
                                <ul className="mb-4 space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <Timer size={14} className='mr-2' /> Duration : {showData?.duration}</li>
                                    <li className="flex items-center">
                                        <Network size={14} className='mr-2' />Methodology : Scrum, Agile.</li>
                                    <li className="flex items-center">
                                        <Scale size={14} className='mr-2' />Role : Front-end Development</li>
                                    <li className="flex items-center"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                                        <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                                        <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                                    </svg>Team : {showData?.team || "---"} Members</li>
                                </ul>
                            </div>
                            <div className="col-span-2 mt-6 md:mt-0 text-white">
                                <ul className='list-disc pl-6 opacity-60'>
                                    {showData?.description?.map((list, i) => (
                                        <li key={i}>{list}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                        <aside className="flex justify-end my-3">
                            <a target='_blank' href={showData?.link} className="inline-flex items-center text-sm font-medium text-pink-500 hover:underline cursor-pointer group ms-5" onClick={toggle}>
                                View site
                            </a>
                            <p className="inline-flex items-center text-sm font-medium text-pink-500 hover:underline cursor-pointer group ms-5" onClick={toggle}>
                                Close
                            </p>
                        </aside>
                    </CNMoadlContent>
                </CustomModal>
            </div>
        </section>
    )
}

export default Projects