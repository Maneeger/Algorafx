import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { useInView } from 'react-intersection-observer'; // The key hook

// Component to wrap your existing ListItem
const AnimatedListItem = ({ primaryContent,  icon: IconComponent, iconProps = {} }) => {
  // useInView returns a ref to attach to the DOM element and a boolean state
  const { ref, inView } = useInView({
    // Trigger once the element enters the viewport (threshold: 0.1 = 10% visible)
    threshold: 0.1, 
    triggerOnce: true, // Crucial: ensures the animation only runs once
  });

  return (
    <ListItem
      ref={ref} // Attach the ref to the root element
     
      sx={{
        // Apply a smooth transition to the transform property
        transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
        
        // Initial state (Invisible and shifted right)
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(50px)',
      }}
    >
      <ListItemIcon>
        {/* Use the passed IconComponent */}
        <IconComponent {...iconProps} />
      </ListItemIcon>
      <ListItemText primary={primaryContent}  />
    </ListItem>
  );
};

export default AnimatedListItem;