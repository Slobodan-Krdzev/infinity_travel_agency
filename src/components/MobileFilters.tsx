import { Button, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Searchbar from './Searchbar'
import TuneIcon from '@mui/icons-material/Tune';
import DefaultTheme from '@/styles/DefaultTheme';
import { useRouter } from 'next/router';

type MobileFiltersProps = {
    showFilters: (state:boolean) => void,
    filtersState: boolean
}

const MobileFilters = ({showFilters, filtersState}: MobileFiltersProps) => {
  const router = useRouter()

  const handleSearchInputFiltering = (filter: string) => {

    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        name_like: filter
      }
    })
  }

  useEffect(() => {
      showFilters(false)
  }, [router.query])
  

  return (
    <Stack direction={'row'} justifyContent={'space-between'} width={"100%"}  marginBottom={'2rem'}>
        <Searchbar action={handleSearchInputFiltering} />
        <Button
        
          sx={{
            color: "white",
            margin: 0,
            backgroundColor: DefaultTheme.palette.primary.main,
          }}
          onClick={() => showFilters(!filtersState)}
        >
          <TuneIcon fontSize='large'/>
        </Button>
    </Stack>
  )
}

export default MobileFilters;