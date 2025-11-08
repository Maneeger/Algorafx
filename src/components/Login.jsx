import React, { useState , useEffect} from 'react'
import { SignInWithEmailAndPassword, SignInWithGoogle } from './Auth'
import { useAuth } from './useAuth';
// Material-UI Imports
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Link,
  CircularProgress, 
  Alert 
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';

const Login = () => {
    const { UserLoggedIn } = useAuth()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isSigningIn,setIsSigningIn] = useState(false)
      const [errorMessage,setErrorMesssage] = useState('')
 
      useEffect(() => {
        if (UserLoggedIn) {
            // If the user is logged in, immediately switch the view to the landing page
            console.log('in man'); // Use the view key defined in App.jsx
        }
    }, [UserLoggedIn]); 

      const onSubmit = async(e) =>{
        e.preventDefault()
        if(!isSigningIn){
            setIsSigningIn(true)
            await SignInWithEmailAndPassword(email,password)
        }
        try {
                await SignInWithEmailAndPassword(email, password);
                // The Navigate component above handles successful login
            }
        catch (error) {
                console.error('Login Error:', error);
                setErrorMessage(error.message || 'Failed to sign in. Please check your credentials.');
                setIsSigningIn(false); // Stop loading animation
            }

      }
      const onGoogleSignIn = (e) =>{
        e.preventDefault()
        if(!isSigningIn){
              setIsSigningIn(true)
              SignInWithGoogle().catch(err =>{
                console.error('google sign-in error', err)
            setErrorMessage(err.message || 'Failed to sign in with Google.');

                setIsSigningIn(false)
              })
        }
      }

return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: 'white',
                }}
            >
                <EmailIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                
                {/* Display error message if present */}
                {errorMessage && (
                    <Alert severity="error" sx={{ width: '100%', mt: 2, mb: 1 }}>
                        {errorMessage}
                    </Alert>
                )}

                <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                    {/* Email Input Field */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSigningIn}
                    />

                    {/* Password Input Field */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isSigningIn}
                    />

                    {/* Sign In Button */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isSigningIn || !email || !password}
                    >
                        {isSigningIn ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Sign In'
                        )}
                    </Button>
                </Box>
                
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    OR
                </Typography>

                {/* Sign In with Google Button */}
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    onClick={onGoogleSignIn}
                    disabled={isSigningIn}
                    sx={{ mb: 2 }}
                >
                    {isSigningIn ? (
                        <CircularProgress size={24} color="primary" />
                    ) : (
                        'Sign In with Google'
                    )}
                </Button>

                {/* Link to Registration */}
                <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account? 
            
            {/* ✅ The MUI Link component is used here */}
            <Link 
                // 🛑 Use component="span" for semantic correctness within Typography
                component="span" 
                
                // Use onClick to trigger the state change instead of the 'to' prop
                onClick={() => navigateTo('register')} 
                
                // Add styling to make it clear it's clickable
                sx={{ 
                    cursor: 'pointer', 
                    ml: 0.5, // Small left margin for spacing
                    fontWeight: 'bold' // Optional: make it stand out more
                }}
            >
                Sign Up
            </Link>
        </Typography>
            </Box>
        </Container>
    );
};

export default Login;