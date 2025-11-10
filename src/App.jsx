import { useState,useEffect } from 'react'
import { Mail, CheckCircle, XCircle, Loader } from 'lucide-react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Authcontext.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css'
import Hero from './components/Hero.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  FullWidthGrid  from './components/Sectionone.jsx';
import  ResponsiveImageAndListContainer  from './components/SectionTwo.jsx';
import  Forms  from './components/Forms.jsx';




function App() {


const renderContent = () => {
       
                return (
                    <> <Navbar />
                        <Hero  id="home-section"/>
                        <FullWidthGrid  id="features-section"/>
                        <ResponsiveImageAndListContainer/>
                        <Forms />
                        {/* <SignUpSubscribeForm id="register-section" />
                         <Login id="login-section" /> */}
                    </>
                );
        }
   
 
return (
        <AuthProvider>
            <ToastContainer />
          <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                // Ensure content takes up at least the viewport height
            }}>
           
            
            {/* Render the content based on state */}
            {renderContent()}
            </Box>
        </AuthProvider>
    );
 }


export default App
