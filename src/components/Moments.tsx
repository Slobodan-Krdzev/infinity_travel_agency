import React from 'react'
import SectionTitle from './SectionTitle';
import { Grid, useMediaQuery } from '@mui/material';
import { GaleryImageType } from '@/types/types';
import GaleryImage from './GaleryImage';


type MomentsProps = {
    images: GaleryImageType[]
}

const Moments = ({images}: MomentsProps) => {

  const breakpoint = useMediaQuery("(min-width:500px)");


  return (
    <section style={{
        width: '95%',
        margin: '0 auto'
    }}>
        <SectionTitle text={'Ваши Моменти'}/>
        <Grid container spacing={breakpoint ? 2 : 2.8} p={'2rem 0'} sx={{
          width: '100%',
          margin: '0 auto'
        }}>
            {images.map(image => <GaleryImage key={image.image} {...image}/>)}
        </Grid>
    </section>
  )
}

export default Moments;