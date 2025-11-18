import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import founderImage from '../assets/mrWisdom.jpg';



// Assume this is the biography text
const founderBiography =
  'is a professional, profitable and notable forex trader with over 8 years of experience, a thought leader, an investor and an international keynote speaker. He is also a kingmaker, passionate about helping humans through their “grass to grace” journeys He is the founder of Algora Trading Academy, Nigeria leading online forex and crypto trading academy, where he trains over one million beginners and advanced traders on how to trade profitably.';

function AboutFounder() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }} className="font-bold text-lg  text-darkmode" >
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        Meet Our Founder
      </Typography>
      
      {/* The Grid container for the two columns
        spacing={4} adds space between the columns (and rows)
      */}
      <Grid container spacing={4} alignItems="center">
        
        {/* --- Column 1: Biography Text --- */}
        {/* xs={12} means it takes up 12/12 columns on extra-small screens (stacks vertically)
          md={7} means it takes up 7/12 columns on medium screens and larger
        */}
        <Grid item xs={12} md={7}>
          <Typography variant="h5" gutterBottom  
          sx={{
    // Default (mobile-first, applies to xs and up): smaller size for mobile
    fontSize: {
      xs: '1.2rem', // Equivalent to 19.2px (smaller than default h5)
      sm: '1.5rem', // Default h5 size, or slightly larger for tablets
      md: '2rem',  // Larger size for desktop
    },
    // You can also change the font weight or any other CSS property here
  }}>
            Biography of MrWisdom
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: {
      xs: '0.9rem', // Equivalent to 19.2px (smaller than default h5)
      sm: '1.5rem', // Default h5 size, or slightly larger for tablets
      md: '2rem',  // Larger size for desktop
    } }}className="font-bold text-lg  text-gray-700" >
            {founderBiography}
          </Typography>
        </Grid>
        
        {/* --- Column 2: Founder Image --- */}
        {/* xs={12} means it takes up 12/12 columns on extra-small screens (stacks vertically)
          md={5} means it takes up 5/12 columns on medium screens and larger
        */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            sx={{
              width: '100%', // Fills the width of the Grid item
              height: 'auto',
              borderRadius: '8px', // Optional: adds rounded corners
              boxShadow: 3, // Optional: adds a subtle shadow
              objectFit: 'cover',
            }}
            alt="Founder - John Doe"
            src={founderImage}
          />
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default AboutFounder;