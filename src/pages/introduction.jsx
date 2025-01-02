import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { FlipWords } from '../animation/wordSwap';
import { Spotlight } from '../animation/spotLight';
import { Download, Linkedin, Mail } from 'lucide-react';
import Aos from 'aos';
import { BounceInDownButton } from '../animation/bounceIn';
import profile from '../assets/profile2.png'
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

function Introduction() {
    const words = [
        "Development.",
        "Designing.",
    ];

    function MonthDiff({ start }) {
        var months;
        var years;
        var past = new Date(start);
        var today = new Date();

        months = (today.getFullYear() - past.getFullYear()) * 12;
        months -= past.getMonth();
        months += today.getMonth();
        years = Math.floor(months / 12);
        months = months - (years * 12);
        return years + "." + months;
    }

    useEffect(() => {
        Aos.init({ once: true })
    }, [])

    return (
        <section className='md:min-h-screen flex justify-start items-center'>
            <Spotlight
                className="top-40 left-0 md:left-60 md:top-20"
                fill="pink"
            />
            <Grid container spacing={2} className='items-center pt-24 lg:pt-8'>
                <Grid item md={7}>
                    <div className='text-2xl md:text-4xl font-semibold mb-8'>
                        <motion.p initial={{ scale: 6 }} animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: .8 }}>Hey there, i'm</motion.p>
                        <BounceInDownButton>
                            <h2 className='text-4xl md:text-6xl font-bold mb-2'>SUDHARSAN</h2>
                        </BounceInDownButton>
                        I'm into <span className='text-pink-600'>Web</span><FlipWords words={words} />
                    </div>
                    <motion.p
                        layout initial={{ scale: 8 }} animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: .8 }}
                        className='dark:text-gray-400 leading-6 text-sm md:max-w-[80%]'> Dynamic and results-oriented Front-End Developer with <MonthDiff start={"2021,09,06"} /> years of hands-on experience in designing and
                        implementing responsive web applications. Proficient in HTML5, CSS, SASS, JavaScript, and modern
                        libraries/frameworks such as React & Nextjs. Demonstrated ability to collaborate effectively in cross-functional teams
                        to deliver visually appealing and user-friendly interfaces.
                    </motion.p>

                    <div className='flex flex-wrap justify-between gap-4 items-center mt-8'>
                        <div className='flex gap-2'>
                            <a target='_blank' href='https://github.com/Sudhar0106' className='dark:bg-[#0b0b0b] dark:border-none border rounded-md p-3  dark:hover:bg-pink-600 hover:bg-pink-600 duration-300 hover:text-white dark:text-white' data-aos="fade-up" data-aos-duration="200" data-aos-delay="300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                            <a target='_blank' href='https://www.facebook.com/share/qsGB9W2CqgpxCrpq/?mibextid=qi2Omg' className='dark:bg-[#0b0b0b] dark:border-none border rounded-md p-3  dark:hover:bg-pink-600 hover:bg-pink-600 duration-300 hover:text-white	dark:text-white' data-aos="fade-up" data-aos-duration="200" data-aos-delay="400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a target='_blank' href='https://instagram.com/sudharsan_2704' className='dark:bg-[#0b0b0b] dark:border-none border rounded-md p-3  dark:hover:bg-pink-600 hover:bg-pink-600 duration-300 hover:text-white	dark:text-white' data-aos="fade-up" data-aos-duration="200" data-aos-delay="500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/in/sudharsan-s-7647a81b5' className='dark:bg-[#0b0b0b] dark:border-none border rounded-md p-3  dark:hover:bg-pink-600 hover:bg-pink-600 duration-300 hover:text-white	dark:text-white' data-aos="fade-up" data-aos-duration="200" data-aos-delay="600">
                                <Linkedin size={16} />
                            </a>
                            <a target='_blank' href='https://mail.google.com/mail/u/0/?fs=1&to=sudharsan2704@gmail.com&su=SUBJECT&body=BODY&bcc=sudharsan2704@gmail.com&tf=cm' className='dark:bg-[#0b0b0b] dark:border-none border rounded-md p-3  dark:hover:bg-pink-600 hover:bg-pink-600 duration-300 hover:text-white	dark:text-white' data-aos="fade-up" data-aos-duration="200" data-aos-delay="700">
                                <Mail size={16} />
                            </a>
                        </div>

                        <a href="https://sudharsan-resume.tiiny.site/" target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-pink-600 dark:bg-[#0b0b0b] dark:border-none border rounded-md  dark:hover:bg-pink-600 hover:bg-pink-600 hover:text-white duration-300 focus:ring-0 focus:outline-none focus:ring-gray-100 dark:focus:text-pink-600" 
                        data-aos="fade-left" data-aos-duration="200" data-aos-delay="400">
                            <Download size={16} className='me-1' /> Download CV</a>
                    </div>
                </Grid>
                <Grid item md={5} className='hidden lg:block'>
                    <Parallax speed={15}>
                        <motion.div initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", duration: .8 }}>
                            <img src={profile} className='img-fluid' alt='profile' />
                        </motion.div>
                    </Parallax>
                </Grid>
            </Grid>
        </section>
    )
}

export default Introduction