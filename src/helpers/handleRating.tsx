import StarIcon from '@mui/icons-material/Star';

export const handleRating = (rating: number) => {
  
    const arr = []

    for (let i = 0; i < rating; i++) {
      const element = 'star';
      arr.push(element)
    }

    return arr.map((star, idx) => <StarIcon sx={{fontSize:'12px'}} key={idx} color="primary"/>)
  }