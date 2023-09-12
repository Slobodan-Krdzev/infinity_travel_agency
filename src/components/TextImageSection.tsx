import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import miceTourism from '../../public/images/miceTourism.png'

type TextImageSectionProps = {
    pictureLeft?: boolean,
    title: string,
    desc: string,
    image: string
}

const TextImageSection = ({pictureLeft, title, desc, image}: TextImageSectionProps) => {

  const breakpoint = useMediaQuery("(min-width:769px)");

  return (
    <Grid container sx={{
        width: breakpoint ? '90%' : '100%',
        margin: '0 auto'
    }}>
        <Grid item xs={12} md={6} p={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} order={pictureLeft && breakpoint ? 1 : 0}>
            <Typography variant={'h1'} component={'h2'} id={title}>
                {title}
            </Typography>
            <Typography variant={'h6'} component={'p'}>
                {desc}
            </Typography>
        </Grid>
        <Grid item xs={12} md={6} p={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} order={pictureLeft && breakpoint ? 0 : 1}>
            <Image src={`/images/${image}`} alt='mice tourism' width={breakpoint ? 528 : 700 } height={breakpoint ? 315 : 250}/>
        </Grid>
    </Grid>
  )
}

export default TextImageSection;