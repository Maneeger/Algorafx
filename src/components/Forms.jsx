import React, { useState , useEffect} from 'react'
import { SignInWithEmailAndPassword, SignInWithGoogle } from './Auth'
import { useAuth } from './useAuth';
import { Mail, CheckCircle, XCircle, Loader } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
export const Login = () => {
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
// 
 export function SignUpSubscribeForm({ auth, userId, appId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscribe, setSubscribe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth) {
      setError("Authentication service is not ready. Please try again.");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      // 1. SECURE AUTHENTICATION (Primary Action)
      await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
      );

      // 2. SUBSCRIPTION (Secondary Action)
      if (subscribe) {
        await subscribeToNewsletter(email);
      }

      setMessage('Success! Account created and subscription complete. Welcome!');
      setEmail('');
      setPassword('');

    } catch (firebaseError) {
      // Clean up the error message for better user experience
      let errorMessage = firebaseError.message;
      if (errorMessage.includes('auth/weak-password')) {
        errorMessage = 'Password is too weak. Must be at least 6 characters.';
      } else if (errorMessage.includes('auth/email-already-in-use')) {
        errorMessage = 'This email is already registered. Try logging in instead.';
      } else if (errorMessage.includes('auth/api-key-not-valid')) {
        errorMessage = 'Configuration Error: Invalid API Key detected during sign up.';
      }
      
      setError(`Sign Up Failed: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg  bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-indigo-100">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <Mail className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-extrabold text-gray-900">
          Premium Access Sign Up
        </h1>
      </div>
      
      {/* User Info (for debugging/context) */}
      {userId && (
        <p className="text-sm text-gray-500 mb-4 bg-indigo-50 p-3 rounded-lg border border-indigo-200">
          <span className="font-semibold text-indigo-700">App ID:</span> {appId}
          <br />
          <span className="font-semibold text-indigo-700">User ID:</span> {userId}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Messages */}
        {message && (
          <div className="bg-green-100 p-3 rounded-xl border border-green-300 flex items-start space-x-2 text-green-800">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}
        {error && (
          <div className="bg-red-100 p-3 rounded-xl border border-red-300 flex items-start space-x-2 text-red-800">
            <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="At least 6 characters"
            className="w-full px-4 py-3 border text-button border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
          <p className="text-xs mt-1 text-gray-500">Must be at least 6 characters for security.</p>
        </div>

        {/* Newsletter Checkbox */}
        <div className="flex items-center pt-2">
          <input
            id="subscribe"
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label htmlFor="subscribe" className="ml-3 block text-sm text-gray-900 select-none">
            Yes, send me trading signals and market newsletters.
          </label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className={`w-full py-3 px-4 rounded-xl text-white font-semibold shadow-lg transition duration-300 ${
            loading 
              ? 'bg-indigo-400 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <Loader className="w-5 h-5 mr-2 animate-spin" /> Processing...
            </span>
          ) : (
            'Sign Up & Get Access'
          )}
        </button>
      </form>
    </div>
  );
}
const Forms =() => {
    return(
        <Box
            sx={{
                display: 'flex',
                // 1. Base (Mobile-First): Always stack vertically (flex-col)
                flexDirection: 'column',

                // 2. Responsive Breakpoint (sm:row): 
                // At the 'sm' breakpoint (600px by default in MUI), switch to horizontal (row)
                '@media (min-width: 600px)': {
                    flexDirection: 'row',
                },
                // Alternatively, use the shorthand array syntax:
                // flexDirection: { xs: 'column', sm: 'row' },
                
                // Add spacing between the items
                gap: 3, 
                
                // Optional: center items horizontally when stacking vertically
                alignItems: { xs: 'center', sm: 'stretch' }
            }}
        >
            <Login />
            <SignUpSubscribeForm />
        </Box>
    )
}
export default Forms
