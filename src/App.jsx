import { useState,useEffect } from 'react'
import { Mail, CheckCircle, XCircle, Loader } from 'lucide-react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Authcontext.jsx';
 import { ThemeProvider } from '@mui/material/styles'; 
 import {customTheme} from './theme/muiTheme.js'
import Navbar from './components/Navbar.jsx';
import './App.css'
import Hero from './components/Hero.jsx';
import AboutFounder from './components/About.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  FullWidthGrid  from './components/Sectionone.jsx';
import  ResponsiveImageAndListContainer  from './components/SectionTwo.jsx';
import  Forms  from './components/Forms.jsx';
import PricingSection from './components/Pricing.jsx';

111


function App() {


const renderContent = () => {
       
                return (
                    <> <Navbar />
                        <Hero  id="home-section"/>
                        <FullWidthGrid  id="features-section"/>
                        <ResponsiveImageAndListContainer/>
                        <AboutFounder/>
                        <Forms />
                        <PricingSection/>
                    </>
                );
        }
   
 
return (
    <ThemeProvider theme={customTheme}>
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
        </ThemeProvider>
    );
 }


export default App
