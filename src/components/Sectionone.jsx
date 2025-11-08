import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Gavel as RiskIcon, Security as SecurityIcon } from '@mui/icons-material'; // Example: Using Gavel and Security for Risk
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TuneIcon from '@mui/icons-material/Tune';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const FullWidthGrid =() => {
  return (
    <Box sx={{ width: '100%',p: 4,marginBottom:'2rem'}}>
      
       <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center', 
          fontSize: {
      xs: '2rem', 
      
      // 2. Tablet/Desktop (sm and up): Use the larger standard size (e.g., 3rem)
      sm: '3rem', 
      
      // md and up will also use 3rem since it inherits from sm
    },
          marginTop: 2,
          marginBottom: 2, 
          fontWeight: 'bold', // Ensures it's bold (though h1 is already bold by default)
          color: '#02231a', // Bright luminous green color
          // textShadow: '0 0 10px #0000, 0 0 20px #0000, 0 0 30px #018619',
        }}
      >
        What We Teach
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Item>
            <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
              <CurrencyExchangeIcon  sx={{ fontSize: 40, color :"#018619" }} />
          <Typography variant="h6" component="h2" fontWeight="bold">
                       Comprehensive Forex trading:
          </Typography>
          <Typography variant="body1" mt={1}>
              Currency pairs, risk management, and trade setups.
            </Typography>
          </Stack>

          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
              <TrendingUpIcon color="primary" sx={{ fontSize: 40, color :"#018619" }} />
              <Typography variant="h6" component="h2" fontWeight="bold">
                E-Indices Mastery
              </Typography>
            </Stack>
            <Typography variant="body1" mt={1}>
              NASDAQ (US100), US30, and S&P 500 strategies.
            </Typography>
            </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
              <TuneIcon color="primary" sx={{ fontSize: 40, color :"#018619" }} />
              <Typography variant="h6" component="h2" fontWeight="bold">
                Technical & Fundamental Strategies
              </Typography>
            </Stack>
            <Typography variant="body1" mt={1}>
              In-depth strategies for global markets.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
           <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
              <LiveTvIcon color="primary" sx={{ fontSize: 40, color :"#018619" }} />
              <Typography variant="h6" component="h2" fontWeight="bold">
                Live Sessions
              </Typography>
            </Stack>
            <Typography variant="body1" mt={1}>
              Real-time market walkthroughs and analysis.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
           <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
              <DevicesIcon color="primary" sx={{ fontSize: 40, color :"#018619" }} />
              <Typography variant="h6" component="h2" fontWeight="bold">
                On-Demand Learning
              </Typography>
            </Stack>
            <Typography variant="body1" mt={1}>
              Access lessons from anywhere, at any time.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
           <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
              <PeopleAltIcon color="primary" sx={{ fontSize: 40, color :"#018619" }} />
              <Typography variant="h6" component="h2" fontWeight="bold">
                Community & Support
              </Typography>
            </Stack>
            <Typography variant="body1" mt={1}>
              Q&A, trade reviews, and community collaboration.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FullWidthGrid