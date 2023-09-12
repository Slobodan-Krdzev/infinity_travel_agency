import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type SeeMoreBtnProps = {
    destination: string
}

const SeeMoreBtn = ({destination}: SeeMoreBtnProps) => {
  return (
    <Link href={destination} style={{
        color: 'black',
        textAlign: 'center',
        textDecoration: 'none',
        margin: '1rem 0',
        display: 'block',
    }}>
        <Typography variant='h4' component={'span'}>
            See More ...
        </Typography>
    </Link>
  )
}

export default SeeMoreBtn;