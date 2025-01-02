import { Grid } from '@mui/material';
import React from 'react'
import TimeLine from '../components/ui/timeLine';
import { Briefcase, GraduationCap } from 'lucide-react';
import { BounceInDownButton } from '../animation/bounceIn';

function PersonalDetails() {

    const experience = [
        {
            title: "Osiz Technologies",
            content: "Programmer, 2021 - Present",
            description: "Worked on both centralized and decentralized projects, integrating blockchain functionalities into various applications. This included enabling users to interact with smart contracts written in Solidity. Developing and maintaining web applications that are optimised for various devices and browsers.",
            status: true,
            icon: <Briefcase size={16} />
        }
    ]

    const education = [
        {
            title: "PSG institute of technology and applied research.",
            content: "Coimbatore, TN, 2020",
            description: "Electronics and Communication Engineering., (B.E) - 62.8 CGPA.",
            percent: "62.8%",
            icon: <GraduationCap size={16} />
        },
        {
            title: "Thiagarajar polytechnic college.",
            content: "Salem, TN, 2017",
            description: "Electrical and Electronics Engineering., (D.EEE).",
            percent: "86.4%",
            icon: <GraduationCap size={16} />
        },
        {
            title: "SKV higher secondary school.",
            content: "Tiruchengode, TN, 2015",
            description: "Computer Science., (HSC).",
            percent: "78%",
            icon: <GraduationCap size={16} />
        },
    ]

    return (
        <section className='my-12'>
            <Grid container spacing={4}>
                <Grid item md={6}>
                    <p className='dark:text-white opacity-60 text-sm md:text-md'>Know about my</p>
                    <BounceInDownButton>
                        <p className='text-pink-600 font-bold mb-4 text-2xl md:text-4xl'>Experience</p>
                    </BounceInDownButton>
                    <ol className="relative border-s border-pink-700">
                        {experience.map((e, i) => (
                            <TimeLine
                                key={i}
                                index={i}
                                title={e.title}
                                content={e.content}
                                description={e.description}
                                status={e.status}
                                icon={e.icon}
                            />
                        ))}
                    </ol>
                </Grid>
                <Grid item md={6}>
                    <p className='dark:text-white opacity-60 text-sm md:text-md'>Know about my</p>
                    <BounceInDownButton>
                        <p className='text-pink-600 font-bold mb-4 text-2xl md:text-4xl'>Education</p>
                    </BounceInDownButton>
                    <div className='my-12'>
                        <ol className="relative border-s border-pink-700">
                            {education.map((e, i) => (
                                <TimeLine
                                key={i}
                                    index={i}
                                    title={e.title}
                                    content={e.content}
                                    percent={e.percent}
                                    description={e.description}
                                    icon={e.icon}
                                />
                            ))}
                        </ol>
                    </div>
                </Grid>
            </Grid>
        </section>
    )
}

export default PersonalDetails