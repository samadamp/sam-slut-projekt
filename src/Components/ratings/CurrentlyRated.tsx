import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


type RatedProps = {
    rating: number | null;
}

export default function BasicRated({rating}: RatedProps) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={rating} readOnly />
    </Box>
  );
}
