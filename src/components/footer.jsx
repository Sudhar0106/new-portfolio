import React from 'react'
import { BounceInDownButton } from '../animation/bounceIn'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { Grid, Tooltip } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'

function Footer() {
    return (
        <Parallax speed={15}>
            <section className='py-12 bg-slate-100 dark:bg-[#0b0b0b] container'>
                <Grid container spacing={2} className='flex flex-col items-center'>
                    <Grid item md={8} className='text-center'>
                        <BounceInDownButton>
                            <p className='text-pink-600 font-bold mb-4 text-2xl md:text-4xl'>Frontend Developer</p>
                        </BounceInDownButton>
                        <p className='md:max-w-3xl text-center'>
                            An innovative thinker dedicated to pushing the boundaries of user experience. With a passion for creating engaging interfaces that captivate and retain users, not only proficient but also deeply interested in mastering a wide array of frontend tools and frameworks, such as animations like Framer Motion, Three.js, and Blender 3D modeling.
                        </p>
                    </Grid>
                    <Grid item md={4}>
                        <h4 className='mb-4'>Contact</h4>
                        <ul className="mb-4 space-y-4 text-sm md:text-md text-gray-500 dark:text-gray-400">
                            <li className="flex items-center">
                                <Phone size={14} className='mr-2' /> +91 9025399974</li>
                            <li>
                                <a target='_blank' href='https://github.com/Sudhar0106' className='flex items-center truncate gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>sudharsan2704
                                </a>
                            </li>
                            <li>
                                <a target='_blank' className="flex items-center truncate" href='https://mail.google.com/mail/u/0/?fs=1& to=sudharsan2704@gmail.com&su=SUBJECT&body=BODY&bcc=sudharsan2704@gmail.com&tf=cm' >
                                    <Mail size={14} className='mr-2' />
                                    sudharsan2704@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin size={20} className='mr-2' />1/52, Kounder street, kadayampatti, Sarrakkappillauyr, Omalur, Salem -636305</li>
                        </ul>
                        <a href="https://sudharsan-resume.tiiny.site/" target='_blank'
                            className='w-full inline-flex justify-center my-4 items-center px-4 py-2 text-sm font-medium text-white bg-pink-600 dark:bg-pink-600 border border-pink-600 rounded-md dark:hover:bg-[#0b0b0b] hover:bg-[#fff] dark:hover:text-pink-600 hover:text-pink-600 duration-300'>
                            <Download size={16} className='me-1' /> Download CV
                        </a>
                    </Grid>
                </Grid>
            </section >
        </Parallax>
    )
}

export default Footer