import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AnimatedListItem from './AnimatedListItem';
const NAPPY_IMAGE_URL = "https://images.unsplash.com/photo-1586472597415-06e710d0148f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"; 


const ResponsiveImageAndListContainer = () => {
  return (
    // 1. OUTER CONTAINER (Controls stacking vs. side-by-side)
    <Box
      sx={{
        display: 'flex',
        // CRITICAL: Stacks vertically on 'xs' (mobile), aligns horizontally on 'md' and up (laptop)
        flexDirection: { xs: 'column', md: 'row' }, 
        border: '1px solid #ccc',
        borderRadius: 2, 
        width: '100%',
        overflow: 'hidden', 
        margin: '20px auto',
    
      }}
    >
      {/* 2. LEFT BOX: IMAGE CONTAINER */}
      <Box
        sx={{
          // CRITICAL: Takes 100% width on 'xs', 40% width on 'md' and up
        //   flex: { xs: '1 1 100%', md: '0 0 40%' }, 
        //   maxHeight: { xs: '300px', md: 'auto' }, 
          overflow: 'hidden',
        }}
      >
        <img
          src={NAPPY_IMAGE_URL}
          alt="Developer working on a laptop"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      {/* 3. RIGHT BOX: LIST CONTAINER */}
      <Box
        sx={{
          // CRITICAL: Takes 100% width on 'xs', 60% width on 'md' and up
          flex: { xs: '1 1 100%', md: '1 1 60%' }, 
          p: 3, 
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h2" fontWeight='bold'
        sx ={{    fontSize: {
      xs: '2rem', 
      
      // 2. Tablet/Desktop (sm and up): Use the larger standard size (e.g., 3rem)
      sm: '3rem', 
      
      // md and up will also use 3rem since it inherits from sm
    },}}
        className=' text-darkmode ' >
         Why Choose  <span className='text-button'> Us</span>
        </Typography>

        <List>
          {/* <ListItem disablePadding>
            <ListItemIcon><ListAltOutlinedIcon className='text-button' /></ListItemIcon>
            <ListItemText
            primary={
        <Typography 
          sx={{ 
            color: 'success.main', 
            fontSize: '1.2rem', 
            fontWeight: 600,
          }}
        >
     
        </Typography>
        }
        />
          </ListItem> */}
          <AnimatedListItem 
                    primaryContent={
                    <Typography 
                        // You can still use Tailwind classes here if you want:
                         className="font-bold text-lg  text-gray-700" 
                    >
                        Expert Instructors With Proven records
                    </Typography>
                }
                   
                    icon={ListAltOutlinedIcon}
                    iconProps={{ className: 'text-button' }}
                />
                <AnimatedListItem 
                    primaryContent={
                    <Typography 
                        // You can still use Tailwind classes here if you want:
                         className="font-bold text-lg  text-gray-700" 
                    >
                        Transparent, Real-World Trading Strategies
                    </Typography>
                }
                   
                    icon={ListAltOutlinedIcon}
                    iconProps={{ className: 'text-button' }}
                />
                <AnimatedListItem 
                    primaryContent={
                    <Typography 
                        // You can still use Tailwind classes here if you want:
                         className="font-bold text-lg  text-gray-700" 
                    >
                        Global reach,Traders from africa, Europe, asia,americas
                    </Typography>
                }
                   
                    icon={ListAltOutlinedIcon}
                    iconProps={{ className: 'text-button' }}
                />
                <AnimatedListItem 
                    primaryContent={
                    <Typography 
                        // You can still use Tailwind classes here if you want:
                         className="font-extrabold  text-gray-700" 
                    
                    >
                        Structured From Beginner to Advanced Levels
                    </Typography>
                }
                   
                    icon={ListAltOutlinedIcon}
                    iconProps={{ className: 'text-button' }}
                />
                <AnimatedListItem 
                    primaryContent={
                    <Typography 
                        // You can still use Tailwind classes here if you want:
                         className="font-bold text-lg  text-gray-700" 
                    >
                    Continuos Updates And Mentorship
                    </Typography>
                }
                   
                    icon={ListAltOutlinedIcon}
                    iconProps={{ className: 'text-button' }}
                />
          
        </List>
      </Box>
    </Box>
  );
};

export default ResponsiveImageAndListContainer;