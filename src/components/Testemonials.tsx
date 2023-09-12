import React from 'react'
import SectionTitle from './SectionTitle';
import { Grid, useMediaQuery } from '@mui/material';
import TestemonialCard from './TestemonialCard';
import { TestemonialType } from '@/types/types';

type TestemonialsProps = {
    testemonials: TestemonialType[]
}

const Testemonials = ({testemonials}: TestemonialsProps) => {
  
  const breakpoint = useMediaQuery("(min-width:769px)");
  return (
    <>
        <SectionTitle text={'Тестемониал'} />

        <Grid container spacing={4} sx={{
            backgroundImage: 'url("/images/groupBanner2.png")',
            width: breakpoint ? '80%' : '100%',
            margin: '2rem auto',
            padding: '0 0.5rem 2rem',
            borderRadius: '0.5rem'
        }}>
           {testemonials.map(testemonial => <TestemonialCard key={testemonial.id} {...testemonial} />)}
        </Grid>
    </>
  )
}

export default Testemonials;