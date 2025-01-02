import { Grid } from '@mui/material'
import React from 'react'
import { BounceInDownButton, FadeInWhenVisible } from '../animation/bounceIn'
import profile from '../assets/skill2c.png'
import { Parallax } from 'react-scroll-parallax'

function Aboutme() {
    return (
        <Grid container spacing={2} className='items-center'>
            <Grid item md={6} className='flex justify-center w-full'>
                <Parallax speed={10}>
                    <img src={profile} className='img-fluid' alt='pic' />
                </Parallax>
            </Grid>
            <Grid item md={6}>
                <FadeInWhenVisible>
                    <p className='dark:text-white text-xs md:text-md opacity-60'>Get to know</p>
                    <BounceInDownButton>
                        <p className='text-pink-600 font-bold mb-4 text-2xl md:text-4xl'>About me</p>
                    </BounceInDownButton>
                    <p className='mb-3 text-sm leading-6 md:text-md'>
                        &nbsp;&nbsp;&nbsp;&nbsp;I am a skilled front-end developer experienced in creating visually stunning and user-friendly websites and applications expertise in HTML, CSS, SASS, JavaScript, reactjs and various front-end frameworks. I develop dynamic and responsive interfaces that meet client needs. With a deep understanding of front-end development best practices, I am an innovative developer experienced in Reactjs.
                    </p>
                    <p className='mb-3 text-sm md:text-md leading-6'>
                        &nbsp;&nbsp;&nbsp;&nbsp;Also, Worked on De-centralized projects utilizing the knowledge of Blockchain & unity integration such as Swap, Liquidity, Stake, NFT, voting, proposal, gaming etc,.
                    </p>
                </FadeInWhenVisible>
            </Grid>
        </Grid>
    )
}

export default Aboutme