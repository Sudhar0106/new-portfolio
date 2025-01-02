import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { BounceInDownButton, FadeInWhenVisible } from '../animation/bounceIn'
import { Parallax } from 'react-scroll-parallax'

function Skills() {

    const Skillpercent = [
        {
            title: "Javascript",
            Percent: "80%",
            rate: 8
        },
        {
            title: "React",
            Percent: "90%",
            rate: 9
        },
        {
            title: "Web design",
            Percent: "90%",
            rate: 9
        },
        {
            title: "Nextjs",
            Percent: "40%",
            rate: 4
        },
    ]
    return (
        <Parallax speed={10}>
            <section className='my-12'>
                <p className='dark:text-white text-xs md:text-md opacity-60'>Know about my</p>
                <BounceInDownButton>
                    <p className='text-pink-600 font-bold mb-4 text-2xl md:text-4xl'>Professional Skills</p>
                </BounceInDownButton>
                <div className='flex text-sm leading-6 md:text-md flex-col lg:flex-row'>
                    <div className='lg:basis-1/2'>
                        <FadeInWhenVisible>
                            <ul className='list-disc pl-6'>
                                <li>
                                    Expertise in building sophisticated front-end applications using React and its associated libraries and
                                    tools. Deep understanding of HTML, CSS, and JavaScript, enabling them to craft responsive, user-friendly
                                    interfaces that meet client specifications and enhance user experience.
                                </li>
                                <li>
                                    Proficiency in state management solutions such as Redux or Context API, ensuring efficient data flow and
                                    application stability. Leveraging React Router for seamless navigation and integrating RESTful APIs or
                                    GraphQL endpoints to fetch and manipulate data asynchronously
                                </li>
                                <li>
                                    Developing user-friendly and interactive web features such as buttons, forms, and menus Using JavaScript libraries and frameworks to build complex web applications and interactive features.
                                </li>
                                <li>Writing and maintaining code that is clean, efficient, and easy to understand.
                                    Testing web applications to ensure they are bug-free and work seamlessly for the end-users.
                                </li>
                            </ul>
                        </FadeInWhenVisible>
                    </div>
                    <div className='lg:basis-1/2'>
                        <Parallax speed={5}>
                            <Card className="dark:bg-[#0b0b0b] dark:border-none w-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center mb-5">
                                        <p className="font-medium dark:text-white">Skill Rating.</p>
                                    </div>
                                    {Skillpercent.map((item, i) => (
                                        <dl key={i}>
                                            <dt className="text-sm font-medium text-gray-500">{item.title}</dt>
                                            <dd className="flex items-center mb-3 w-full">
                                                <div className="w-full bg-gray-200 rounded h-2">
                                                    <div className="bg-pink-700 h-2 rounded" style={{ width: item.Percent }}></div>
                                                </div>
                                                <span className="text-md font-medium text-gray-500 pl-2">{item.rate}/10</span>
                                            </dd>
                                        </dl>
                                    ))}
                                </CardContent>
                            </Card>
                        </Parallax>
                    </div>
                </div>
            </section>
        </Parallax>
    )
}

export default Skills