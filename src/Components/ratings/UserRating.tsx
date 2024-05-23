import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

interface BasicRatingProps {
  value: number | null;
  onChange: (newValue: number | null) => void;
}

const UserRating: React.FC<BasicRatingProps> = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rate this book</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(e, newValue) => {
          onChange(newValue);
        }}
      />
    </Box>
  );
}

export default UserRating;
