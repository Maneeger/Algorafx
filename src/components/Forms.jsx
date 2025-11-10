import React, { useState , useEffect, useCallback} from 'react'
import { SignInWithEmailAndPassword, SignInWithGoogle } from './Auth'
import { useAuth } from './useAuth';
import { auth , FIREBASE_APP_ID} from './firebase';
import { toast } from 'react-toastify';
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


export const Login = ( {onToggleToSignup}) => {
    const { UserLoggedIn } = useAuth()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isSigningIn,setIsSigningIn] = useState(false)
      const [errorMessage,setErrorMessage] = useState('')
 
      useEffect(() => {
        if (UserLoggedIn) {
            // If the user is logged in, immediately switch the view to the landing page
            console.log('in man'); // Use the view key defined in App.jsx
        }
    }, [UserLoggedIn]); 


      const onSubmit = async(e) =>{
        e.preventDefault()
        
        if (isSigningIn) return;
         setIsSigningIn(true);
  setErrorMessage(''); // clear old errors
        try {
                await SignInWithEmailAndPassword(email, password);
                 // ✅ stop loading and maybe navigate here
    setIsSigningIn(false);
     toast.success('🎉 Signed in successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
    // navigateTo('dashboard') or wherever
                // The Navigate component above handles successful login
            }
        catch (error) {
                console.error('Login Error:', error);
              toast.error(error.message || '❌ Failed to sign in. Please check your credentials.', {
        position: 'top-right',
        autoClose: 4000,
      });
              
            }
            finally {
      setIsSigningIn(false);
    }

      }
      const onGoogleSignIn = async(e) =>{
        e.preventDefault()
      
              if (isSigningIn) return;

              setIsSigningIn(true);
  

  try {
    await SignInWithGoogle();
    
      toast.success('🚀 Signed in with Google!', {
        position: 'top-right',
        autoClose: 3000,
      });
    setIsSigningIn(false);
    console.log('Google sign-in successful');
  } catch (err) {
    console.error('Google sign-in error', err);
     toast.error(err.message || '⚠️ Failed to sign in with Google.', {
        position: 'top-right',
        autoClose: 4000,
      });
    
  }
  finally {
      setIsSigningIn(false);
    }
        }

        return (
        
            <Box
          
            maxWidth="xs"
                sx={{
                   
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: 'white',
                      minWidth: { xs: '300px', sm: '350px' }
                }}
            >
                <EmailIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                
         
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
                
            {/* The Toggle Link to Signup */}
            <Typography variant="body2" sx={{ mt: 2 }}>
                Don't have an account? 
                <Link 
                    component="span" 
                    onClick={onToggleToSignup} // 🔑 Call the parent's function here
                    sx={{ cursor: 'pointer', ml: 0.5, fontWeight: 'bold' }}
                >
                    Sign Up
                </Link>
            </Typography>
            </Box>
      
    );
      }



// 
 export function SignUpSubscribeForm({ auth, userId, appId , onToggleToLogin, onSignupSuccess}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscribe, setSubscribe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
console.log("Auth Prop Received:", auth)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth) {
      toast.error("Authentication service is not ready. Please try again.");
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

      let finalMessage = 'Success! Your account has been created.';
      // 2. SUBSCRIPTION (Secondary Action)
      if (subscribe) {
        try {
            await subscribeToNewsletter(email);
            finalMessage += ' You are now subscribed to our newsletter.';
        } catch (subscriptionError) {
            // Log the subscription error but let the sign-up success pass
            console.error("Newsletter subscription failed:", subscriptionError);
            finalMessage += ' We created your account, but there was an error subscribing you to the newsletter. Please try again later.';
        }
      }
toast.success(finalMessage)
      setMessage('finalMessage');
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
      
     toast.error(`Sign Up Failed: ${errorMessage}`);
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

      </form>  {/* The Toggle Link to Login */}
            <Typography variant="body2" sx={{ mt: 2 }} component="div">
                Already have an account? 
                <Link 
                    component="span" 
                    onClick={onToggleToLogin} // 🔑 Call the parent's function here
                    sx={{ cursor: 'pointer', ml: 0.5, fontWeight: 'bold' }}
                >
                    Sign In instead
                </Link>
            </Typography>
    </div>
  );
}
const Forms =() => {
   const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
     // Function to toggle the view via button/link click
    const toggleFormView = useCallback(() => {
        setIsLoginFormVisible(prevState => !prevState);
    }, []);

    const handleSignupSuccess = useCallback(() => {
        // Automatically switch to the Login form
        setIsLoginFormVisible(true);
        // Optional: clear any form data or show a success message
    }, []);
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
                    justifyContent:'center',
                    gap:'0'
                },
                // Alternatively, use the shorthand array syntax:
                // flexDirection: { xs: 'column', sm: 'row' },
                
                // Add spacing between the items
                gap: 3, 
                
                // Optional: center items horizontally when stacking vertically
                alignItems: { xs: 'center', sm: 'stretch' }
            }}
        >
        <Box
                sx={{
                    // Centered box to hold the current form
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    // Apply a transition for a smoother visual switch
                    transition: 'opacity 0.3s ease-in-out', 
                    // Use a key to force re-render on switch, which can help with animations/focus
                }}
            >
                {/* 2. CONDITIONAL RENDERING */}
                {isLoginFormVisible ? (
                    // Show Login
                    <Login 
                        onToggleToSignup={toggleFormView} 
                    />
                ) : (
                    // Show Signup (Default)
                    <SignUpSubscribeForm 
                        auth={auth} 
                        userId={'mock-user'} 
                        appId={FIREBASE_APP_ID} 
                        onToggleToLogin={toggleFormView} // For the "Already have an account? Sign In instead" link
                        onSignupSuccess={handleSignupSuccess} // For successful form submission
                    />
                )}
            </Box>
        </Box>
    )
}
export default Forms
